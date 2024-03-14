import { useEffect, useState } from "react";
import css from "./forms.module.scss";
import { useAppDispatch } from "../../services/type-service";
import {
  getCurrentUserData,
  getCurrentUserRole,
  login,
} from "../../store/thunk/auth";
import EyeIcon from "../EyeIcon";
import Button from "../Button/Button";
import { authSlice } from "../../store/slices/auth";
import { useNavigate } from "react-router";
import { validMail } from "../../services/validate";

const LoginForm = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();
  const [isValidForm, setIsValidForm] = useState(false);
  const [errorMail, setErrorMail] = useState("");

  //состояние инпутов главной формы
  const [item, setItem] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setItem({ ...item, [e.target.name]: e.target.value });
    setErrorMail("");
  };

  //сообщение ошибки, если не заполнена почта
  useEffect(() => {
    setErrorMessage("");
    const isValidateMail = validMail(item.email);
    if (!isValidateMail && item.email !== "") {
      setErrorMail("Введите корректный email");
    } else {
      setErrorMail("");
    }
    if (isValidateMail && item.password !== "") {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [item]);

  //вход пользователя
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const emailUser = item.email;
    const password = item.password;
    const data = {
      emailUser,
      password,
    };
    dispatch(login(data))
      .unwrap()
      .then(() => {
        dispatch(getCurrentUserRole());
      })
      .then(() => {
        dispatch(getCurrentUserData());
      })
      .then(() => navigate("/"))
      .catch(() => {
        setErrorMessage("Неправильный логин или пароль");
      });
  };

  //состояние переключения "глазика"
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <h3>Вход</h3>
      <div className={css.content}>
        <form onSubmit={handleSubmit} className={css.form}>
          <fieldset>
            <label htmlFor="tel">
              Адрес электронной почты
              <input
                type="email"
                value={item.email}
                onChange={handleChange}
                name="email"
                className={
                  (errorMail && errorMail !== "") ||
                  (errorMessage && errorMessage !== "")
                    ? `${css.errorInput}`
                    : ""
                }
                placeholder="example@gmail.com"
              />
            </label>
            {(errorMail && errorMail !== "")  && (
                <span className={css.errorMessage}>
                  {errorMail}
                </span>
              )}
              {(errorMessage && errorMessage !== "")  && (
                <span className={css.errorMessage}>
                  {errorMessage}
                </span>
              )}
          </fieldset>

          <fieldset>
            <label htmlFor="password">
              Пароль
              <input
                value={item.password}
                onChange={handleChange}
                name="password"
                type={showPassword ? "text" : "password"}
                className={
                  errorMessage && errorMessage !== "" ? `${css.errorInput}` : ""
                }
                placeholder="exampLe_56q"
              />
              <div className={css.eyeIcon}>
                <EyeIcon
                  showPassword={showPassword}
                  togglePasswordVisibility={togglePasswordVisibility}
                />
              </div>
            </label>
          </fieldset>

          <div className={css.linkGroup}>
            <label
              onClick={() => {
                dispatch(authSlice.actions.changeFormActive("registration"));
              }}
            >
              Зарегистрироваться
            </label>
            <label
              onClick={() => {
                dispatch(authSlice.actions.changeFormActive("recovery"));
              }}
            >
              Забыли пароль?
            </label>
          </div>

          <Button text="Войти" cls="btn-reg" disabled={!isValidForm}/>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
