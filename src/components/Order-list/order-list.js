import { Component } from "react";
import OrderListItem from "../order-list-item/Order-list-item";
import products from "../data/data.json";
import { usePDF } from "react-to-pdf";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      type: "",
      month: "",
    };
  }

  onSelectedType = (e) => {
    const type = e.target.value;
    const data = products.filter((item) => item.type === type);
    this.setState({
      data,
      type,
    });
  };

  getFilteredData = () => {
    const { data, type } = this.state;
    return data.filter((item) => item.type === type);
  };

  render() {
    const { data, type } = this.state;
    const content = !!data ? <OrderListView data={data} type={type} /> : null;
    return (
      <>
        <SelectedType data={data} onSelectedType={this.onSelectedType} />
        {content}
        <ConvertToPdf/>
      </>
    );
  }
}

const SelectedType = ({ onSelectedType }) => {
  const options = [
    { value: "carton", label: "Пачка" },
    { value: "insert", label: "Інструкція" },
    { value: "label", label: "Етикетка" },
  ];
  return (
    <form>
      <label htmlFor={options}>Оберіть категорію:</label>
      <select onChange={onSelectedType}>
        <option value={options[0].value}>-- Оберіть --</option>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </form>
  );
};

const ConvertToPdf = () => {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  return (
    <div>
      <button onClick={() => toPDF()}>Download PDF</button>
      <div ref={targetRef}>
        
      </div>
    </div>
  );
};

const OrderListView = ({ data }) => {
  let counter = 1; // Лічильник для відстеження реальних елементів
  const elements = data.map((item) => {
    if (item.apr2024 > 0) {
      // Перевірка на наявність значення
      const { id, ...itemProps } = item;
      return <OrderListItem key={id} index={counter++} {...itemProps} />; // Використовуємо лічильник тут
    }
    return null;
  });

  return (
    <table className="order-list">
      <thead className="order-list-header">
        <tr>
          <th className="list-group-item-label">№</th>
          <th className="list-group-item-label">Product</th>
          <th className="list-group-item-artwork">Artwork</th>
          <th className="list-group-item-quantity">Quantity, pcs</th>
          <th className="list-group-item-delivery">Delivery date</th>
        </tr>
      </thead>
      <tbody>{elements}</tbody>
    </table>
  );
};

export default OrderList;
