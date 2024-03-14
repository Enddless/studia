import css from "./style.module.scss";
import sprite from "../../assets/sprite.svg";
// import { IPricesInfo } from "../../interfaces/interfaces";
import classNames from "classnames";
import { PriceData } from "../../types/auth-type";

interface ICardProps {
  price: PriceData;
  cls?: string;
  isMainPage?: boolean;
}

const CardPrice = ({ price, cls, isMainPage }: ICardProps) => {
  const isNoneShadow = cls === "noneShadow";
  const classNameList = classNames(css.card, {
    [css.noneShadow]: isNoneShadow,
    [css.redisignBlock]: isMainPage,
  });
  const contentGroup = classNames({
    [css.redisignCheckboxGroup]: isMainPage,
  });

  return (
    <div className={classNameList}>
      {price && (
        <>
          <h4 className={css.subtitle}>{price.title}</h4>
          <div className={contentGroup}>
            <div className={css.checkboxGroup}>
              {price.descriptionOne !== "" && (
                <div className={css.checkbox}>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <use xlinkHref={`${sprite}#checkForPrice`}></use>
                    </svg>
                  </div>
                  <p className={css.textCheck}>{price.descriptionOne}</p>
                </div>
              )}
              {price.descriptionTwo !== "" && (
                <div className={css.checkbox}>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <use xlinkHref={`${sprite}#checkForPrice`}></use>
                    </svg>
                  </div>
                  <p className={css.textCheck}>{price.descriptionTwo}</p>
                </div>
              )}
              {price.descriptionThree !== "" && (
                <div className={css.checkbox}>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <use xlinkHref={`${sprite}#checkForPrice`}></use>
                    </svg>
                  </div>
                  <p className={css.textCheck}>{price.descriptionThree}</p>
                </div>
              )}
            </div>

            <h4 className={css.subtitle}>{price.price} P</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default CardPrice;
