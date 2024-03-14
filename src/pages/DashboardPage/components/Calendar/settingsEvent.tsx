import { stringOrDate } from "react-big-calendar";
import { halls } from "../../../../const/const";
import moment from "moment";
import "moment/locale/ru";
import "moment-timezone";
import { momentLocalizer } from "react-big-calendar";

//локализация на Россию
moment.updateLocale("ru", {
  months: {
    format:
      "Января_Февраля_Марта_Апреля_Мая_Июня_Июля_Августа_Сентября_Октября_Ноября_Декабря".split(
        "_"
      ),
    standalone:
      "Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь".split(
        "_"
      ),
  },
  monthsShort: {
    format:
      "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split(
        "_"
      ),
    standalone:
      "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split(
        "_"
      ),
  },
  week: {
    dow: 1, // 1 - понедельник, 0 - воскресенье и так далее
  },
  weekdays: {
    standalone:
      "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split(
        "_"
      ),
    format:
      "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split(
        "_"
      ),
    isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/,
  },
  weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
  weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY г.",
    LLL: "D MMMM YYYY г., H:mm",
    LLLL: "dddd, D MMMM YYYY г., H:mm",
  },
});
moment.tz.setDefault("Europe/Moscow");
export const localizer = momentLocalizer(moment);

//"начало рабочего дня"
export const minTime = new Date();
minTime.setHours(6, 0, 0);

//доступные кнопки для отражения у пользователя
export const messagesData = {
  month: "Месяц",
  day: "День",
  week: "Неделя",
  previous: "<",
  next: ">",
  today: "Сегодня",
};

export type TEvent = {
  id?: number;
  title?: string;
  allDay?: boolean;
  start: stringOrDate;
  end: stringOrDate;
  halls?: string;
  desc?: string;
  isDraggable?: boolean;
  isResizable?: boolean;
};
export const currentTime = new Date();
export const newTime = new Date(currentTime.getTime() + 1 * 60 * 60 * 1000);
export const newDate = new Date(currentTime.getTime() + (1 * 24 + 4) * 60 * 60 * 1000);
export const dataEvents: TEvent[] = [
  {
    id: 0,
    title: "Занятие 1",
    start: moment(currentTime).toDate(),
    end: moment(new Date(currentTime.getTime() + 1 * 60 * 60 * 1000)).toDate(),
    halls: halls.First,
    desc: "meeting",
    isDraggable: true,
    isResizable: true,
  },
  {
    id: 1,
    title: "Занятие 2",
    start: moment(new Date(currentTime.getTime() - 6 * 60 * 60 * 1000)).toDate(),
    end: moment(new Date(currentTime.getTime() - 5 * 60 * 60 * 1000)).toDate(),
    halls: halls.Secondary,
    desc: "meeting",
    isDraggable: true,
    isResizable: true,
  },
  {
    id: 3,
    title: "Занятие 3",
    start: moment(new Date(currentTime.getTime() + (1 * 24 + 3) * 60 * 60 * 1000)).toDate(),
    end: moment(new Date(currentTime.getTime() + (1 * 24 + 4) * 60 * 60 * 1000)).toDate(),
    halls: halls.Third,
    desc: "meeting",
    isDraggable: true,
    isResizable: true,
  },
  {
    id: 4,
    title: "Занятие 4",
    start: moment(currentTime).toDate(),
    end: moment(new Date(currentTime.getTime() + 1 * 60 * 60 * 1000)).toDate(),
    halls: halls.First,
    desc: "meeting",
    isDraggable: true,
    isResizable: true,
  },
  {
    id: 5,
    title: "Аренда Балетного зала",
    start: moment(new Date(currentTime.getTime() - 4 * 60 * 60 * 1000)).toDate(),
    end: moment(new Date(currentTime.getTime() - 3 * 60 * 60 * 1000)).toDate(),
    halls: halls.Secondary,
    desc: "meeting",
    isDraggable: true,
    isResizable: true,
  },
  {
    id: 6,
    title: "Занятие 6",
    start: moment(new Date(currentTime.getTime() + 1 * 24 * 60 * 60 * 1000)).toDate(),
    end: moment(new Date(currentTime.getTime() + 4 * 24 * 60 * 60 * 1000)).toDate(),
    halls: halls.Third,
    desc: "meeting",
    isDraggable: true,
    isResizable: true,
  },
  {
    id: 7,
    title: "Занятие 7",
    start: moment(new Date(currentTime.getTime() + 0.5 * 60 * 60 * 1000)).toDate(),
    end: moment(new Date(currentTime.getTime() + 1 * 60 * 60 * 1000)).toDate(),
    halls: halls.First,
    desc: "meeting",
    isDraggable: true,
    isResizable: true,
  },
  {
    id: 8,
    title: "Занятие 8",
    start: moment(new Date(currentTime.getTime() + 3 * 60 * 60 * 1000)).toDate(),
    end: moment(new Date(currentTime.getTime() + 4 * 60 * 60 * 1000)).toDate(),
    halls: halls.First,
    desc: "meeting",
    isDraggable: true,
    isResizable: true,
  },
  {
    id: 9,
    title: "Занятие 9",
    start: moment(new Date(currentTime.getTime() + 1 * 24 * 60 * 60 * 1000)).toDate(),
    end: moment(new Date(currentTime.getTime() + 3 * 24 * 60 * 60 * 1000)).toDate(),
    halls: halls.First,
    desc: "meeting",
    isDraggable: true,
    isResizable: true,
  },
];
