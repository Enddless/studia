import css from "./NFPage.module.scss";
import nf from "../../assets/images/NF.png";
import { AppRoute } from "../../const/route";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const NFPage = () => {
  return (
    <>
      <Header />
      <div className={css.wrapper}>
        <h1>Извините, страница не найдена</h1>
        <div className={css.content}>
          <p className={css.text}>Но есть другие</p>
          <Link to={AppRoute.Root} className={css.link}>
            <p>Главная страница</p>
          </Link>
          <img src={nf} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NFPage;
