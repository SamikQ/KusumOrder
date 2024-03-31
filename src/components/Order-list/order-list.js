import { Component } from "react";
import products from "../data/data.json";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      type: "",
      month: "",
    };
  }

  onSelectedType = (e) => {
    const type = e.target.value;
    const data = products.filter((item) => item.type === type);
    console.log(Array.isArray(data));
    this.setState({
      data: data
    });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <div>
          <SelectedType data={data} onSelectedType={this.onSelectedType} />
        </div>
        <button>Submit</button>
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

export default OrderList;
