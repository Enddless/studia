import { LoadingStatus } from "../const/const";

export type ReturnDataTickets = {
  id: number;
  startDate: Date;
  endDate: Date;
  purchaseDate: Date;
  visits: number;
  totalVisits: number;
};

export type StateUserData = {
  userTickets: ReturnDataTickets | null;
  isTicketsLoading: LoadingStatus;
};
