import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import footer from "./components/footer";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/footer";
import Demo from "./components/hello";
ReactDOM.render(<Demo color={"black"} parac={"red "} />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
