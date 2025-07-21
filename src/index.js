import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { store } from "./store/store";
import App from "./App";
import { makeServer } from "./mirage/server";
import "./styles/global.css";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);