import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIRoute } from "../../const/route";
import {
  AuthData,
  AuthWithCodeData,
  ReturnData,
  UserCurrentData,
  UserCurrentPhoto,
  UserCurrentRole,
} from "../../types/auth-type";
import { addToken, deleteToken } from "../../services/token";
import { Extra } from "../../services/type-service";

// ********** AUTH **********
export const registration = createAsyncThunk<ReturnData, AuthData, Extra>(
  "user/registration",
  async ({ emailUser, password }, { extra: api }) => {
    const { data } = await api.post<ReturnData>(APIRoute.Registration, {
      emailUser,
      password,
    });

    return data;
  }
);

export const confirmation = createAsyncThunk<
  ReturnData,
  AuthWithCodeData,
  Extra
>(
  "user/confirmation",
  async ({ emailUser, password, code }, { extra: api }) => {
    const { data } = await api.post<ReturnData>(APIRoute.Confirmation, {
      emailUser,
      password,
      code,
    });

    return data;
  }
);

export const login = createAsyncThunk<string, AuthData, Extra>(
  "user/login",
  async ({ emailUser, password }, { extra: api }) => {
    const response = await api.post(APIRoute.Login, {
      emailUser,
      password,
    });

    const token = response.data.token;
    addToken({ token });
    // dispatch(authSlice.actions.addtokenStore(token))
    return response.data;
  }
);
export const logout = createAsyncThunk<void, undefined, Extra>(
  "user/logout",
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.Logout);
    deleteToken();
    // dispatch(authSlice.actions.deletetokenStore())
    return data;
  }
);

// ********** USERDATA **********
export const getCurrentUserData = createAsyncThunk<
  UserCurrentData,
  string | undefined,
  Extra
>("user/data", async (_arg, { extra: api }) => {
  const { data } = await api.get<UserCurrentData>(APIRoute.UserData);
  return data;
});

export const changeUserData = createAsyncThunk<string, UserCurrentData, Extra>(
  "user/updatedata",
  async ({ userName, genders, phoneNumber, dateOfBirth }, { extra: api }) => {
    const { data } = await api.post(APIRoute.UserData, {
      userName,
      genders,
      phoneNumber,
      dateOfBirth,
    });

    return data;
  }
);
export const changeUserPhoto = createAsyncThunk<
  string,
  UserCurrentPhoto,
  Extra
>("user/updatePhoto", async ({ photoUser }, { extra: api }) => {
  const { data } = await api.post(APIRoute.AddPhoto, photoUser, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });

  return data;
});

export const deleteUserPhoto = createAsyncThunk<string, undefined, Extra>(
  "user/deletePhoto",
  async (_arg, { extra: api }) => {
    const { data } = await api.post(APIRoute.DeletePhotoUser);

    return data;
  }
);

export const deleteUserData = createAsyncThunk<string, undefined, Extra>(
  "user/deleteData",
  async (_arg, { extra: api }) => {
    const { data } = await api.post(APIRoute.DeleteUser);
    deleteToken();
    return data;
  }
);

// ********** USER-ROLE **********
export const getCurrentUserRole = createAsyncThunk<
  UserCurrentRole,
  string | undefined,
  Extra
>("user/role", async (_arg, { extra: api }) => {
  const { data } = await api.get<UserCurrentRole>(APIRoute.Role);

  return data;
});
