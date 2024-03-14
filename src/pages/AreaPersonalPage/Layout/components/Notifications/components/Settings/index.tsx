import css from "../../styles.module.scss";

const SettingsNotifications = () => {
  return (
    <div className={css.settings}>
      <input
        type="checkbox"
        name="selectedAll"
        id="selectedAll"
        className={css.checkbox}
      />
      <div className={css.fake}></div>
      <label htmlFor="selectedAll">Выделить все</label>

      <input type="checkbox" name="read" id="read" />
      <label htmlFor="read">Пометить прочитанным</label>

      <input type="checkbox" name="delete" id="delete" />
      <label htmlFor="delete">Удалить</label>
    </div>
  );
};

export default SettingsNotifications;
