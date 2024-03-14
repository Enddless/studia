import css from "./styles.module.scss";
import sprite from "../../assets/sprite.svg";
import classNames from "classnames";
import { useState } from "react";

interface ISelectProps {
  title: string;
  data: string[];
  isRecordSelect?: boolean;
}

const SelectFilter = ({ title, data, isRecordSelect }: ISelectProps) => {
  const [option, setoption] = useState(false);
  const [optionValue, setoptionValue] = useState(title);

  const classNamesList = classNames(css.selectContainer, {
    [css.isRecordSelect]: isRecordSelect,
  });

  return (
    <div className={classNamesList}>
      <div onClick={() => setoption(!option)} className={css.title}>
        <input
          type="text"
          value={optionValue}
          className="cursor"
          required
          readOnly
        ></input>

        <label>
          <svg width="13" height="8" viewBox="0 0 13 8">
            {option ? (
              <use xlinkHref={`${sprite}#topArrow`}></use>
            ) : (
              <use xlinkHref={`${sprite}#bottomArrow`}></use>
            )}
          </svg>
        </label>
      </div>
      {option && (
        <div className={css.optionBlock}>
          {data.map((item, index) => {
            return (
              <p
                key={index}
                className={css.dataItem}
                onClick={() => {
                  setoptionValue(item);
                  setoption(!option);
                }}
              >
                {item}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectFilter;
