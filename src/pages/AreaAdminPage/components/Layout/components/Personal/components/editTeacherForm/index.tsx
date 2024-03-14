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
  addTeacher,
  getTeachers,
} from "../../../../../../../../store/thunk/studio";

type TEditFormProps = {
  onClick?: () => void;
  id: number;
};

const EditTeacherForm = ({ onClick, id }: TEditFormProps) => {
  const dispatch = useAppDispatch();
  const teachersData = useAppSelector((state) => state.studio.techersData);
  const currentTeacherData = teachersData?.filter(
    (item) => item.idTeachers === id
  )[0];

  //начальные данные
  const [previewImage, setPreviewImage] = useState("");
  const [nameTeacher, setNameTeacher] = useState("");
  const [descriptionTeacher, setDescriptionTeacher] = useState("");
  useEffect(() => {
    if (currentTeacherData) {
      setPreviewImage(`${API_URL}${currentTeacherData?.photoTeachers}`);
      setNameTeacher(currentTeacherData.teachersName);
      setDescriptionTeacher(currentTeacherData.description);
    }
  }, [currentTeacherData]);

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
    if (currentTeacherData) {
      const idTeachers = currentTeacherData.idTeachers;
      // const PhotoHall = currentHallData.PhotoHall;
      const teachersName = nameTeacher;
      const description = descriptionTeacher;
      dispatch(addTeacher({ idTeachers, teachersName, description }))
        .unwrap()
        .then(() => dispatch(getTeachers()))
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

          <input
            type="file"
            name="PhotoHall"
            id="PhotoHall"
            onChange={handleFileChange}
          />
          {previewImage && previewImage !== "" && (
            // <img src={previewImage} alt="Preview" />

            <div className={css.photoContainer}>
              <div className={css.photoItem}>
                <div className={css.photoBody}>
                  <img
                    src={previewImage}
                    alt="Preview"
                    className={css.staffPhoto}
                  />
                </div>
              </div>
            </div>
          )}
        </label>
        {errorDownload && <p className={css.errorMessage}>{errorDownload}</p>}
        <div className={css.content}>
          <textarea
            name="title"
            id="title"
            rows={2}
            placeholder="Добавить название"
            value={nameTeacher}
            onChange={(e) => setNameTeacher(e.target.value)}
          />
          <textarea
            name="description"
            id="description"
            rows={5}
            placeholder="Добавить описание"
            value={descriptionTeacher}
            onChange={(e) => setDescriptionTeacher(e.target.value)}
          />
          <div className={css.buttonGroup}>
            <Button
              text="Сохранить"
              cls="btn-save"
              openModalForm={sendHallData}
            />
            <Button text="Отменить" cls="btn-cancel" openModalForm={onClick} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTeacherForm;
