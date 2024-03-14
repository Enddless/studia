import sprite from "../../assets/sprite.svg";
import css from "./styles.module.scss";
import classNames from "classnames";

type TControlsProps = {
  id: string;
  onClick?: () => void;
  isActive?: boolean;
};
function ControlButton({ id, onClick, isActive }: TControlsProps) {
  const classNamesList = classNames(css.control, {
    [css.activeControlButton]: isActive,
  });
  const switchData = function (id: string) {
    switch (id) {
      case "edit":
        return "pencilControls";
      case "delete":
        return "deleteControls";
      case "close":
        return "closeControls";
      case "view":
        return "viewControls";
      default:
        return "";
    }
  };
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      className={classNamesList}
      onClick={onClick}
    >
      <use xlinkHref={`${sprite}#${switchData(id)}`}></use>
    </svg>
  );
}

export default ControlButton;
