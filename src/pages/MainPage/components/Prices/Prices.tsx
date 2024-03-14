import css from "./Prices.module.scss";
import TitleSection from "../../../../components/Title/Title";
import CardPrice from "../../../../components/CardPrice";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { AppRoute } from "../../../../const/route";
import { useAppSelector } from "../../../../services/type-service";
import { LoadingStatus } from "../../../../const/const";
import Spinner from "../../../../components/Spinner";

const Prices = () => {
  const main = useAppSelector((state) => state.main.mainPage);
  const pricesData = main?.Price;

  const lengthMoreDefault = pricesData && pricesData?.length > 4;
  const classNameList = classNames(css.container, {
    [css.tile]: lengthMoreDefault,
  });

  const statusPrice = useAppSelector((state) => state.main.isPriceLoading);

  return (
    <section className={css.services} id="pricesBlock">
      <TitleSection title="Услуги и цены" />
      {statusPrice === LoadingStatus.Pending ? (
        <div className={css.spinnerContainer}>
          <Spinner />
        </div>
      ) : (
        <>
          <div className={classNameList}>
            {pricesData ? (
              <>
                {pricesData.map((price) => {
                  return (
                    <CardPrice
                      key={price.idPrice}
                      price={price}
                      isMainPage={lengthMoreDefault ? lengthMoreDefault : false}
                    />
                  );
                })}
              </>
            ) : (
              <p className={css.atention}>
                Здесь еще нет абонементов. Добавить их можно в личном кабинете
                <Link to={`${AppRoute.AdministratorArea}/price`}>
                  {" "}
                  администратора
                </Link>
              </p>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Prices;
