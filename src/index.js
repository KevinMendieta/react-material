import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./components/App";
import load from "./loadMockData";

load();
ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
