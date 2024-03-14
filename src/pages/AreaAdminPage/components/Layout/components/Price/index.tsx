import { useEffect, useState } from "react";
import Button from "../../../../../../components/Button/Button";
import CardPrice from "../../../../../../components/CardPrice";
import ControlButton from "../../../../../../components/controls-button";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../services/type-service";
import css from "./styles.module.scss";
import { deletePrice, getPrice } from "../../../../../../store/thunk/studio";
import AddPriceForm from "./component/addPriceForm";
import { Modal } from "../../../../../../components/modal-form/Modal";
// import EditPriceForm from "./component/editPriceForm";

const PriceSettings = () => {
  const dispatch = useAppDispatch();
  const priceData = useAppSelector((state) => state.studio.priceData);
  // Получение данных об абонементах из сервера
  useEffect(() => {
    dispatch(getPrice());
  }, [dispatch]);

  const [addPriceForm, setAddPriceForm] = useState(false);
  //удаление преподавателя
  const deleteCurrentPrice = (idPrice: number) => {
    dispatch(deletePrice({ idPrice }))
      .unwrap()
      .then(() => dispatch(getPrice()));
  };

  //редактирование конкретной карточки
  // const [editPriceForm, setEditPriceForm] = useState(false);
  // const [currentEditPrice, setCurrentEditPrice] = useState(0);
  // const handleEditCard = (id: number) => {
  //   setEditPriceForm(!editPriceForm);
  //   setCurrentEditPrice(id);
  // };
  return (
    <>
      <div className={css.container}>
        {priceData ? (
          priceData.map((item) => {
            return (
              <div className={css.card} key={item.title}>
                <div className={css.controlGroup}>
                  {/* <ControlButton id="edit" onClick={() => handleEditCard(item.idPrice)} /> */}
                  <ControlButton
                    id="delete"
                    onClick={() =>
                      deleteCurrentPrice(item.idPrice)
                    }
                  />
                </div>
                <CardPrice price={item} cls="noneShadow" />
              </div>
            );
          })
        ) : (
          <p className={css.text}>
            У вас еще нет абонементов. Вы можете добавить их нажав кнопку
            "Добавить"
          </p>
        )}
      </div>

      <div className={css.add}>
        <Button
          text="Добавить"
          cls="add"
          openModalForm={() => setAddPriceForm(!addPriceForm)}
        />
      </div>
      {addPriceForm && (
        <Modal><AddPriceForm onClick={() => setAddPriceForm(!addPriceForm)} /></Modal>
      )}
      {/* {editPriceForm && (
        <EditPriceForm
          onClick={() => setEditPriceForm(!editPriceForm)}
          id={currentEditPrice}
        />
      )} */}
    </>
  );
};

export default PriceSettings;
