import { useState } from "react";
import CardReview from "../../../../../../components/CardReview";
import { reviewsInfo } from "../../../../../../mocks/mocks";
import css from "./styles.module.scss";

const ReviewSettings = () => {
  const [activeBtn, setActiveBtn] = useState("all");

  return (
    <div className={css.container}>
      <div className={css.inputGroup}>
        <input
          type="radio"
          name="radio"
          id="all"
          className={css.checkbox}
          checked={activeBtn === "all"}
          onChange={() => setActiveBtn("all")}
        />
        <label htmlFor="all" className={`${css.radioLabel} ${activeBtn === "all" ? css.active : ""}`}>
          Все отзывы
        </label>

        <input
          type="radio"
          name="radio"
          id="new"
          className={css.checkbox}
          checked={activeBtn === "new"}
          onChange={() => setActiveBtn("new")}
        />
        <label htmlFor="new" className={`${css.radioLabel} ${activeBtn === "new" ? css.active : ""}`}>
          Новые
        </label>
      </div>
      {reviewsInfo.map((review) => {
        return <CardReview review={review} key={review.id} id="adminSettings"/>;
      })}
    </div>
  );
};

export default ReviewSettings;
