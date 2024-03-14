import { useNavigate } from "react-router-dom";
import LoginForm from "../Forms/LoginForm";
import css from "./styles.module.scss";
import RegistrationForm from "../Forms/RegistrationForm";
import { useAppDispatch, useAppSelector } from "../../services/type-service";
import RecoveryForm from "../Forms/RecoveryForm";
import { authSlice } from "../../store/slices/auth";
import ControlButton from "../controls-button";

type TModalMiniProps = {
  children?: React.ReactNode;
};
export function Modal({ children }: TModalMiniProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const idData = useAppSelector((state) => state.auth.formAuthActiveId);

  return (
    <div className={css.modalWrapper}>
      <div className={css.noModalWrapper}>
        <div className={css.modal}>
          <div className={css.closeContainer}>
            <ControlButton
              id="close"
              onClick={() => {
                navigate("/");
                dispatch(authSlice.actions.changeFormActive("login"));
              }}
            />
          </div>
          <div className={css.modalForm}>
            {children ? (
              children
            ) : (
              <>
                {idData === "login" && <LoginForm />}
                {idData === "registration" && <RegistrationForm />}
                {idData === "recovery" && <RecoveryForm />}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
