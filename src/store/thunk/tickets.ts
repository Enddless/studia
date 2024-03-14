import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIRoute } from "../../const/route";
import { Extra } from "../../services/type-service";
import { ReturnDataTickets } from "../../types/user-types";

// ********** TICKETS **********
export const getTickets = createAsyncThunk<ReturnDataTickets, undefined, Extra>(
  "user/tickets",
  async (_arg, { extra: api }) => {
    const { data } = await api.get<ReturnDataTickets>(APIRoute.Tickets);

    return data;
  }
);
