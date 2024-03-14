export enum AppRoute {
  Root = "/",
  Modal = "/modal",
  Login = "/login",
  Registration = "/registration",
  Recovery = "/recovery",
  Dashboard = "/dashboard",
  Reviews = "/reviews",
  PersonalArea = "/inbox",
  AdministratorArea = "/administration",
  NotFound = "/*",
}


export enum APIRoute {
  //auth
  Registration = "/registration",
  Confirmation = "/confirmation",
  Login = '/login',
  Logout = '/logOutOfAccount',
  //user
  Role = '/accessAccount',
  UserData = '/basicSettings',
  DeleteUser = '/deleteLogin',
  //others-data
  UpdateToken = '/loginRefresh',
  Tickets = '/seasonTickets',
  AddPhoto = '/addUsersPhoto',
  DeletePhotoUser = "/deleteUsersPhoto",
  //admin-settings
  Banner = "/basicBanners",
  AboutStudio = "/studioSettings",
  CityMap = "/studioCitySettings",
  PointsMap = "/studioPointsSettings",
  Logotype = "/studioSettingsLogo",
  AddHallPhoto = "/hallsSettingsPhoto",
  AddTeacherPhoto = "/teacherSettingsPhoto",
  Halls = "/hallsSettings",
  Teachers = "/teachersSettings",
  Price = "/ServicePrice",
  AddPrice = "/addServicePrice",
  DelPrice = "/deleteServicePrice",
  //main page
  MainPage = "/page",
}
