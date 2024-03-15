import { Component } from "react";
import "./App.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import OrderInform from "../order-information/Order-information";
import OrderList from "../order-list/Order-list";
import OrderApproval from "../order-approval/OrderApproval";
import PDF from "../pdf/Pdf";

class App extends Component {
  state = {
    selectedData: null,
  };

  onDataSelected = (data) => {
    this.setState({
      selectedData: data,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="page">
          <OrderInform />
          <OrderList onDataSelected={this.onDataSelected} />
          <OrderApproval />
          <PDF selectedData={this.state.selectedData} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
