import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./store/reducers";
import App from "./App";
import "./styles/index.scss";
import "./styles/app.scss";
import "./styles/grid.scss";
import "./styles/text.scss"
import "./styles/utils.scss"

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: reducers,
});
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
