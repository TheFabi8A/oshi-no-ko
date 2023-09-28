import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./tailwind.css";

import ContextProvider from "./context/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
);
