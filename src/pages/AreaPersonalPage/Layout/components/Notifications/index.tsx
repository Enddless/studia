import NotificationGroup from "./components/NotificationGroup";
import SettingsNotifications from "./components/Settings";
import Subscribe from "./components/Subscribe";
import css from "./styles.module.scss";

const Notifications = () => {
  return (
    <div className={css.container}>
      <SettingsNotifications />
      <NotificationGroup />
      <Subscribe />
    </div>
  );
};

export default Notifications;
