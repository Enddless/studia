export interface IPagesHeader {
  id: number;
  title: string;
  url: string;
}

export interface IPagesFooter {
  id: number;
  title: string;
  url: string;
}

export interface IReviewsInfo {
  id: number;
  data: {
    user: string;
    stars: number;
    date: string;
    description: string;
  };
}


export interface INotification {
  id: number;
  text: string;
  date: Date;
}

export interface IContactsStudio {
  id: number,
  address: string,
  phone: string,
  socialLonks: [
    {
      id: number,
      urlLnk: string,
      urlSvg: string,
    },
  ],
  // points: {
  //   title: string,
  //   lat: number,
  //   lng: number,
  // },
  // city: {
  //   title: string,
  //   lat: number,
  //   lng: number,
  //   zoom: number,
  // },
}