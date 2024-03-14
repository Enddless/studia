import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIRoute } from "../../const/route";
import { MainPageData } from "../../types/auth-type";
import { Extra } from "../../services/type-service";

// ********** get main page data **********
export const mainPageData = createAsyncThunk<MainPageData, undefined, Extra>(
  "mainPage/aboutStudio",
  async (_arg, { extra: api }) => {
    const { data } = await api.get<MainPageData>(APIRoute.MainPage);

    return data;
  }
);
