import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../../../../../../../components/Button/Button";
import ControlButton from "../../../../../../../../components/controls-button";
import css from "./styles.module.scss";
import { useAppDispatch, useAppSelector} from "../../../../../../../../services/type-service";
import { API_URL } from "../../../../../../../../services/api";
import { addHall, addHallPhoto, getHalls,} from "../../../../../../../../store/thunk/studio";

type TAddFormProps = {
  onClick?: () => void;
};

const AddHallForm = ({ onClick }: TAddFormProps) => {
  const dispatch = useAppDispatch();
  const currentHallData = useAppSelector(
    (state) => state.studio.currentHallData
  );
  const [isPhotoLoad, setIsPhotoLoad] = useState(false);

  //начальные данные
  const [previewImage, setPreviewImage] = useState(
    currentHallData ? `${API_URL}${currentHallData?.PhotoHall}` : null
  );
  const [titleHall, setTitleHall] = useState("");
  const [descriptionHall, setDescriptionHall] = useState("");

  //сначала проверяем фотографию
  const [errorDownload, serErrorDownload] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [file, setFile] = useState<File>();
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    serErrorDownload("");

    const selectFile = event.target.files && event.target.files[0];
    if (!selectFile) {
      return;
    }
    // Проверяем формат файла
    const allowedExtensions = /(\.jpg)$/i;
    if (!allowedExtensions.exec(selectFile.name)) {
      serErrorDownload("Допустимы файлы формата jpg, размер до 320х252");
      setPreviewImage("");
      setIsValid(false);
    } else {
      setIsValid(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setPreviewImage(base64Image);
        setFile(selectFile);
      };

      // Чтение файла в формате DataURL
      reader.readAsDataURL(selectFile);
    }
  };
  // Отправка фотографии на сервер
  useEffect(() => {
    if (isValid && file) {
      dispatch(addHallPhoto({ PhotoHall: file })).unwrap();
      setIsPhotoLoad(true);
    }
  }, [isValid, file]);

  //отправка данных о зале на сервер
  const sendHallData = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (currentHallData) {
      const IdHall = currentHallData.IdHall;
      const Title = titleHall;
      const Description = descriptionHall;
      dispatch(addHall({ IdHall, Title, Description }))
        .unwrap()
        .then(() => dispatch(getHalls()))
        .then(() => {if (onClick) onClick()});
    }
  };
 //проверка все ли поля заполнены
 const [isValidForm, setIsValidForm] = useState(false);
 useEffect(() => {
   if (isPhotoLoad && titleHall && descriptionHall) {
     setIsValidForm(true);
   } else {
     setIsValidForm(false);
   }
 }, [isPhotoLoad, titleHall, descriptionHall]);
  return (
    <div className={css.container}>
      <div className={css.control}>
        <ControlButton id="close" onClick={onClick} />
      </div>
      <form className={css.form} encType="multipart/form-data">
        <label htmlFor="PhotoHall" className={css.download} >
          Добавить фото
          <input
            type="file"
            name="PhotoHall"
            id="PhotoHall"
            onChange={handleFileChange}
          />
          {previewImage && previewImage !== null && (
            <img src={previewImage} alt="Preview" />
          )}
        </label>
        {errorDownload && <p className={css.errorMessage}>{errorDownload}</p>}
        <div className={css.content}>
            <>
              <textarea
                name="title"
                id="title"
                rows={1}
                placeholder="Добавить название"
                value={titleHall}
                onChange={(e) => setTitleHall(e.target.value)}
              />
              <textarea
                name="description"
                id="description"
                rows={5}
                placeholder="Добавить описание"
                value={descriptionHall}
                onChange={(e) => setDescriptionHall(e.target.value)}
              />
              <div className={css.buttonGroup}>
                <Button
                  text="Сохранить"
                  disabled={!isValidForm}
                  cls={!isValidForm ? "btn-dis" : "btn-save"}
                  openModalForm={sendHallData}
                />
                <Button text="Отменить" cls="btn-cancel" openModalForm={onClick}/>
              </div>
            </>
        </div>
      </form>
    </div>
  );
};

export default AddHallForm;
