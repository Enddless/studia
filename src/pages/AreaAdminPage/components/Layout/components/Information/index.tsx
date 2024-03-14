import Button from "../../../../../../components/Button/Button";
import ControlButton from "../../../../../../components/controls-button";
import { AppRoute } from "../../../../../../const/route";
import css from "./styles.module.scss";

const LegalInformation = () => {
  return (
    <>
      <h2>Юридическая информация</h2>
      <div className={css.container}>
        <div className={css.document}>
          <div className={css.file}>
            Условия использования и Политика конфиденциальности
          </div>
          <div className={css.controlGroup}>
            <a
              href={`${AppRoute.Root}./src/assets/Политика.pdf`}
              target="_blank"
            >
              <ControlButton id="view" />
            </a>
            <ControlButton id="delete" />
          </div>
        </div>
        <div className={css.document}>
          <div className={css.file}>
            Условия использования и Политика конфиденциальности Условия
            использования и Политика конфиденциальности
          </div>
          <div className={css.controlGroup}>
            <a
              href={`${AppRoute.Root}./src/assets/Политика.pdf`}
              target="_blank"
            >
              <ControlButton id="view" />
            </a>
            <ControlButton id="delete" />
          </div>
        </div>
      </div>
      <div className={css.buttonContainer}>
        <Button text="Добавить" cls="btn-save" />
      </div>
    </>
  );
};

export default LegalInformation;
