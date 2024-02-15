import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App/App";
import OrderService from "./components/Service/OrderService";

const orderService = new OrderService();

orderService.getProducts().then(res => res.data.results.forEach(item => console.log(item.name))).catch(error => console.error('Помилка при отриманні продуктів:', error));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);