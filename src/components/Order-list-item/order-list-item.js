const OrderListItem = (props) => {
  const { id, type, label, artwork, quantity, deliveryBy } = props;
  if (quantity > 0) {
    return (
      <tr className="list-group-item container" key={id}>
        <td className="list-group-item">
          {type}:{label}
        </td>
        <td className="list-group-item">{artwork}</td>
        <td className="list-group-item">Quantity: {quantity}</td>
        <td className="list-group-item">Delivery by: {deliveryBy}</td>
      </tr>
    );
  }
};

export default OrderListItem;
