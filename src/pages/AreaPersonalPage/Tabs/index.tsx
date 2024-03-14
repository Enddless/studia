import { NavLink } from "react-router-dom";
import css from "./styles.module.scss";
import { memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../services/type-service";
import { menuAreaPersonal } from "../../../const/const";
import { AppRoute } from "../../../const/route";
import { getTickets } from "../../../store/thunk/tickets";
import { authSlice } from "../../../store/slices/auth";
import Button from "../../../components/Button/Button";

function TabsPersonalMemo() {
  const dispatch = useAppDispatch();
  const buttonActiveData = useAppSelector((state) => state.auth.buttonActive);

  const handleClick = (path: string) => {
    dispatch(authSlice.actions.changeActiveButtonMenuPersonal(path));
    // в зависимости от нажатой кнопки формировать dispatch
    switch (path) {
      case "tickets":
        dispatch(getTickets());
        break;

      default:
        break;
    }
  };
 
  return (
    <>
      <ul className={css.btnGroup}>
        {menuAreaPersonal.map((button) => {
          const isActive = button.path === buttonActiveData;
          return (
            <li key={button.id}>
              <NavLink
                to={`${AppRoute.PersonalArea}/${button.path}`}
                key={button.id}
                // className={({ isActive }) =>
                //   isActive ? ACTIVE_CLASS : LINK_CLASS
                // }
                onClick={() => handleClick(button.path)}
              >
                <Button
                  text={button.title}
                  cls="menuAreaUser"
                  activeMenuUser={isActive}
                />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

const TabsPersonal = memo(TabsPersonalMemo);
export default TabsPersonal;
