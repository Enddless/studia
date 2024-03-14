import css from "./styles.module.scss";
import { ChangeEvent, useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../services/type-service";
import { API_URL } from "../../../../../../services/api";
import {
  changeUserPhoto,
  deleteUserPhoto,
  getCurrentUserData,
} from "../../../../../../store/thunk/auth";
import ControlButton from "../../../../../../components/controls-button";

function ProfileImg() {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.userData);

  const [previewImage, setPreviewImage] = useState(
    userData.photoUser !== "" ? `${API_URL}${userData.photoUser}` : null
  );
  const [errorDownload, setErrorDownload] = useState("");
  const [isValid, setIsValid] = useState(true);
  //изменение состояния фотографии
  const [file, setFile] = useState<File>();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setErrorDownload("");

    const selectFile = event.target.files && event.target.files[0];
    if (!selectFile) {
      return;
    }
    // Проверяем формат файла
    const allowedExtensions = /(\.jpg)$/i;
    if (!allowedExtensions.exec(selectFile.name)) {
      setErrorDownload("Допустимы файлы формата jpg, размер до 512х512");
      setPreviewImage("");
      setIsValid(false);
    } else {
      setErrorDownload("");
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
      dispatch(changeUserPhoto({ photoUser: file }))
        .unwrap()
        .then(() => {
          dispatch(getCurrentUserData());
          setErrorDownload("");
        })
        .catch(() => {
          setErrorDownload("Размер превышает разрешенный до 512х512");
          setPreviewImage("");
        });
    }
  }, [isValid, file, dispatch]);

  // Обновление previewImage при изменении file
  useEffect(() => {
    if (userData.photoUser !== "") {
      setPreviewImage(`${API_URL}${userData.photoUser}?${Date.now()}`);
    }
  }, [userData.photoUser]);

  const deletePhoto = () => {
    dispatch(deleteUserPhoto())
      .unwrap()
      .then(() => {
        dispatch(getCurrentUserData());
        setPreviewImage("");
      });
  };
  return (
    <form className={css.profileImg} encType="multipart/form-data">
      <label htmlFor="photoUser" className={css.download}>
        <input
          type="file"
          name="photoUser"
          id="photoUser"
          onChange={handleFileChange}
        />

        <div className={css.controls}>
          <ControlButton id="edit" />
        </div>
        {previewImage && previewImage !== "" && (
          <img src={previewImage} alt="Preview" />
        )}
      </label>
      <div className={css.controls} onClick={deletePhoto}>
        <ControlButton id="delete" />
      </div>
      {errorDownload && <p className={css.errorMessage}>{errorDownload}</p>}
    </form>
  );
}

export default ProfileImg;
