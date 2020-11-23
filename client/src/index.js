import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../../../Google-Books-React/client/src/App";
import registerServiceWorker from "../../../Google-Books-React/client/src/registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
