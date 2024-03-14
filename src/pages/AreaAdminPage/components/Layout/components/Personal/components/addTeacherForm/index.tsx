import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../../../../../../../components/Button/Button";
import ControlButton from "../../../../../../../../components/controls-button";
import css from "./styles.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../services/type-service";
import { API_URL } from "../../../../../../../../services/api";
import {
  addTeacher,
  addTeacherPhoto,
  getTeachers,
} from "../../../../../../../../store/thunk/studio";

type TAddFormProps = {
  onClick?: () => void;
};

const AddTeacherForm = ({ onClick }: TAddFormProps) => {
  const dispatch = useAppDispatch();
  const currentTeacherData = useAppSelector(
    (state) => state.studio.currentTeacherData
  );
  const [isPhotoLoad, setIsPhotoLoad] = useState(false);

  //начальные данные
  const [previewImage, setPreviewImage] = useState(
    currentTeacherData ? `${API_URL}${currentTeacherData?.photoTeachers}` : null
  );
  const [nameTeacher, setNameTeacher] = useState("");
  const [descriptionTeacher, setDescriptionTeacher] = useState("");

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
      serErrorDownload("Допустимы файлы формата jpg, размер до 200х200");
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
      dispatch(addTeacherPhoto({ photoTeachers: file })).unwrap();
      setIsPhotoLoad(true);
    }
  }, [isValid, file]);

  //отправка данных о преподавателе на сервер
  const sendTeacherData = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (currentTeacherData && isPhotoLoad) {
      const idTeachers = currentTeacherData.idTeachers;
      const teachersName = nameTeacher;
      const description = descriptionTeacher;
      dispatch(addTeacher({ idTeachers, teachersName, description }))
        .unwrap()
        .then(() => dispatch(getTeachers()))
        .then(() => {if (onClick) onClick()});
    }
  };
  //проверка все ли поля заполнены
  const [isValidForm, setIsValidForm] = useState(false);
  useEffect(() => {
    if (isPhotoLoad && nameTeacher && descriptionTeacher) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [isPhotoLoad, nameTeacher, descriptionTeacher]);

  return (
    <div className={css.container}>
      <div className={css.control}>
        <ControlButton id="close" onClick={onClick} />
      </div>
      <form className={css.form} encType="multipart/form-data">
        <label htmlFor="photoTeacher" className={css.download}>
          Добавить фото
          <input
            type="file"
            name="photoTeacher"
            id="photoTeacher"
            onChange={handleFileChange}
          />
          {previewImage && previewImage !== null &&  previewImage !== "" && (
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
              placeholder="Имя и фамилия"
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
                disabled={!isValidForm}
                cls={!isValidForm ? "btn-dis" : "btn-save"}
                openModalForm={sendTeacherData}
              />
              <Button text="Отменить" cls="btn-cancel" openModalForm={onClick} />
            </div>
          </>
        </div>
      </form>
    </div>
  );
};

export default AddTeacherForm;
