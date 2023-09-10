import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import './index.css'

// import "./useReducer/intro-reducer";
import { TodoApp } from "./TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <TodoApp />
  </React.StrictMode>
);
