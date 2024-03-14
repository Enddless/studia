import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIRoute } from "../../const/route";
import {
  AboutStudioData,
  Banner,
  BannersData,
  CityData,
  CurrentBannerId,
  CurrentHallId,
  CurrentPriceData,
  CurrentPriceId,
  CurrentTeacherId,
  HallData,
  Logotype,
  PhotoHall,
  PhotoTeacher,
  PointsData,
  PriceData,
  TeacherData,
} from "../../types/auth-type";
import { Extra } from "../../services/type-service";

// ********** get about studio data **********
export const aboutStudio = createAsyncThunk<AboutStudioData, undefined, Extra>(
  "admin/aboutStudio",
  async (_arg, { extra: api }) => {
    const { data } = await api.get<AboutStudioData>(APIRoute.AboutStudio);

    return data;
  }
);
// ********** change about studio data **********
export const changeAboutStudio = createAsyncThunk<string, string, Extra>(
  "admin/changeAboutStudio",
  async (description, { extra: api }) => {
    const { data } = await api.post(APIRoute.AboutStudio, {
      description: description,
    });

    return data;
  }
);

// ********** get coords city **********
export const getCoordsCity = createAsyncThunk<CityData, undefined, Extra>(
  "admin/getCoordsCity",
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.CityMap);

    return data;
  }
);
// ********** change coords city **********
export const changeCoordsCity = createAsyncThunk<string, CityData, Extra>(
  "admin/changeCoordsCity",
  async ({title, lat, lng, zoom}, { extra: api }) => {
    const { data } = await api.post(APIRoute.CityMap, {
      title: title, lat: lat, lng: lng, zoom: zoom
    });

    return data;
  }
);
// ********** get coords points **********
export const getCoordsPoints = createAsyncThunk<PointsData, undefined, Extra>(
  "admin/getCoordsPoints",
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.PointsMap);

    return data;
  }
);

// ********** change coords points **********
export const changeCoordsPoints = createAsyncThunk<string, PointsData, Extra>(
  "admin/changeCoordsPoints",
  async ({lat, lng}, { extra: api }) => {
    const { data } = await api.post(APIRoute.PointsMap, {
      lat: lat, lng: lng
    });

    return data;
  }
);

// ********** get banner  **********
export const getBanners = createAsyncThunk<
  BannersData[],
  string | undefined,
  Extra
>("admin/getBanner", async (_arg, { extra: api }) => {
  const { data } = await api.get<BannersData[]>(APIRoute.Banner);
  return data;
});

// ********** change banner **********
export const changeBanner = createAsyncThunk<string, Banner, Extra>(
  "admin/changeBanner",
  async ({ PhotoBanner }, { extra: api }) => {
    const { data } = await api.post(APIRoute.Banner, PhotoBanner, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    return data;
  }
);

// ********** delete banner **********
export const deleteBanner = createAsyncThunk<string, CurrentBannerId, Extra>(
  "admin/deleteBanner",
  async ({ IdBanner }, { extra: api }) => {
    const { data } = await api.delete(APIRoute.Banner, {
      data: { IdBanner: IdBanner },
    });

    return data;
  }
);

// ********** change logotype **********
export const changeLogotype = createAsyncThunk<string, Logotype, Extra>(
  "admin/changeLogotype",
  async ({photoLogo}, { extra: api }) => {
    const { data } = await api.post(APIRoute.Logotype, photoLogo, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    return data;
  }
);

// ********** get halls data **********
export const getHalls = createAsyncThunk<HallData[], undefined, Extra>(
  "admin/getHalls",
  async (_arg, { extra: api }) => {
    const { data } = await api.get<HallData[]>(APIRoute.Halls);

    return data;
  }
);

// ********** add new hall **********
export const addHallPhoto = createAsyncThunk<HallData, PhotoHall, Extra>(
  "admin/addHallPhoto",
  async ({ PhotoHall }, { extra: api }) => {
    const { data } = await api.post(APIRoute.AddHallPhoto, PhotoHall, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    return data;
  }
);

// ********** add hall data **********
export const addHall = createAsyncThunk<HallData, HallData, Extra>(
  "admin/addHall",
  async ({ IdHall, Title, Description }, { extra: api }) => {
    const { data } = await api.post(APIRoute.Halls, {
      IdHall: IdHall,
      Title: Title,
      Description: Description,
    });

    return data;
  }
);

// ********** delete hall **********
export const deleteHall = createAsyncThunk<string, CurrentHallId, Extra>(
  "admin/deleteHall",
  async ({ IdHall }, { extra: api }) => {
    const { data } = await api.delete(APIRoute.Halls, {
      data: { IdHall: IdHall },
    });

    return data;
  }
);

// ********** get teachers data **********
export const getTeachers = createAsyncThunk<TeacherData[], undefined, Extra>(
  "admin/getTeachers",
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TeacherData[]>(APIRoute.Teachers);

    return data;
  }
);

// ********** add new teacher **********
export const addTeacherPhoto = createAsyncThunk<
  TeacherData,
  PhotoTeacher,
  Extra
>("admin/addTeacherPhoto", async ({ photoTeachers }, { extra: api }) => {
  const { data } = await api.post(APIRoute.AddTeacherPhoto, photoTeachers, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });

  return data;
});

// ********** add teacher data **********
export const addTeacher = createAsyncThunk<TeacherData, TeacherData, Extra>(
  "admin/addTeacher",
  async ({ idTeachers, teachersName, description }, { extra: api }) => {
    const { data } = await api.post(APIRoute.Teachers, {
      idTeachers: idTeachers,
      teachersName: teachersName,
      description: description,
    });

    return data;
  }
);

// ********** delete teacher **********
export const deleteTeacher = createAsyncThunk<string, CurrentTeacherId, Extra>(
  "admin/deleteTeacher",
  async ({ idTeachers }, { extra: api }) => {
    const { data } = await api.delete(APIRoute.Teachers, {
      data: { idTeachers: idTeachers },
    });

    return data;
  }
);

// ********** get price data **********
export const getPrice = createAsyncThunk<PriceData[], undefined, Extra>(
  "admin/getTickets",
  async (_arg, { extra: api }) => {
    const { data } = await api.get<PriceData[]>(APIRoute.Price);

    return data;
  }
);
// ********** add price data **********
export const addPrice = createAsyncThunk<void, CurrentPriceData, Extra>(
  "admin/addPrice",
  async (
    { title, descriptionOne, descriptionTwo, descriptionThree, price },
    { extra: api }
  ) => {
    const { data } = await api.post(APIRoute.AddPrice, {
      title,
      descriptionOne,
      descriptionTwo,
      descriptionThree,
      price,
    });

    return data;
  }
);

// ********** delete price **********
export const deletePrice = createAsyncThunk<string, CurrentPriceId, Extra>(
  "admin/deletePrice",
  async ({ idPrice }, { extra: api }) => {
    const { data } = await api.delete(APIRoute.DelPrice, {
      data: { idPrice: idPrice },
    });

    return data;
  }
);
