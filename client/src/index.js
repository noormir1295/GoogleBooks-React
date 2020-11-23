import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../../../GoogleBooks-React/client/src/App";
import registerServiceWorker from "../../../GoogleBooks-React/client/src/registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
