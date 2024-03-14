import css from "./styles.module.scss";
import { Link, Navigate } from "react-router-dom";
import { AppRoute } from "../../const/route";
import { useAppDispatch, useAppSelector } from "../../services/type-service";
import { AuthorizationStatus } from "../../const/const";
import { logout } from "../../store/thunk/auth";
import ControlButton from "../controls-button";
import { useEffect, useState } from "react";
import sprite from "../../assets/sprite.svg";
import { getAuthStatus } from "../../store/selectors/selectors";

type IModalFormProps = {
  openModalForm?: () => void;
};

const AreaForm = ({ openModalForm }: IModalFormProps) => {
  useEffect(() => {
    const findContainer = document.querySelector("#area");

    setTimeout(() => {
      findContainer?.classList.add(`${css.active}`);
    }, 10);

    return () => {
      setTimeout(() => {
        findContainer?.classList.remove(`${css.active}`);
      }, 10);
    };
  }, []);

  //выход из аккаунта
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(logout());
    if (openModalForm) {
      openModalForm();
    }
  };

  //проверка авторизации пользователя
  const authorizationStatus = useAppSelector(getAuthStatus);
  const roleData = useAppSelector((state) => state.auth.userRole)?.role;

  const [role, setRole] = useState(roleData);
  useEffect(() => {
    setRole(roleData)
  },[roleData])

  if (authorizationStatus !== AuthorizationStatus.Auth || role === "") {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <div className={css.area} id="area">
      <div className={css.decoration}></div>
      <div className={css.closeContainer}>
        <ControlButton id="close" onClick={openModalForm} />
      </div>

      {role === "customers" && (
        <p className={css.submenu} onClick={openModalForm}>
          <Link to={AppRoute.PersonalArea}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <use xlinkHref={`${sprite}#user`}></use>
            </svg>
            Профиль
          </Link>
        </p>
      )}
      {role === "administrator" && (
        <p className={css.submenu} onClick={openModalForm}>
          <Link to={AppRoute.AdministratorArea}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <use xlinkHref={`${sprite}#user`}></use>
            </svg>
            Профиль
          </Link>
        </p>
      )}

      <p className={css.submenu} onClick={handleClick}>
        <Link to={AppRoute.Root}>
          <svg width="24" height="24" viewBox="0 0 25 25">
            <use xlinkHref={`${sprite}#logout`}></use>
          </svg>
          Выход
        </Link>
      </p>
    </div>
  );
};

export default AreaForm;
