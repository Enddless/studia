import { NavLink } from "react-router-dom";
import { menuAreaAdministrator } from "../../../../const/const";
import { AppRoute } from "../../../../const/route";
import { useAppDispatch } from "../../../../services/type-service";
import css from "./styles.module.scss";
import { adminSlice } from "../../../../store/slices/admin";
import sprite from "../../../../assets/sprite.svg";
import { memo } from "react";
import { logout } from "../../../../store/thunk/auth";
import { useNavigate } from "react-router-dom";
import LogotypeSettings from "../Layout/components/LogotypeSettings";


function TabsAdminMemo() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const LINK_CLASS = `${css.menuItem}`;
  const ACTIVE_CLASS = `${LINK_CLASS} ${css.active}`;

  //выход из аккаунта
  const handleClick = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        navigate(AppRoute.Root);
      });
  };
  //возврат домой
  const returnHome = () => {
    navigate(AppRoute.Root);
  };

  return (
    <>
      <div className={css.content}>
        <div className={css.logoContainer}>
          <LogotypeSettings />
        </div>
        <ul className={css.menu}>
          {menuAreaAdministrator.map((button) => {
            return (
              <li key={button.id}>
                <NavLink
                  to={`${AppRoute.AdministratorArea}/${button.path}`}
                  key={button.id}
                  className={({ isActive }) =>
                    isActive ? ACTIVE_CLASS : LINK_CLASS
                  }
                  onClick={() =>
                    dispatch(
                      adminSlice.actions.changeActiveButtonMenu(button.path)
                    )
                  }
                >
                  {button.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={css.controls}>
        <div className={`${css.logout} ${LINK_CLASS}`} onClick={returnHome}>
          <svg width="25" height="25" viewBox="0 0 25 25">
            <use xlinkHref={`${sprite}#return`}></use>
          </svg>
          <p>На главную</p>
        </div>
        <div className={`${css.logout} ${LINK_CLASS}`} onClick={handleClick}>
          <svg width="25" height="25" viewBox="0 0 25 25">
            <use xlinkHref={`${sprite}#logout`}></use>
          </svg>
          <p>Выход</p>
        </div>
      </div>
    </>
  );
}

const TabsAdmin = memo(TabsAdminMemo);
export default TabsAdmin;
