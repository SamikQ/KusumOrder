import OrderListItem from "../Order-list-item/order-list-item";

const OrderList = ({ data }) => {
  const elemets = data.map((item) => {
    const { id, ...itemProps} = item;
    return <OrderListItem key={id} {...itemProps} />;
  });

  return (
    <table className="order-list">
      <thead className="order-list-header">
        <tr>
          <th className="list-group-item-label">Name</th>
          <th className="list-group-item-artwork">ArtWork</th>
          <th className="list-group-item-quantity">Quantity</th>
          <th className="list-group-item-delivery">Delivery date</th>
        </tr>
      </thead>
      <tbody>{elemets}</tbody>
    </table>
  );
};

export default OrderList;
