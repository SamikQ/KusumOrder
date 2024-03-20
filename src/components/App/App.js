import { Component } from "react";
import "./App.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import OrderInform from "../order-information/Order-information";
import PDF from "../pdf/Pdf";
import OrderProps from "../order-props/OrderProps";

class App extends Component {
  state = {
    type: '',
    month: '',
    supplier: '',
    order: []
  }

  onDataSelected = (data) => {
    const { type, month, supplier, order } = data;
    this.setState({
      type,
      month,
      supplier,
      order
    });
  };

  // onSelectedType = (e) => {
  //   const { type, month } = this.state;
  //   const order = products.filter((item) => item.type === type && item.month === month);
  //   console.log(Array.isArray(order));
  //   this.setState({
  //     order
  //   });
  // };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <OrderProps onDataSelected={this.onDataSelected} />
        <div className="page">
          <OrderInform />
        </div>
        <PDF data={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
