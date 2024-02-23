const OrderListItem = (props) => {
  const { id, type, label, artwork, quantity, deliveryBy } = props;
  if (quantity > 0) {
    return (
      <tr className="list-group-table" key={id}>
        <td className="list-group-product">
          {type}:{label}
        </td>
        <td className="list-group-item">{artwork}</td>
        <td className="list-group-item">{quantity}</td>
        <td className="list-group-item">{deliveryBy}</td>
      </tr>
    );
  }
};

export default OrderListItem;
