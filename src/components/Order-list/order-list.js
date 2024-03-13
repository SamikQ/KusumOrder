import { Component } from "react";
import OrderListItem from "../order-list-item/order-list-item";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      month: "",
    };
  }

  render() {
    const { data } = this.props;
    return <OrderListView data={data} />;
  }
}

const OrderListView = ({ data }) => {
  let counter = 1; // Лічильник для відстеження реальних елементів
  const elements = data.map((item) => {
    if (item.apr2024 > 0) {
      // Перевірка на наявність значення
      const { id, ...itemProps } = item;
      return <OrderListItem key={id} index={counter++} {...itemProps} />; // Використовуємо лічильник тут
    }
    return null; // Не відображаємо порожні елементи
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
