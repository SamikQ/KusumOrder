import { Component } from "react";
import PropTypes from "prop-types";
import OrderListItem from "../order-list-item/Order-list-item";
import products from "../data/data.json";

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
    this.renderData(type);
    this.setState({
      type,
    });
  };

  renderData = (category) => {
    const data = products.filter((item) => item.type === category);
    this.setState({
      data,
    });
  };

  getFilteredData = () => {
    const { data, type } = this.state;
    return data.filter((item) => item.type === type);
  };

  render() {
    const { data, type } = this.state;
    // const content = !!data ? <OrderListView data={data} type={type} /> : null;
    return (
      <>
        <div>
          <SelectedType data={data} onSelectedType={this.onSelectedType} />
        </div>
        <button onClick={() => this.props.onDataSelected(data)}>Submit</button>
        {/* {content} */}
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

// const OrderListView = ({ data }) => {
//   let counter = 1; // Лічильник для відстеження реальних елементів
//   const elements = data.map((item) => {
//     if (item.apr2024 > 0) {
//       // Перевірка на наявність значення
//       const { id, ...itemProps } = item;
//       return <OrderListItem key={id} index={counter++} {...itemProps} />; // Використовуємо лічильник тут
//     }
//     return null;
//   });

//   return (
//     <table className="order-list">
//       <thead className="order-list-header">
//         <tr>
//           <th className="list-group-item-label">№</th>
//           <th className="list-group-item-label">Product</th>
//           <th className="list-group-item-artwork">Artwork</th>
//           <th className="list-group-item-quantity">Quantity, pcs</th>
//           <th className="list-group-item-delivery">Delivery date</th>
//         </tr>
//       </thead>
//       <tbody>{elements}</tbody>
//     </table>
//   );
// };

OrderList.propTypes = {
  onDataSelected: PropTypes.func.isRequired,
};

export default OrderList;
