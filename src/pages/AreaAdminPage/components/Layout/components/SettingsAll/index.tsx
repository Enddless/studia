import css from "./styles.module.scss";

const SettingsAll = () => {
  return (
    <div className={css.content}>
      <h2>Темы</h2>
      <p>Текущая тема:</p>
      <div className={`${css.theme} ${css.seventhTheme} ${css.currentTheme}`}>
        <div className={css.tile}></div>
        <div className={css.tile}></div>
        <div className={css.tile}></div>
        <div className={css.tile}></div>
        <div className={css.tile}></div>
        <div className={css.tile}></div>
        <div className={css.tile}></div>
      </div>
      <p>Чтобы применить другую тему нажмите на нее</p>
      <div className={css.wrapper}>
        <div className={`${css.theme} ${css.secondaryTheme}`}>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
        </div>
        <div className={`${css.theme} ${css.thirdTheme}`}>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
        </div>
        <div className={`${css.theme} ${css.fourthTheme}`}>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
        </div>
        <div className={`${css.theme} ${css.fifthTheme}`}>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
        </div>
        <div className={`${css.theme} ${css.sixthTheme}`}>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
        </div>
        <div className={`${css.theme} ${css.seventhTheme}`}>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
        </div>
      </div>

      <h2>Разделы</h2>
      <div className={css.pages}>
        <div className={css.page}>
          <h3>Главная страница</h3>
          <p className={css.pageItem}>О студии</p>
          <p className={css.pageItem}>Персонал</p>
          <p className={css.pageItem}>Услуги и цены</p>
          <p className={css.pageItem}>Отзывы</p>
          <p className={css.pageItem}>Контакты</p>
        </div>
        <div className={css.page}>
          <h3>Расписание</h3>
        </div>
        <div className={css.page}>
          <h3>Отзывы</h3>
        </div>
      </div>
    </div>
  );
};

export default SettingsAll;
