import {
  IReviewsInfo,
  INotification,
  IContactsStudio,
} from "../interfaces/interfaces";

export const reviewsInfo: IReviewsInfo[] = [
  {
    id: 1,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
  {
    id: 2,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
  {
    id: 3,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
  {
    id: 4,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
  {
    id: 5,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
  {
    id: 6,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
  {
    id: 7,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
  {
    id: 8,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
  {
    id: 9,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
  {
    id: 10,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
];


export const contactsStudio: IContactsStudio = {
  id: 1,
  address: "Южно-Сахалинск, Коммунистический проспект, 20,",
  phone: "+7 (495) 788-77-50",
  socialLonks: [
    {
      id: 1,
      urlLnk: "",
      urlSvg: "",
    },
  ],
  // points: {
  //   title: "Южно-Сахалинск",
  //   lat: 46.960791,
  //   lng: 142.746179,
  // },
  // city: {
  //   title: "Южно-Сахалинск",
  //   lat: 46.960791,
  //   lng: 142.746179,
  //   zoom: 17,
  // },
};
export const notificationData: INotification[] = [
  {
    id: 1,
    text: "Текст нового уведомления",
    date: new Date(2014, 11, 31, 12, 30, 0),
  },
  {
    id: 2,
    text: "Текст нового уведомления",
    date: new Date(2014, 11, 31, 12, 30, 0),
  },
  {
    id: 3,
    text: "Текст нового уведомленияТекст нового уведомленияТекст нового уведомленияТекст нового уведомленияТекст нового уведомленияТекст нового уведомленияТекст нового уведомленияТекст нового уведомленияТекст нового уведомленияТекст нового уведомленияТекст нового уведомления",
    date: new Date(2014, 11, 31, 12, 30, 0),
  },
  {
    id: 4,
    text: "Текст нового уведомления",
    date: new Date(2014, 11, 31, 12, 30, 0),
  },
  {
    id: 5,
    text: "Текст нового уведомления",
    date: new Date(2014, 11, 31, 12, 30, 0),
  },
];

export const lessons = ["бокс", "балет", "танцы"];
export const times = ["09:00", "12:00", "15:00"];
export const halls = ["Зал 1", "Зал 2", "Зал 3"];