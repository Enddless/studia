import { useEffect } from "react";
import Layout from "./components/Layout";
import css from "./styles.module.scss";
import { DEFAULT_BUTTON_AREA_ADMIN } from "../../const/const";
import { useAppDispatch, useAppSelector } from "../../services/type-service";
import { useLocation, useNavigate } from "react-router-dom";
import TabsAdmin from "./components/Tabs";
import { adminSlice } from "../../store/slices/admin";
import { getCurrentUserRole } from "../../store/thunk/auth";
import { aboutStudio } from "../../store/thunk/studio";

const AreaAdminPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentMenuButton = useAppSelector((state) => state.admin.buttonActive);
  const location = useLocation().pathname.slice(1).split("/")[1];

  // если поменялась кнопка,вызвать диспатч
  useEffect(() => {
    dispatch(adminSlice.actions.changeActiveButtonMenu(location));
  }, [location, dispatch]);

  // если определить адрес не удалось, направить на меню по дефолту
  useEffect(() => {
    if (!location) {
      navigate(`${DEFAULT_BUTTON_AREA_ADMIN.path}`);
    }
  }, [navigate, location]);

  useEffect(() => {
    dispatch(getCurrentUserRole());
    dispatch(aboutStudio());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <aside className={css.sidebar}>
        <TabsAdmin />
      </aside>

      {currentMenuButton && <Layout isActiveButton={currentMenuButton} />}
    </div>
  );
};

export default AreaAdminPage;
