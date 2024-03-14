import { createSlice } from "@reduxjs/toolkit";
import { LoadingStatus, NameSpace } from "../../const/const";
import { mainPageData } from "../thunk/mainPage";
import { MainPageState } from "../../types/auth-type";

const initialState: MainPageState = {
  mainPage: null,
  isStudioDataLoading: LoadingStatus.Idle,
  isBannerLoading: LoadingStatus.Idle,
  isHallsLoading: LoadingStatus.Idle,
  isTeachersLoading: LoadingStatus.Idle,
  isPriceLoading:LoadingStatus.Idle,
  isCityLoading:LoadingStatus.Idle,
  isPointsLoading: LoadingStatus.Idle,
};

export const mainPageSlice = createSlice({
  name: NameSpace.MainPage,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // ***** about studio *****
      .addCase(mainPageData.pending, (state) => {
        state.isStudioDataLoading = LoadingStatus.Pending;
        state.isBannerLoading = LoadingStatus.Pending;
        state.isTeachersLoading = LoadingStatus.Pending;
        state.isPriceLoading = LoadingStatus.Pending;
        state.isCityLoading = LoadingStatus.Pending;
        state.isPointsLoading = LoadingStatus.Pending;
        state.isHallsLoading = LoadingStatus.Pending;
      })
      .addCase(mainPageData.fulfilled, (state, action) => {
        state.mainPage = action.payload;
        state.isStudioDataLoading = LoadingStatus.Fulfilled;
        state.isBannerLoading = LoadingStatus.Fulfilled;
        state.isTeachersLoading = LoadingStatus.Fulfilled;
        state.isPriceLoading = LoadingStatus.Fulfilled;
        state.isCityLoading = LoadingStatus.Fulfilled;
        state.isPointsLoading = LoadingStatus.Fulfilled;
        state.isHallsLoading = LoadingStatus.Fulfilled;
      })
      .addCase(mainPageData.rejected, (state) => {
        state.isStudioDataLoading = LoadingStatus.Rejected;
        state.isBannerLoading = LoadingStatus.Rejected;
        state.isTeachersLoading = LoadingStatus.Rejected;
        state.isPriceLoading = LoadingStatus.Rejected;
        state.isCityLoading = LoadingStatus.Rejected;
        state.isPointsLoading = LoadingStatus.Rejected;
        state.isHallsLoading = LoadingStatus.Rejected;
      });
  },
});
