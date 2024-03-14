import css from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import AreaForm from "../drop-down-menu/AreaForm";
import { useAppDispatch, useAppSelector } from "../../services/type-service";
import sprite from "../../assets/sprite.svg";
import { AppRoute } from "../../const/route";
import { authSlice } from "../../store/slices/auth";
import Burger from "../burger-menu/index";
import BurgerIcon from "../burger-icon";
import { pagesHeader } from "../../const/const";
import { getAuthStatus } from "../../store/selectors/selectors";

const Header = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  //  открытие модалки регистрации или входа
  const [isOpenModal, setIsModal] = useState(false);
  const openModalForm = () => {
    setIsModal(!isOpenModal);
  };

  //проверка авторизации пользователя
  const authorizationStatus = useAppSelector(getAuthStatus);
  const user = useAppSelector((state) => state.auth.userData);

  const [userData, setUserData] = useState(user);
  useEffect(() => {
    setUserData(user);
  }, [user]);

  const [isShowBurger, setIsShowBurger] = useState(false);

  const userRole = useAppSelector((state) => state.auth.userRole)?.role;

  return (
    <div className={css.header}>
      <Logo />
      <nav className={css.wrapper}>
        <ul className={css.navigation}>
          {pagesHeader.map((page) => {
            const check =
              page.title === "Услуги и цены" || page.title === "Контакты";
            return (
              <li key={page.id} className={css.menuItem}>
                {check ? (
                  <HashLink smooth to={page.url}>
                    {page.title}
                  </HashLink>
                ) : (
                  <Link to={page.url}>{page.title}</Link>
                )}
              </li>
            );
          })}
        </ul>
        <div className={css.burgerMenu}>
          <BurgerIcon onClick={() => setIsShowBurger(!isShowBurger)} />
          {isShowBurger && (
            <Burger onClick={() => setIsShowBurger(!isShowBurger)} />
          )}
        </div>
      </nav>
      {authorizationStatus === "AUTH" && userRole === "customers" && (
        <div className={css.userControl}>
          <Link to={`${AppRoute.PersonalArea}/notifications`}>
            <svg width="30" height="30" viewBox="0 0 30 30">
              <use xlinkHref={`${sprite}#notification`}></use>
            </svg>
          </Link>
          <div className={css.subMenu}>
            <Button
              text={
                userData?.userName !== ""
                  ? `${userData.userName}`
                  : `${userData.emailUser?.split("@")[0]}`
              }
              cls="btn-enter"
              openModalForm={openModalForm}
            ></Button>
            {isOpenModal && <AreaForm openModalForm={openModalForm} />}
          </div>
        </div>
      )}

      {authorizationStatus === "AUTH" && userRole === "administrator" && (
        <div className={css.subMenu}>
          <Button
            text="Admin"
            cls="btn-enter"
            openModalForm={openModalForm}
          ></Button>
          {isOpenModal && <AreaForm openModalForm={openModalForm} />}
        </div>
      )}

      {(authorizationStatus === "NO_AUTH" ||
        authorizationStatus === "UNKNOWN" ||
        userRole === "") && (
        <Link
          to={`${AppRoute.Modal}${AppRoute.Login}`}
          state={{ previousLocation: location }}
          onClick={() => dispatch(authSlice.actions.changeFormActive("login"))}
        >
          <div className={css.buttonContainer}>
            <Button
              text="Вход"
              cls="btn-enter"
              // openModalForm={openModalForm}
            ></Button>
          </div>
          {/* {isOpenModal && <LoginForm openModalForm={openModalForm} />} */}
        </Link>
      )}
    </div>
  );
};

export default Header;
