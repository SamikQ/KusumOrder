import { Component } from "react";
import "./App.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import OrderInform from "../order-information/order-information";
import OrderList from "../order-list/order-list";
import products from "../data/data.json"
import OrderApproval from "../order-approval/OrderApproval";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: products,
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Header />
        <OrderInform />
        <OrderList data={data} />
        <OrderApproval/>
        <Footer />
      </div>
    );
  }
}

export default App;
