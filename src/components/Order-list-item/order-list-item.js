const OrderListItem = (props) => {
  const { id, type, label, artwork, deliveryBy } = props;

  return (
    <tbody className="list-group-item container" key={id}>
      <td className="list-group-item">
        {type}:{label}
      </td>
      <td className="list-group-item">Artwork No.: {artwork}</td>
      <td className="list-group-item">Quantity: {artwork}</td>
      <td className="list-group-item">Delivery by: {deliveryBy}</td>
    </tbody>
  );
};

export default OrderListItem;
