import { useEffect, useState } from "react";
import Button from "../../../../../../../../components/Button/Button";
import ControlButton from "../../../../../../../../components/controls-button";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../services/type-service";
import css from "./styles.module.scss";
import { addPrice, getPrice } from "../../../../../../../../store/thunk/studio";

type TEditFormProps = {
  onClick?: () => void;
  id: number;
};

const EditPriceForm = ({ onClick, id }: TEditFormProps) => {
  const dispatch = useAppDispatch();
  const priceData = useAppSelector((state) => state.studio.priceData);
  const currentPriceData = priceData?.filter((item) => item.idPrice === id)[0];

  //начальные данные
  const [titleTicket, setTitleTicket] = useState("");
  const [descriptionOne, setDescriptionOne] = useState("");
  const [descriptionTwo, setDescriptionTwo] = useState("");
  const [descriptionThree, setDescriptionThree] = useState("");
  const [priceTictket, setPriceTicket] = useState(0);

  useEffect(() => {
    if (currentPriceData) {
      setTitleTicket(currentPriceData.title);
      setDescriptionOne(currentPriceData.descriptionOne);
      setDescriptionTwo(currentPriceData.descriptionTwo);
      setDescriptionThree(currentPriceData.descriptionThree);
      setPriceTicket(currentPriceData.price);
    }
  }, [currentPriceData]);

  //отправка измененных данных о зале на сервер
  const sendTicketData = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const title = titleTicket;
    const price = priceTictket;
    dispatch(
      addPrice({
        title,
        descriptionOne,
        descriptionTwo,
        descriptionThree,
        price,
      })
    )
      .unwrap()
      .then(() => dispatch(getPrice()))
      .then(() => {
        if (onClick) onClick();
      });
  };
  //проверка все ли поля заполнены
  const [isValidForm, setIsValidForm] = useState(false);
  useEffect(() => {
    if (
      titleTicket &&
      priceTictket &&
      (descriptionOne || descriptionTwo || descriptionThree)
    ) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [
    titleTicket,
    descriptionOne,
    descriptionTwo,
    descriptionThree,
    priceTictket,
  ]);

  return (
    <div className={css.container}>
      <div className={css.control}>
        <ControlButton id="close" onClick={onClick} />
      </div>
      <form className={css.form}>
        <div className={css.content}>
          <>
            <textarea
              name="titleTicket"
              id="titleTicket"
              rows={1}
              placeholder="Добавить название абонемента"
              value={titleTicket}
              onChange={(e) => setTitleTicket(e.target.value)}
            />
            <textarea
              name="descriptionOne"
              id="descriptionOne"
              rows={2}
              placeholder="Добавить описание"
              value={descriptionOne}
              onChange={(e) => setDescriptionOne(e.target.value)}
            />
            <textarea
              name="descriptionTwo"
              id="descriptionTwo"
              rows={2}
              placeholder="Добавить описание"
              value={descriptionTwo}
              onChange={(e) => setDescriptionTwo(e.target.value)}
            />
            <textarea
              name="descriptionThree"
              id="descriptionThree"
              rows={2}
              placeholder="Добавить описание"
              value={descriptionThree}
              onChange={(e) => setDescriptionThree(e.target.value)}
            />
            <input
              name="price"
              id="price"
              placeholder="Добавить стоимость"
              value={priceTictket}
              onChange={(e) => setPriceTicket(Number(e.target.value))}
            />
            <div className={css.buttonGroup}>
              <Button
                text="Сохранить"
                disabled={!isValidForm}
                cls={!isValidForm ? "btn-dis" : "btn-save"}
                openModalForm={sendTicketData}
              />
              <Button text="Отменить" cls="btn-cancel" />
            </div>
          </>
        </div>
      </form>
    </div>
  );
};

export default EditPriceForm;
