import { useEffect } from "react";
import Layout from "./Layout";
import css from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "../../services/type-service";
import { DEFAULT_BUTTON_AREA_PERSONAL } from "../../const/const";

import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TabsPersonal from "./Tabs";
import { authSlice } from "../../store/slices/auth";
// import { getCurrentUserRole } from "../../store/thunk/auth";
// import { mainPageData } from "../../store/thunk/mainPage";

const AreaPersonalPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation().pathname.slice(1).split("/")[1];
  const currentButton = useAppSelector((state) => state.auth.buttonActive);


  useEffect(() => {
    dispatch(authSlice.actions.changeActiveButtonMenuPersonal(location));
  }, [location, dispatch]);

  // если определить адрес не удалось, направить на меню по дефолту
  useEffect(() => {
    if (!location) {
      navigate(`${DEFAULT_BUTTON_AREA_PERSONAL.path}`);
    }
  }, [navigate, location]);

  // useEffect(() => {
  //   dispatch(getCurrentUserRole());
  //   dispatch(mainPageData());
  // }, [dispatch]);

  // показывать лоадер пока грузятся данные из perssit
  // const isRehydrated = useAppSelector((state) => state._persist.rehydrated);

  return (
    <>
      <Header />
      <div className={css.container}>
        <TabsPersonal />
        {currentButton && <Layout currentButton={currentButton} />}
      </div>
      <Footer />
    </>
  );
};

export default AreaPersonalPage;
