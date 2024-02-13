import OrderListItem from "../Order-list-item/order-list-item";

const OrderList = ({ data }) => {
  const elemets = data.map((item) => {
    const { id, ...itemProps } = item;
    return <OrderListItem key={id} {...itemProps} />;
  });

  return (
    <table className="order-list">
      <thead className="order-list-header">
        <td className="list-group-item-label"> Name</td>
        <td className="list-group-item-artwork"> Manufacturer</td>
        <td className="list-group-item-quantity"> Quantity</td>
        <td className="list-group-item-delivery"> Delivery date</td>
      </thead>
      <tbody> {elemets}</tbody>
    </table>
  );
};

export default OrderList;
