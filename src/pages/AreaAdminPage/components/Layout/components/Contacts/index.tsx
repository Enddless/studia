import css from "./styles.module.scss";
import { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../services/type-service";
import {
  changeCoordsCity,
  changeCoordsPoints,
  getCoordsCity,
  getCoordsPoints,
} from "../../../../../../store/thunk/studio";
import Button from "../../../../../../components/Button/Button";

const ContactsSettings = () => {
  const dispatch = useAppDispatch();
  const cityData = useAppSelector((state) => state.studio.city);
  const pointsData = useAppSelector((state) => state.studio.points);
  const [success, setSuccess] = useState(false);

  const [tel, setTel] = useState("");
  const [city, setCity] = useState(
    cityData
      ? {
          title: cityData.title,
          lat: cityData.lat,
          lng: cityData.lng,
          zoom: cityData.zoom,
        }
      : { title: "", lat: "", lng: "", zoom: "" }
  );
  const [location, setLocation] = useState(
    pointsData
      ? {
          lat: pointsData.lat,
          lng: pointsData.lng,
        }
      : { lat: "", lng: "" }
  );

  useEffect(() => {
    dispatch(getCoordsCity());
    dispatch(getCoordsPoints());
  }, [dispatch]);

  useEffect(() => {
    if (cityData) {
      setCity({
        title: cityData.title,
        lat: cityData.lat,
        lng: cityData.lng,
        zoom: cityData.zoom,
      });
    }
    if (pointsData) {
      setLocation({
        lat: pointsData.lat,
        lng: pointsData.lng,
      });
    }
  }, [cityData, pointsData]);

  const handleChangeCity = (e: { target: { name: string; value: string } }) => {
    setCity({ ...city, [e.target.name]: e.target.value });
  };

  const handleChangeLocation = (e: {
    target: { name: string; value: string };
  }) => {
    setLocation({ ...location, [e.target.name]: e.target.value });
  };
  const sendData = () => {
    dispatch(
      changeCoordsCity({
        title: city.title,
        lat: Number(city.lat),
        lng: Number(city.lng),
        zoom: Number(city.zoom),
      })
    )
      .unwrap()
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      });
    dispatch(
      changeCoordsPoints({
        lat: Number(location.lat),
        lng: Number(location.lng),
      })
    )
      .unwrap()
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      });
  };

  return (
    <div className={css.container}>
      <fieldset>
        <legend>Контактные данные</legend>
        <input
          type="text"
          name="title"
          value={city.title}
          placeholder="Введите адрес"
          onChange={handleChangeCity}
        />
        <input
          type="tel"
          value={tel}
          placeholder="Введите телефон"
          onChange={(e) => setTel(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <legend>Координаты и масштаб города</legend>
        <input
          type="number"
          value={city.lat}
          name="lat"
          placeholder="Широта"
          pattern="[0-9]+(\.[0-9]+)?"
          onChange={handleChangeCity}
        />
        <input
          type="number"
          value={city.lng}
          name="lng"
          placeholder="Долгота"
          pattern="[0-9]+(\.[0-9]+)?"
          onChange={handleChangeCity}
        />
        <input
          type="number"
          value={city.zoom}
          name="zoom"
          placeholder="Масштаб от 1 до 20"
          max={20}
          onChange={handleChangeCity}
        />
      </fieldset>

      <fieldset>
        <legend>Координаты студии</legend>
        <input
          type="number"
          value={location.lat}
          name="lat"
          placeholder="Широта"
          pattern="[0-9]+(\.[0-9]+)?"
          onChange={handleChangeLocation}
        />
        <input
          type="number"
          value={location.lng}
          name="lng"
          placeholder="Долгота"
          pattern="[0-9]+(\.[0-9]+)?"
          onChange={handleChangeLocation}
        />
      </fieldset>
      <Button
        text={success ? "Это успех" : "Сохранить"}
        cls="btn-save"
        openModalForm={sendData}
      />
    </div>
  );
};

export default ContactsSettings;
