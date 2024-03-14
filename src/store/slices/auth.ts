import {
  AuthorizationStatus,
  DEFAULT_BUTTON_AREA_PERSONAL,
  DEFAULT_FORM_AUTH,
  LoadingStatus,
  NameSpace,
} from "../../const/const";
import { StateAuth } from "../../types/auth-type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  changeUserData,
  changeUserPhoto,
  confirmation,
  deleteUserData,
  deleteUserPhoto,
  getCurrentUserData,
  getCurrentUserRole,
  login,
  logout,
  registration,
} from "../thunk/auth";

const initialState: StateAuth = {
  authStatus: AuthorizationStatus.Unknown,
  isRegistrationLoading: LoadingStatus.Idle,
  isConfirmationLoading: LoadingStatus.Idle,
  message: "",
  userData: {},
  userRole: null,
  isUserDataLoading: LoadingStatus.Idle,
  isUserRoleLoading: LoadingStatus.Idle,
  isUserPhotoLoading: LoadingStatus.Idle,
  buttonActive: DEFAULT_BUTTON_AREA_PERSONAL.title,
  formAuthActiveId: DEFAULT_FORM_AUTH,
  token: "",
};

export const authSlice = createSlice({
  name: NameSpace.Auth,
  initialState,
  reducers: {
    addtokenStore(state, action: PayloadAction<string>){
      state.token = action.payload;
    },
    deletetokenStore(state){
      state.token = "";
    },
    changeActiveButtonMenuPersonal(state, action: PayloadAction<string>) {
      state.buttonActive = action.payload;
    },
    changeFormActive(state, action: PayloadAction<string>) {
      state.formAuthActiveId = action.payload;
    },
    refreshUser(state) {
      state.userData = {};
      state.userRole = null;
      state.authStatus = AuthorizationStatus.Unknown;
    },
  },
  extraReducers(builder) {
    builder
      // ***** registration *****
      .addCase(registration.pending, (state) => {
        state.isRegistrationLoading = LoadingStatus.Pending;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.isRegistrationLoading = LoadingStatus.Fulfilled;
        state.message = action.payload;
      })
      .addCase(registration.rejected, (state) => {
        state.isRegistrationLoading = LoadingStatus.Rejected;
      })
      // ***** confirmation *****
      .addCase(confirmation.pending, (state) => {
        state.isConfirmationLoading = LoadingStatus.Pending;
      })
      .addCase(confirmation.fulfilled, (state) => {
        state.isConfirmationLoading = LoadingStatus.Fulfilled;
      })
      .addCase(confirmation.rejected, (state) => {
        state.isConfirmationLoading = LoadingStatus.Rejected;
      })
      // ***** login *****
      .addCase(login.pending, (state) => {
        state.isConfirmationLoading = LoadingStatus.Pending;
        state.authStatus = AuthorizationStatus.Unknown;
      })
      .addCase(login.fulfilled, (state) => {
        state.isConfirmationLoading = LoadingStatus.Fulfilled;
        state.authStatus = AuthorizationStatus.Auth;
      })
      .addCase(login.rejected, (state) => {
        state.isConfirmationLoading = LoadingStatus.Rejected;
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      // ***** logout *****
      .addCase(logout.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.userData = {};
        state.userRole = null;
      })
      // ***** userdata *****
      .addCase(getCurrentUserData.pending, (state) => {
        state.isUserDataLoading = LoadingStatus.Pending;
      })
      .addCase(getCurrentUserData.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.authStatus = AuthorizationStatus.Auth;
        state.isUserDataLoading = LoadingStatus.Fulfilled;
      })
      .addCase(getCurrentUserData.rejected, (state) => {
        state.isUserDataLoading = LoadingStatus.Rejected;
      })
      // ***** change userdata *****
      .addCase(changeUserData.pending, (state) => {
        state.isUserDataLoading = LoadingStatus.Pending;
      })
      .addCase(changeUserData.fulfilled, (state, action) => {
        state.message = action.payload;
        state.isUserDataLoading = LoadingStatus.Fulfilled;
      })
      .addCase(changeUserData.rejected, (state) => {
        state.isUserDataLoading = LoadingStatus.Rejected;
      })
      // ***** change userphoto *****
      .addCase(changeUserPhoto.pending, (state) => {
        state.isUserPhotoLoading = LoadingStatus.Pending;
      })
      .addCase(changeUserPhoto.fulfilled, (state, action) => {
        state.message = action.payload;
        state.isUserPhotoLoading = LoadingStatus.Fulfilled;
      })
      .addCase(changeUserPhoto.rejected, (state) => {
        state.isUserPhotoLoading = LoadingStatus.Rejected;
      })
      // ***** delete userphoto *****
      .addCase(deleteUserPhoto.pending, (state) => {
        state.isUserPhotoLoading = LoadingStatus.Pending;
      })
      .addCase(deleteUserPhoto.fulfilled, (state, action) => {
        state.message = action.payload;
        state.isUserPhotoLoading = LoadingStatus.Fulfilled;
      })
      .addCase(deleteUserPhoto.rejected, (state) => {
        state.isUserPhotoLoading = LoadingStatus.Rejected;
      })
      // ***** user-role *****
      .addCase(getCurrentUserRole.pending, (state) => {
        state.isUserRoleLoading = LoadingStatus.Pending;
      })
      .addCase(getCurrentUserRole.fulfilled, (state, action) => {
        state.userRole = action.payload;
        state.authStatus = AuthorizationStatus.Auth;
        state.isUserRoleLoading = LoadingStatus.Fulfilled;
      })
      .addCase(getCurrentUserRole.rejected, (state) => {
        state.isUserRoleLoading = LoadingStatus.Rejected;
      })
      // ***** delete account *****
      .addCase(deleteUserData.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.message = action.payload;
        state.userData = {};
        state.userRole = null;
      });
  },
});

export const {refreshUser} = authSlice.actions;