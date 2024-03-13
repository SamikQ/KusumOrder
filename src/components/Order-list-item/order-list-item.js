const OrderListItem = ({
  id,
  product,
  type,
  artwork,
  apr2024,
  deliveryBy,
  index
}) => {
  if (apr2024 > 0) {
    return (
      <tr className="list-group-table" key={id}>
        <td className="list-group-item">{index}</td>
        <td className="list-group-product">
          {type}: {product}
        </td>
        <td className="list-group-item">{artwork}</td>
        <td className="list-group-item">{apr2024}</td>
        <td className="list-group-item">{deliveryBy}</td>
      </tr>
    );
  }
  return null; // Не відображаємо порожні елементи
};

export default OrderListItem;
