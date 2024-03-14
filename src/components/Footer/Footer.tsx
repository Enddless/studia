import css from "./Footer.module.scss";
import Logo from "../Logo/Logo";
import sprite from "../../assets/sprite.svg";
import SocialLinks from "../SocialLinks/SocialLinks";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const/route";
import { pagesFooter } from "../../const/const";
import { useAppSelector } from "../../services/type-service";

const Footer = () => {
  const cityData = useAppSelector((state) => state.main.mainPage?.City);
  const scrollHandler = () => {
    window.scrollTo(0,0);
  }
  return (
    <div className={css.footer}>
      <div className={css.logo} onClick={scrollHandler}>
        <Logo />
      </div>

      <ul className={css.footerNav}>
        <li className={css.menuItem}>
          <Link to="/">Скачать приложение</Link>
        </li>
        <li>
          <ul className={css.centerMenu}>
            {pagesFooter.map((page) => {
              const check =
                page.title === "Услуги и цены" || page.title === "Контакты";
              return (
                <li key={page.id} className={css.menuItem}>
                  {check ? (
                    <HashLink smooth to={page.url}>
                      {page.title}
                    </HashLink>
                  ) : (
                    <Link to={page.url}>{page.title}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </li>
        <li className={css.menuItem}>
          <span>
            <a
              href={`${AppRoute.Root}./src/assets/Политика.pdf`}
              target="_blank"
            >
              Юридическая информация
            </a>
          </span>
        </li>
      </ul>

      <div className={css.contacts}>
        <div className={css.location}>
          <div style={{ width: "24" }}>
            <svg width="25" height="25" viewBox="0 0 25 25">
              <use xlinkHref={`${sprite}#location`}></use>
            </svg>
          </div>
          <p>
          {cityData?.title} <br />c 09:00 до
            21:00
          </p>
        </div>

        <div className={css.phone}>
          <svg width="25" height="25" viewBox="0 0 25 25">
            <use xlinkHref={`${sprite}#phone`}></use>
          </svg>
          <p>
            <a href="tel:+74957887750">+7 (495) 788-77-50</a>
          </p>
        </div>

        <div className={css.socialBlock}>
          <p>Мы в социальных сетях:</p>
          <SocialLinks />
        </div>
      </div>

      <div className={css.organization}>
        <Link to="https://pnpl.site/">Проект разработан в рамках Pineapple Practice</Link>
      </div>
    </div>
  );
};

export default Footer;
