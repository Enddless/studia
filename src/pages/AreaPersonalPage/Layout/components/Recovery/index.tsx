import css from "./styles.module.scss";
import EmptyTemplate from "../EmptyTemplate";
import Button from "../../../../../components/Button/Button";

import SelectFilter from "../../../../../components/Select";
import { halls, lessons, times } from "../../../../../mocks/mocks";

const titles = ["Дата", "Время", "Занятие"];

interface ILessonsData {
  id: number;
  startDate: string;
  time: string;
  lesson: string;
}

const lessonsData: ILessonsData[] = [
  {
    id: 1,
    startDate: "02.10.23",
    time: "09:00",
    lesson: "Занятие 1",
  },
  {
    id: 2,
    startDate: "02.10.23",
    time: "12:00",
    lesson: "Занятие 2",
  },
  {
    id: 3,
    startDate: "02.10.23",
    time: "18:00",
    lesson: "Занятие 3",
  },
];

const OnlineRecovery = () => {
  const filtersTitle = ["Выбор занятия", "Выбор времени"];
  const record = true;
  return (
    <div className={css.wrapper}>
      {record ? (
        <>
          <div className={css.filters}>
            {filtersTitle.map((title) => {
              let data: string[] = [];
              if (title === "Выбор зала") {
                data = halls;
              }
              if (title === "Выбор занятия") {
                data = lessons;
              }
              if (title === "Выбор времени") {
                data = times;
              }
              return <SelectFilter key={title} title={title} data={data} />;
            })}
          </div>

          <Button text="Записаться" cls="btn-rec" />
          <div className={css.content}>
            <h5 className={css.title}>Текущие записи</h5>
            <table className={css.lessonsTable}>
              <thead>
                <tr className={css.lessonsTitle}>
                  {titles.map((item) => (
                    <th key={item}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {lessonsData.map(({ id, startDate, time, lesson }) => {
                  return (
                    <tr className={css.tableRow} key={id}>
                      <td>{startDate}</td>
                      <td>{time}</td>
                      <td>{lesson}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <EmptyTemplate>
          <p>
            Для того чтобы записаться на занятие Вам необходимо приобрести
            абонемент.
          </p>
        </EmptyTemplate>
      )}
    </div>
  );
};

export default OnlineRecovery;
