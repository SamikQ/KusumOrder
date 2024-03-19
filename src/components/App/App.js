import { Component } from "react";
import "./App.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import OrderInform from "../order-information/Order-information";
import OrderList from "../order-list/Order-list";
import OrderApproval from "../order-approval/OrderApproval";
import PDF from "../pdf/Pdf";
import CreatePDF from "../pdf/Pdf";

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
    const { selectedData } = this.state;
    return (
      <div className="wrapper">
        <Header />
        <div className="page">
          <OrderInform />
          <OrderList onDataSelected={this.onDataSelected} />
          <OrderApproval />
          {selectedData && <PDF selectedData={selectedData} />}
        </div>
        <button onClick={CreatePDF}>Click!</button>
        <Footer />
      </div>
    );
  }
}

export default App;
