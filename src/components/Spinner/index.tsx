import { useEffect, useState } from "react";
import css from "./styles.module.scss";

function Spinner() {
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 500); // Установите желаемую задержку в миллисекундах

    return () => clearTimeout(timer);
  }, []);

  return showLoader && (
    <div className={css.center}>
      <div className={css.ring}></div>
      <span>Loading...</span>
    </div>
  );
}

export default Spinner;
