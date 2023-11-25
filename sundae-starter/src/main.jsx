import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SummaryForm from "./pages/summary/SummaryForm"
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <SummaryForm/>
  </React.StrictMode>
);
