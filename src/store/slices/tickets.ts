import { createSlice } from "@reduxjs/toolkit";
import { LoadingStatus, NameSpace } from "../../const/const";
import { getTickets } from "../thunk/tickets";
import { StateUserData } from "../../types/user-types";

const initialState: StateUserData = {
  userTickets: null,
  isTicketsLoading: LoadingStatus.Idle,
  
};

export const ticketSlice = createSlice({
  name: NameSpace.Ticket,
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder
      // ***** tickets *****
      .addCase(getTickets.pending, (state) => {
        state.isTicketsLoading = LoadingStatus.Pending;
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.isTicketsLoading = LoadingStatus.Fulfilled;
        state.userTickets = action.payload;
      })
      .addCase(getTickets.rejected, (state) => {
        state.isTicketsLoading = LoadingStatus.Rejected;
      })
      ;
  },
});
