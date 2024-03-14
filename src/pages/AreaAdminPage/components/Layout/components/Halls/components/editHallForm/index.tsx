import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../../../../../../../components/Button/Button";
import ControlButton from "../../../../../../../../components/controls-button";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../services/type-service";
import css from "./styles.module.scss";
import { API_URL } from "../../../../../../../../services/api";
import {
  addHall,
  getHalls,
} from "../../../../../../../../store/thunk/studio";

type TEditFormProps = {
  onClick?: () => void;
  id: number;
};

const EditHallForm = ({ onClick, id }: TEditFormProps) => {
  const dispatch = useAppDispatch();
  const hallsData = useAppSelector((state) => state.studio.hallsData);
  const currentHallData = hallsData?.filter((item) => item.IdHall === id)[0];

  //начальные данные
  const [previewImage, setPreviewImage] = useState("");
  const [titleHall, setTitleHall] = useState("");
  const [descriptionHall, setDescriptionHall] = useState("");
  useEffect(() => {
    if (currentHallData) {
      setPreviewImage(`${API_URL}${currentHallData?.PhotoHall}`);
      setTitleHall(currentHallData.Title);
      setDescriptionHall(currentHallData.Description);
    }
  }, [currentHallData]);

  //проверяем фотографию, если изменилась
  const [errorDownload, serErrorDownload] = useState("");
  // const [isValid, setIsValid] = useState(true);
  // const [file, setFile] = useState<File>();
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
      // setIsValid(false);
    } else {
      // setIsValid(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setPreviewImage(base64Image);
        // setFile(selectFile);
      };

      // Чтение файла в формате DataURL
      reader.readAsDataURL(selectFile);
    }
  };

  // Отправка фотографии на сервер
  // useEffect(() => {
  //   if (isValid && file) {
  //     dispatch(addHallPhoto({ PhotoHall: file })).unwrap();
  //   }
  // }, [isValid, file]);

  //отправка измененных данных о зале на сервер
  const sendHallData = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (currentHallData) {
      const IdHall = currentHallData.IdHall;
      // const PhotoHall = currentHallData.PhotoHall;
      const Title = titleHall;
      const Description = descriptionHall;
      dispatch(addHall({ IdHall, Title, Description }))
        .unwrap()
        .then(() => dispatch(getHalls()))
        .then(() => {if (onClick) onClick()});
    }
  };
  return (
    <div className={css.container}>
      <div className={css.control}>
        <ControlButton id="close" onClick={onClick} />
      </div>
      <form className={css.form} encType="multipart/form-data">
        <label htmlFor="PhotoHall" className={css.download}>
          Добавить фото
          <input
            type="file"
            name="PhotoHall"
            id="PhotoHall"
            onChange={handleFileChange}
          />
          {previewImage && previewImage !== "" && (
            <img src={previewImage} alt="Preview" />
          )}
        </label>
        {errorDownload && <p className={css.errorMessage}>{errorDownload}</p>}
        <div className={css.content}>
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
              cls="btn-save"
              openModalForm={sendHallData}
            />
            <Button text="Отменить" cls="btn-cancel" openModalForm={onClick}/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditHallForm;
