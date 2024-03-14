import { useState } from "react";
import css from "./styles.module.scss";
import ProfileImg from "./ProfileImg";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../services/type-service";
import Spinner from "../../../../../components/Spinner";
import Button from "../../../../../components/Button/Button";
import {
  changeUserData,
  deleteUserData,
  getCurrentUserData,
} from "../../../../../store/thunk/auth";
import { Modal } from "../../../../../components/modal-form/Modal";
import ControlButton from "../../../../../components/controls-button";
// import { Navigate } from "react-router-dom";
// import { AppRoute } from "../../../../../const/route";

const Settings = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.userData);
  const dateOfBirth = userData.dateOfBirth
    ? new Date(userData.dateOfBirth)
    : "";
  //начальные данные из базы, почти все пустые
  const [userInput, setUserInput] = useState({
    emailUser: userData.emailUser,
    password: userData.password,
    userName: userData.userName,
    genders: userData.genders,
    phoneNumber: userData.phoneNumber,
    dateOfBirth: dateOfBirth && dateOfBirth.toISOString().substr(0, 10),
  });
  const handleChange = (e: { target: { name: string; value: string } }) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const handleRadioChange = (e: {
    target: { name: string; value: string };
  }) => {
    setUserInput({ ...userInput, genders: e.target.value });
  };

  //отправляем в базу обновленные данные всех полей, даже если заполнили только одно поле
  const saveSettings = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!userInput) return false;
    dispatch(
      changeUserData({
        userName: userInput.userName,
        genders: userInput.genders,
        phoneNumber: userInput.phoneNumber,
        dateOfBirth: new Date(userInput.dateOfBirth),
      })
    )
      .unwrap()
      .then(() => {
        dispatch(getCurrentUserData());
      });
  };
  // удаление аккаунта
  const [isDeleteAcc, setIsDeleteAcc] = useState(false);
  const [successDel, setSuccessDel] = useState(false);
  const [errorDel, setErrorDel] = useState(false);
  const deleteAccount = () => {
    setSuccessDel(true);
    setTimeout(() => {
      setSuccessDel(false);
      dispatch(deleteUserData())
        .unwrap()
        .catch(() => setErrorDel(true));
    }, 3000);
  };

  if (!userData) {
    <Spinner />;
  }

  return (
    <>
      <div className={css.container}>
        <ProfileImg />

        <form className={css.form}>
          <div className={css.info}>
            <fieldset>
              <label>Имя</label>
              <input
                type="text"
                name="userName"
                id="name"
                placeholder="Введите имя"
                className={css.input}
                value={userInput.userName}
                onChange={handleChange}
              />
            </fieldset>

            <fieldset>
              <label>Пол</label>
              <div className={css.inputGroup}>
                <input
                  type="radio"
                  id="female"
                  name="genders"
                  className={css.radio}
                  value="female"
                  onChange={handleRadioChange}
                  checked={userInput.genders === "female"}
                />
                <label htmlFor="female" className={css.radioLabel}>
                  Ж
                </label>

                <input
                  type="radio"
                  id="male"
                  name="genders"
                  className={css.radio}
                  value="male"
                  onChange={handleRadioChange}
                  checked={userInput.genders === "male"}
                />
                <label htmlFor="male" className={css.radioLabel}>
                  М
                </label>
              </div>
            </fieldset>

            <fieldset>
              <label>Номер телефона</label>
              <input
                type="text"
                name="phoneNumber"
                id="tel"
                placeholder="+71111111111"
                className={css.input}
                value={userInput.phoneNumber}
                onChange={handleChange}
              />
            </fieldset>

            <fieldset>
              <label>E-mail</label>
              <input
                type="email"
                name="emailUser"
                id="email"
                className={css.input}
                value={userData.emailUser}
                disabled
              />
            </fieldset>

            <fieldset>
              <label>Дата рождения</label>
              <input
                type="date"
                name="dateOfBirth"
                id="date"
                className={css.input}
                value={userInput.dateOfBirth}
                onChange={handleChange}
              />
            </fieldset>

            <div className={css.saveSettings}>
              <Button
                text="Сохранить"
                cls="btn-save"
                openModalForm={(e: React.MouseEvent<HTMLButtonElement>) =>
                  saveSettings(e)
                }
              />
            </div>
          </div>
        </form>
      </div>
      <div className={css.deleteAccount}>
        <Button
          text="Удалить профиль"
          cls="btn-del"
          openModalForm={() => setIsDeleteAcc(!isDeleteAcc)}
        />
        {isDeleteAcc && (
          <Modal>
            <div className={css.deleteModal}>
              <p>
                Вы уверены?
                <div className={css.buttonGroup}>
                  <Button
                    text="Да"
                    cls="btn-save"
                    openModalForm={deleteAccount}
                  />
                  <Button
                    text="Нет"
                    cls="btn-cancel"
                    openModalForm={() => setIsDeleteAcc(!isDeleteAcc)}
                  />
                </div>
              </p>
            </div>
          </Modal>
        )}
        {successDel && (
          <Modal>
            <div className={css.deleteModal}>
              <p>Удаляем...</p>
            </div>
          </Modal>
        )}
        {errorDel && (
          <Modal>
            <div className={css.deleteModal}>
              <ControlButton id="close" onClick={() => {setErrorDel(false); setSuccessDel(false)}} />
              <p>Ой, что-то пошло не так &#128566 </p>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Settings;
