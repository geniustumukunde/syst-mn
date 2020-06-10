import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Homepage from "./components/index";
import Login from "./components/login";
import Register from "./components/register";
import Routes from "./routes/ApppRouter";
import * as serviceWorker from "./serviceWorker";
import "./styles/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();