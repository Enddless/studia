import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import { persistor, store } from "./store/index.ts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { getCurrentUserData, getCurrentUserRole } from "./store/thunk/auth.ts";
import { BrowserRouter } from "react-router-dom";
import "./main.module.scss";
// import Spinner from "./components/Spinner/index.tsx";

store.dispatch(getCurrentUserData());
store.dispatch(getCurrentUserRole());


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading</div>} persistor={persistor}>
      <BrowserRouter basename="/studia">
          <App />
        </BrowserRouter>     
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
