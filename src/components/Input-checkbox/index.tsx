import css from "./styles.module.scss";
import sprite from "../../assets/sprite.svg";
import classNames from "classnames";

type IInputCheckboxProps = {
  onChange: () => void;
  agreement?: boolean | string;
};
const InputCheckbox = ({ onChange, agreement }: IInputCheckboxProps) => {
  const check =  agreement || agreement !== "" && "error";
  const classNameList = classNames(css.fake, {
    [css.errorInput] : check =="error",
  })

  return (
    <>
      <input
        type="checkbox"
        id="agreement"
        name="agreement"
        className={css.checkboxAgreement}
        onChange={onChange}
      />
      <span className={classNameList}>
        <svg width="20" height="20" viewBox="0 0 20 20">
          <use xlinkHref={`${sprite}#checkmark`}></use>
        </svg>
      </span>
    </>
  );
};

export default InputCheckbox;
