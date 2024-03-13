import { Component } from "react";
import "./App.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import OrderInform from "../order-information/Order-information";
import OrderList from "../order-list/Order-list";
import OrderApproval from "../order-approval/OrderApproval";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="page">
          <OrderInform />
          <OrderList />
          <OrderApproval />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
