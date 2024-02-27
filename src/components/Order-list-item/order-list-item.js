const OrderListItem = (props) => {
  const { id, product, type, artwork, mar2024, apr2024, deliveryBy } = props;
  if (apr2024 > 0) {
    return (
      <tr className="list-group-table" key={id}>
        <td className="list-group-product">
          {type}: {product}
        </td>
        <td className="list-group-item">{artwork}</td>
        <td className="list-group-item">{mar2024}{apr2024}</td>
        <td className="list-group-item">{deliveryBy}</td>
      </tr>
    );
  }
};

export default OrderListItem;
