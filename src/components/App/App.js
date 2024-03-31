import { Component } from "react";
import "./App.scss";
import Header from "../header/Header";
import OrderInform from "../order-information/Order-information";
import PDF from "../pdf/Pdf";
import OrderProps from "../order-props/OrderProps";

class App extends Component {
  state = {
    type: "",
    month: "",
    supplier: "",
    order: [],
  };

  onDataSelected = (data) => {
    const { type, month, supplier, order } = data;
    this.setState({
      type,
      month,
      supplier,
      order,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <OrderProps onDataSelected={this.onDataSelected} />
        <div className="page">
          <OrderInform />
        </div>
        <PDF data={this.state} />
      </div>
    );
  }
}

export default App;
