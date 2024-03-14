// import Spinner from "../../../components/Spinner";
// import { useAppSelector } from "../../../../../services/type-service";
import classNames from "classnames";
import EmptyTemplate from "../EmptyTemplate";

import css from "./styles.module.scss";

const titles = [
  "Абонемент",
  "Дата покупки",
  "Дата начала",
  "Дата окончания",
  "Посетил занятий",
  "Состояние",
];

interface ITicketsData {
  id: number;
  dateOfPurchase: string;
  startDate: string;
  endDate: string;
  usedClasses: number;
  totalClasses: number;
  status: string;
}

const ticketsData: ITicketsData[] = [
  {
    id: 1,
    dateOfPurchase: "01.10.23",
    startDate: "02.10.23",
    endDate: "02.11.23",
    usedClasses: 5,
    totalClasses: 12,
    status: "Активный",
  },
  {
    id: 2,
    dateOfPurchase: "01.10.23",
    startDate: "02.10.23",
    endDate: "02.11.23",
    usedClasses: 5,
    totalClasses: 12,
    status: "Неактивный",
  },
  {
    id: 3,
    dateOfPurchase: "01.10.23",
    startDate: "02.10.23",
    endDate: "02.11.23",
    usedClasses: 5,
    totalClasses: 12,
    status: "Завершенный",
  },
];

const Tickets = () => {
  // const tickets = useAppSelector((state) => state.ticket.userTickets);
  const tickets = ticketsData;
  return (
    <div className={css.wrapper}>
      {tickets ? (
        <table className={css.ticketsTable}>
          <thead>
            <tr className={css.tableTitle}>
              {titles.map((item) => (
                <th key={item}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ticketsData.map(
              ({
                id,
                dateOfPurchase,
                startDate,
                endDate,
                usedClasses,
                totalClasses,
                status,
              }) => {
                const classNamesList = classNames(css.tableRow, {
                  [css.completed] : status === "Завершенный",
                  [css.nonActive] : status === "Неактивный",
                })

                return (
                  <tr className={classNamesList} key={id}>
                    <td>{id}</td>
                    <td>{dateOfPurchase}</td>
                    <td>{startDate}</td>
                    <td>{endDate}</td>
                    <td>
                      {usedClasses}/{totalClasses}
                    </td>
                    <td>{status}</td>
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
      ) : (
        <EmptyTemplate>
          <p>У Вас ещё нет абонементов. </p>
          <p>
            Для приобритения обратитесь в студию по адресу: Южно-Сахалинск,
            Коммунистический проспект, 20, c 09:00 до 21:00 или запишитесь на
            пробное занятие по телефону: <a href="tel:+74957887750">+7 (495) 788-77-50</a>
          </p>
        </EmptyTemplate>
      )}
    </div>
  );
};

export default Tickets;
