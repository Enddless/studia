import css from "./App.module.scss";
import MainPage from "../../pages/MainPage/MainPage";
import { Routes, Route, useLocation } from "react-router-dom";
import NFPage from "../../pages/NotFoundPage/NFPage";
import ReviewsPage from "../../pages/ReviewsPage/ReviewsPage";
import DashboardPage from "../../pages/DashboardPage/DashboardPage";
import { AppRoute } from "../../const/route";
import AreaPersonalPage from "../../pages/AreaPersonalPage";
import AreaAdminPage from "../../pages/AreaAdminPage";
import { RedirectPersonalArea } from "../redirect-personal-area";
import { AUTH_TOKEN_NAME, menuAreaAdministrator, menuAreaPersonal } from "../../const/const";
import { Modal } from "../modal-form/Modal";
import LoginForm from "../Forms/LoginForm";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import { useAppDispatch } from "../../services/type-service";
import { authSlice } from "../../store/slices/auth";

const App = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const previousLocation = location.state?.previousLocation;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Симулируем загрузку данных
    setTimeout(() => {
      setLoading(false);
    }, 50);
  }, []);
  const token = localStorage.getItem(`${AUTH_TOKEN_NAME}`);
  // const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    if (!token) {
      dispatch(authSlice.actions.refreshUser())
    }
  }, [token])
  

  return (
    <>
      {loading ? (
        <div className={css.spinnerContainer}>
          <Spinner />
        </div>
      ) : (
        <div className={css.app}>
          <Routes location={previousLocation || location}>
            <Route path={AppRoute.Root} element={<MainPage />} />
            <Route path={AppRoute.Dashboard} element={<DashboardPage />} />
            <Route path={AppRoute.Reviews} element={<ReviewsPage />} />

            <Route
              path={`${AppRoute.Modal}${AppRoute.Login}`}
              element={<LoginForm />}
            />

            <Route path={AppRoute.NotFound} element={<NFPage />} />

            <Route
              path={AppRoute.PersonalArea}
              element={
                <RedirectPersonalArea>
                  <AreaPersonalPage />
                </RedirectPersonalArea>
              }
            >
              {menuAreaPersonal.map((name) => (
                <Route
                  key={name.title}
                  path={name.path}
                  element={<AreaPersonalPage />}
                ></Route>
              ))}
            </Route>
            <Route
              path={AppRoute.AdministratorArea}
              element={
                <RedirectPersonalArea>
                  <AreaAdminPage />
                </RedirectPersonalArea>
              }
            >
              {menuAreaAdministrator.map((name) => (
                <Route
                  key={name.title}
                  path={name.path}
                  element={<AreaAdminPage />}
                ></Route>
              ))}
            </Route>
          </Routes>
          {previousLocation && (
            <Routes>
              <Route path={`${AppRoute.Modal}/:id`} element={<Modal />}>
                <Route path={` ${AppRoute.Login}`} element={<LoginForm />} />
              </Route>
            </Routes>
          )}
        </div>
      )}
    </>
  );
};

export default App;
