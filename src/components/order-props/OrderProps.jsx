import { Component } from "react";
import Select from "react-select";
import suppliers from '../data/suppliers.json';
import products from "../data/data.json";
import './OrderProps.scss';

class OrderProps extends Component {
    state = {
        type: '',
        month: '',
        supplier: '',
        order: []
    }

    onSelectedType = () => {
        const { type, month } = this.state;
        const order = products.filter((item) => item.type === type && item.month === month);
        console.log(Array.isArray(order));
        this.setState({
            order
        });
    };

    render() {

        const styles = {
            option: (provided, state) => ({
                ...provided,
                borderBottom: '1px dotted pink',
                color: 'black',
            }),
        };

        const type = [
            { value: "carton", label: "Пачка" },
            { value: "insert", label: "Інструкція" },
            { value: "label", label: "Етикетка" },
        ];

        const month = [
            { value: "april", label: "Квітень" },
            { value: "may", label: "Травень" },
            { value: "june", label: "Червень" },
        ];


        const suppliersList = suppliers.map((item) => ({
            value: item.id,
            label: item.companyName,
        }));

        return (
            <div className="select__prop">
                <Select options={type} onChange={(type) => this.setState({ type: type.value })} defaultValue={"carton"} placeholder="Оберіть тип матеріалу" styles={styles} />
                <br />
                <Select options={month} onChange={(month) => this.setState({ month: month.value })} defaultValue={"april"} placeholder="Оберіть місяць замовлення" styles={styles} />
                <br />
                <Select options={suppliersList} onChange={(supplier) => this.setState({ supplier: supplier.value })} defaultValue={"s1"} placeholder="Оберіть постачальника" styles={styles} />
                <br />
                <button onClick={this.onSelectedType} className="fill">Submit filter</button>
                <br />
                <button type="submit" onClick={() => this.props.onDataSelected(this.state)} className="raise">Create order</button>
            </div>
        )
    }
}

export default OrderProps;