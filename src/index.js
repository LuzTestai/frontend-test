import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./styles/index.css";
import { store } from "./redux/store";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
reportWebVitals();
