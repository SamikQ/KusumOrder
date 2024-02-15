import { Component } from "react";
import "./App.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import OrderInform from "../Order-information/order-information";
import OrderList from "../Order-list/order-list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Header />
        <OrderInform />
        <OrderList data={data} />
        <Footer />
      </div>
    );
  }
}

export default App;
