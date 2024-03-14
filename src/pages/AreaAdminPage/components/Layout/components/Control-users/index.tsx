import Button from "../../../../../../components/Button/Button";
import css from "./styles.module.scss";
import sprite from "../../../../../../assets/sprite.svg";

const ControlUsers = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.toolbar}>
        <div className={css.buttonContainer}>
          <Button text="Пользователи" cls="btn-save" />
          <Button text="Запись" cls="btn-save" />
        </div>
        <form className={css.searchForm}>
          <input type="search" id="search" name="search" placeholder="Найти" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={css.iconSearch}
          >
            <use xlinkHref={`${sprite}#search`}></use>
          </svg>
        </form>
      </div>
      <div className={css.content}>
        <table className={css.table}>
          <thead>
            <tr>
              <th>Фамилия Имя</th>
              <th>Дата регистрации</th>
              <th>Состояние</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Иванов Иван</td>
              <td>21.08.2023</td>
              <td>Активен</td>
            </tr>
            <tr>
              <td>Васильева Мария</td>
              <td>15.08.2023</td>
              <td>Активен</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>

        <div className={css.controlsButton}>
          <Button text="Добавить" cls="btn-save" />
          <Button text="Редактировать" cls="btn-reg" />
          <Button text="Удалить" cls="btn-more" />
        </div>
      </div>
    </div>
  );
};

export default ControlUsers;
