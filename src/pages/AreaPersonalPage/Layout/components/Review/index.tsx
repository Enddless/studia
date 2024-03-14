import EmptyTemplate from "../EmptyTemplate";
import css from "./styles.module.scss";
import sprite from "../../../../../assets/sprite.svg";
import Button from "../../../../../components/Button/Button";

const WriteReview = () => {
  const totalVisit = 1;
  return (
    <div className={css.wrapper}>
      {totalVisit > 0 ? (
        <form className={css.form}>
          <label>Оставьте свой отзыв и оценку</label>
          <input type="text" placeholder="Имя" />
          <textarea placeholder="Отзыв" rows={5} />
          <label>Оценка</label>
          <div className={css.groupStar}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <use xlinkHref={`${sprite}#starTransparent`}></use>
            </svg>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <use xlinkHref={`${sprite}#starTransparent`}></use>
            </svg>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <use xlinkHref={`${sprite}#starTransparent`}></use>
            </svg>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <use xlinkHref={`${sprite}#starTransparent`}></use>
            </svg>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <use xlinkHref={`${sprite}#starTransparent`}></use>
            </svg>
          </div>
          <Button text="Отправить отзыв" cls="btn-save" />
        </form>
      ) : (
        <EmptyTemplate>
          <p>
            Для того чтобы оставить отзыв Вам необходимо посетить хотя бы одно
            занятие.
          </p>
        </EmptyTemplate>
      )}
    </div>
  );
};

export default WriteReview;
