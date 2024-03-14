import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_BUTTON_AREA_ADMIN, NameSpace } from "../../const/const";

type CityState = {
  buttonActive: string;
};

const initialState: CityState = {
  buttonActive: DEFAULT_BUTTON_AREA_ADMIN.title,
};

export const adminSlice = createSlice({
  name: NameSpace.Admin,
  initialState,
  reducers: {
    changeActiveButtonMenu(state, action: PayloadAction<string>) {
      state.buttonActive = action.payload;
    },
  },
});

export const { changeActiveButtonMenu } = adminSlice.actions;
