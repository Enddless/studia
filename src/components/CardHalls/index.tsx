import classNames from "classnames";
import { API_URL } from "../../services/api";
import { HallData } from "../../types/auth-type";
import css from "./style.module.scss";


interface ICardProps {
  hall: HallData;
  isMainPage?: boolean;
}

const CardHalls = ({ hall, isMainPage }: ICardProps) => {
  const classNameList = classNames(css.container, {
    [css.redisignBlock] : isMainPage,
   })

  return (
    <div key={hall.IdHall} className={classNameList}>
      <div className={css.photoContainer}>
        <img src={`${API_URL}${hall.PhotoHall}`} alt="Galerry" className={css.photo} />
        <h3 className={css.caption}>{hall.Title}</h3>
      </div>
      <p>{hall.Description}</p>
    </div>
  );
};

export default CardHalls;
