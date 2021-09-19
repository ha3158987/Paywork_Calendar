import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import GlobalStyle from "Styles/globalStyle.js";

import { calendarReducer } from "ReduxStore/modules/calendar";

const calendarStore = createStore(calendarReducer);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={calendarStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
