import React from "react";
import ReactDOM from "react-dom/client";

//_Styles:
import "./index.scss";

//_HOCs:
import { Context } from "./hoc/ContextApp";

//_Components:
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);
