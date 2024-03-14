import css from "./SocialLinks.module.scss";
import sprite from "../../assets/sprite.svg";

const SocialLinks = () => {
  return (
    <div className={css.social}>
      <a href="">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <use xlinkHref={`${sprite}#ok`}></use>
        </svg>
      </a>
      <a href="">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <use xlinkHref={`${sprite}#vk`}></use>
        </svg>
      </a>

      <a href="">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <use xlinkHref={`${sprite}#telegram`}></use>
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;
