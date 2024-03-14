import { HashLink } from "react-router-hash-link";
import css from "./styles.module.scss";
import { Link } from "react-router-dom";
import ControlButton from "../controls-button";
import { pagesHeader } from "../../const/const";

type TburgerProps = {
  onClick?: () => void;
};

const Burger = ({ onClick }: TburgerProps) => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <div className={css.decoration}></div>

        <div className={css.controlGroup}>
          <ControlButton id="close" onClick={onClick} />
        </div>

        <ul className={css.burger}>
          {pagesHeader.map((page) => {
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
      </div>
    </div>
  );
};

export default Burger;
