import css from "./Contacts.module.scss";
import sprite from "../../../../assets/sprite.svg";
import TitleSection from "../../../../components/Title/Title";
import MapBlock from "../../../../components/Map/Map";
import SocialLinks from "../../../../components/SocialLinks/SocialLinks";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../services/type-service";
import { useEffect, useState } from "react";
import src from "../../../../assets/images/NF.png";
import { Link } from "react-router-dom";
import { AppRoute } from "../../../../const/route";
import { mainPageData } from "../../../../store/thunk/mainPage";
import Spinner from "../../../../components/Spinner";
import { LoadingStatus } from "../../../../const/const";

const Contacts = () => {
  const cityData = useAppSelector((state) => state.main.mainPage?.City);
  const pointsData = useAppSelector((state) => state.main.mainPage?.Points);
  const [CITY, setCity] = useState(cityData);
  const [POINTS, setPoints] = useState(pointsData);

  useEffect(() => {
    if (cityData && pointsData) {
      setCity(cityData);
      setPoints(pointsData);
    }
  }, [cityData, pointsData]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(mainPageData());
  }, [dispatch]);

  const statusPoints = useAppSelector((state) => state.main.isPointsLoading);
  const statusCity = useAppSelector((state) => state.main.isCityLoading);
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    if (
      statusCity === LoadingStatus.Pending ||
      statusPoints === LoadingStatus.Pending
    ) {
      setIsLoad(false);
    } else {
      setIsLoad(true);
    }
  }, [statusPoints, statusCity]);

  return (
    <section className={css.contacts} id="contactsBlock">
      <TitleSection title="Контакты" />
      {!isLoad ? (
        <div className={css.spinnerContainer}>
          <Spinner />
        </div>
      ) : (
        <>
          {CITY?.lat && CITY?.lng && POINTS?.lat && POINTS?.lng ? (
            <MapBlock key={CITY.lat} CITY={CITY} POINTS={POINTS} />
          ) : (
            <div className={css.noMap}>
              <p className={css.atention}>
                Здесь должна быть <span>реклама</span> карта. Но ее нет. Задать
                координаты можно в личном кабинете
                <Link to={`${AppRoute.AdministratorArea}/contacts`}>
                  {" "}
                  администратора
                </Link>
              </p>
              <img src={src} alt="oops, no map here yet" />
            </div>
          )}
          <div className={css.info}>
            <div className={css.location}>
              <div>
                <svg width="25" height="25" viewBox="0 0 25 25">
                  <use xlinkHref={`${sprite}#location`}></use>
                </svg>
              </div>
              <p>{cityData?.title}</p>
            </div>

            <div className={css.phone}>
              <svg width="25" height="25" viewBox="0 0 25 25">
                <use xlinkHref={`${sprite}#phone`}></use>
              </svg>
              <p>
                <a href="tel:+74957887750">+7 (495) 788-77-50</a>
              </p>
            </div>

            <div className={css.socialBlock}>
              <p>Мы в социальных сетях:</p>
              <SocialLinks />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Contacts;
