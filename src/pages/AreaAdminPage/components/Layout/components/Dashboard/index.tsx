import Button from "../../../../../../components/Button/Button";
import BigCalendar from "../../../../../DashboardPage/components/Calendar";
import css from "./styles.module.scss";

const DashboardSettings = () => {
  return (
    <div className={css.container}>
      <div className={css.buttonGroup}>
        <Button text="Все" cls="dashboardMenuAdmin" />
        <Button text="Зал 1" cls="dashboardMenuAdmin" />
        <Button text="Зал 2" cls="dashboardMenuAdmin" />
        <Button text="Зал 3" cls="dashboardMenuAdmin" />
      </div>
      <BigCalendar />
    </div>
  );
};

export default DashboardSettings;
