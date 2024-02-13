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
      data: [
        {
          type: "carton",
          label: "L-cet-syrup 2,5mg/5ml 100ml",
          artwork: "16000",
          id: "1",
          deliveryBy: "15.03.2024",
        },
        {
          type: "carton",
          label: "Abrol-syrup 30mg/5ml 100ml",
          artwork: "15747",
          id: "2",
          deliveryBy: "15.03.2024",
        },
        {
          type: "carton",
          label: "Metamin tablets 500mg 10x10",
          artwork: "18712",
          id: "3",
          deliveryBy: "15.03.2024",
        },
        {
          type: "carton",
          label: "Susprin tablets 4mg 2x14",
          artwork: "16527",
          id: "4",
          deliveryBy: "15.03.2024",
        },
        {
          type: "carton",
          label: "Nimid tablets 100mg 10x10",
          artwork: "19870",
          id: "5",
          deliveryBy: "15.03.2024",
        },
      ],
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Header />
        <OrderInform />
        <OrderList data={data}/>
        <Footer />
      </div>
    );
  }
}

export default App;