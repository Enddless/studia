import css from "./Reviews.module.scss";
import TitleSection from "../../../../components/Title/Title";
import { reviewsInfo } from "../../../../mocks/mocks";
import CardReview from "../../../../components/CardReview";

const MainReviews = () => {
  return (
    <section className={css.reviews} id="reviewsBlock">
      <TitleSection title="Отзывы" />
      <div className={css.container}>
        {reviewsInfo.slice(0, 4).map((review, index) => {
          return (
            <CardReview
              key={review.id}
              review={review}
              lastChild={index === 3}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MainReviews;
