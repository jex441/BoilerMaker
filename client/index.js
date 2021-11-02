import React from "react";
import ReactDOM from "react-dom";
import store from "./store.js";
import { Provider } from "react-redux";
import style from "./index.css";
import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
