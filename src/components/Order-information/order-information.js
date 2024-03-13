import { Component } from "react";
import suppliers from "../data/suppliers.json";

class OrderInform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suppliers: suppliers,
      supplier: suppliers[0],
    };
  }

  onHandleSelect = (e) => {
    const selectedSupplierId = e.target.value;
    const selectedSupplier = this.state.suppliers.find(
      (supplier) => supplier.id === selectedSupplierId // Використовую ід для порівняння
    );
    this.setState({ supplier: selectedSupplier });
  };

  render() {
    const { suppliers, supplier } = this.state;

    return (
      <>
        <SupplierInfo suppliers={suppliers} onHandleSelect={this.onHandleSelect} />
        <View supplier={supplier} />
      </>
    );
  }
}

const SupplierInfo = ({ suppliers, onHandleSelect }) => {
  return (
    <form>
      <label htmlFor={suppliers}>Оберіть постачальника:</label>
      <select onChange={onHandleSelect}>
        <option value="">-- Оберіть --</option>
        {suppliers.map((item) => (
          <option key={item.id} value={item.id}>
            {item.companyName}
          </option>
        ))}
      </select>
    </form>
  );
};

const View = ({ supplier }) => {
  const { id, companyName, representative, contact, email, contractNo } =
    supplier;
  const orderDate = new Date()
    .toISOString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join(".");

  const orderNoIns = 374;
  const orderNoCar = 287;

  return (
    <div className="order-inform">
      <div className="order__details" key={id}>
        <div className="order__details-list">
          <span className="order__detail-li">
            Purchase order No.: {orderNoIns}/24/2024
          </span>
          <span className="order__detail-li">Dated: {orderDate}</span>
        </div>
        <div className="order__details-list oder__details-list-second">
          <span className="order__receipt-li">Ordered to: {companyName}</span>
          <span className="order__receipt-li">Contact details:</span>
          <span className="order__receipt-li">Name:{representative}</span>
          <span className="order__receipt-li">Phone No.:{contact}</span>
          <span className="order__receipt-li">Mail:{email}</span>
        </div>
      </div>
      <div className="order__details">
        <div className="order__details-list">
          <span className="order__contract-li">
            Delivery address: 54, Skryabina str, Sumy city, Ukraine
          </span>
        </div>
        <div className="order__details-list oder__details-list-second">
          <span className="order__contract-li">Contract No:{contractNo}</span>
          <span className="order__contract-li">
            Terms of delivery: DPP; Carton
          </span>
          <span className="order__contract-li">
            Payment terms: 50% - prepayment / 50% - 30 days credit term
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderInform;
