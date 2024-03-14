import css from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps {
  text: string;
  cls?: string;
  children?: React.ReactNode;
  openModalForm?:
    | (() => void)
    | ((e: React.MouseEvent<HTMLButtonElement>) => void);
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  disabled?: boolean;
  activeMenuUser?: boolean;
  activeDashboardMenu?: boolean;
}

const Button = ({
  text,
  cls,
  children,
  openModalForm,
  onMouseEnter,
  onMouseLeave,
  disabled,
  activeMenuUser,
  activeDashboardMenu,
}: ButtonProps) => {
  const enterButton = cls === "btn-enter";
  const more = cls === "btn-more";
  const regButton = cls === "btn-reg";
  const disabledButton = cls === "btn-dis" || disabled;
  // user
  const menuAreaUser = cls === "menuAreaUser";
  const activeMenu = activeMenuUser;
  const saveButton = cls === "btn-save";
  const deleteButton = cls === "btn-del";
  const recordButton = cls === "btn-rec"
  //admin
  const add = cls === "add";
  const dashboardMenuAdmin = cls === "dashboardMenuAdmin";
  const activeDashboardMenuAdmin = activeDashboardMenu;
  const cancelButton = cls === "btn-cancel"


  const classNamesList = classNames(css.btn, {
    [css.btnEnter]: enterButton,
    [css.btnMore]: more,
    [css.btnRegistration]: regButton,
    [css.btnDisabled]: disabledButton,
    [css.btnMenuUser]: menuAreaUser,
    [css.activeMenuUser]: activeMenu,
    [css.btnSave]: saveButton,
    [css.btnDelete]: deleteButton,
    [css.btnAdd]: add,
    [css.btnRecord] : recordButton,
    [css.btnDashboardAdmin] : dashboardMenuAdmin,
    [css.activeDashboardMenu] : activeDashboardMenuAdmin,
    [css.btnCancel] : cancelButton,
  });

  return (
    <button
      className={classNamesList}
      onClick={openModalForm}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
