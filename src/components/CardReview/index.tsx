import css from "./style.module.scss";
import sprite from "../../assets/sprite.svg";
import { IReviewsInfo } from "../../interfaces/interfaces";
import ControlButton from "../controls-button";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface ICardProps {
  review: IReviewsInfo;
  id?: string;
  lastChild?: boolean;
}

const CardReview = ({ review, id, lastChild }: ICardProps) => {
  const isAdminSettings = id === "adminSettings";

  const classNamesList = classNames(css.userInfo, {
    [css.starRedisign]: isAdminSettings,
  });
  const classContent = classNames(css.card, {
    [css.blurContent]: lastChild,
  });
  return (
    <>
      <div className={classContent}>
        {review && (
          <>
            {isAdminSettings && (
              <div className={css.control}>
                <ControlButton id="delete" />
              </div>
            )}
            <div className={classNamesList}>
              <h5 className={css.title}>{review.data.user}</h5>
              <div className={css.star}>
                {Array.from(
                  { length: review?.data.stars },
                  (_, index) => index
                ).map((star) => {
                  return (
                    <div key={star}>
                      <svg width="20" height="20" viewBox="0 0 20 20">
                        <use xlinkHref={`${sprite}#star`}></use>
                      </svg>
                    </div>
                  );
                })}
                <p>4.8</p>
              </div>
            </div>

            <p className={css.date}>{review.data.date}</p>
            <p className={css.description}>{review.data.description}</p>
          </>
        )}
      </div>
      {lastChild && (
        <Link to="/reviews">
          <div className={css.more}>
            <h6>Смотреть все отзывы</h6>
          </div>
        </Link>
      )}
    </>
  );
};

export default CardReview;
