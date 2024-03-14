import css from "./ReviewsPage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TitleSection from "../../components/Title/Title";
import { reviewsInfo } from "../../mocks/mocks";
import Button from "../../components/Button/Button";
import CardReview from "../../components/CardReview";
import { useState } from "react";

const ReviewsPage = () => {
  //**********ИЗМЕНЕНИЕ СОСТОЯНИЯ ОТОБРАЖЕНИЯ КОЛИЧЕСТВА ДОКУМЕНТОВ**********
  const [more, setMore] = useState(4);
  const clickMore = () => {
    setMore(more + 2);
  };
  const reviews = reviewsInfo.slice(0, more);
  return (
    <div className={css.wrapper}>
      <Header />
      <section className={css.content}>
        <TitleSection title="Отзывы" />
        <div className={css.container}>
          {reviews.map((review) => {
            return <CardReview review={review} key={review.id} />;
          })}
          <div className={css.buttonGroup}>
            <Button
              text={
                more === reviews.length ? "Показать еще" : "Отзывов больше нет"
              }
              cls="btn-more"
              openModalForm={clickMore}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReviewsPage;
