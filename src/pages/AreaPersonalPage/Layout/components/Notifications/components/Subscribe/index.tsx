import css from "../../styles.module.scss";

const Subscribe = () => {
  return (
    <div className={css.subscribe}>
      <p>Получение уведомлений на почту</p>
      <div className={css.inputGroup}>
        <input
          type="radio"
          name="radio"
          id="onRadio"
          className={css.checkbox}
          defaultChecked
        />
        <label htmlFor="onRadio" className={css.radioLabel}>Включить</label>

        <input
          type="radio"
          name="radio"
          id="offRadio"
          className={css.checkbox}
        />
        <label htmlFor="offRadio" className={css.radioLabel}>Выключить</label>
      </div>
    </div>
  );
};

export default Subscribe;
