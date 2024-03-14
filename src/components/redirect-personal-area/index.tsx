import { Navigate } from "react-router-dom";
import { AuthorizationStatus } from "../../const/const";
import { useAppSelector } from "../../services/type-service";
import { AppRoute } from "../../const/route";
import { getAuthStatus } from "../../store/selectors/selectors";

type RedirectProps = {
  children: JSX.Element;
};

function RedirectPersonalArea({ children }: RedirectProps) {
  const authStatus = useAppSelector(getAuthStatus);
  return authStatus === AuthorizationStatus.Unknown ||
    authStatus === AuthorizationStatus.NoAuth ? (
    <Navigate to={`${AppRoute.Root}`} />
  ) : (
    children
  );
}

export { RedirectPersonalArea };
