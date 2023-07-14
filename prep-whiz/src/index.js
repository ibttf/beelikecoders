import React from "react";
import App from "./components/App";
import {createRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css"

const root=createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App /> 
    </React.StrictMode>

  </BrowserRouter>
);
