import css from "./Logo.module.scss";
import { AppRoute } from "../../const/route";
import { Link } from "react-router-dom";
import { API_URL } from "../../services/api";
import { useAppSelector } from "../../services/type-service";
import { useEffect, useState } from "react";

const Logo = () => {
  const logotypeData = useAppSelector(
    (state) => state.main.mainPage?.Atelie.photoLogo
  );
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    if (logotypeData && logotypeData !== "") {
      setLogoUrl(`${API_URL}${logotypeData}?v=${Math.random()}`);
    }
  }, [logotypeData]);

  return (
    <div className={css.logo} key={logoUrl}>
      <Link to={AppRoute.Root}>
        {logoUrl && <img src={logoUrl} alt="Logotype" />}
      </Link>
    </div>
  );
};

export default Logo;
