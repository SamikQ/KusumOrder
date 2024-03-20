import { Component } from "react";
import Select from "react-select";
import suppliers from '../data/suppliers.json';



class OrderProps extends Component {
    constructor() {
        super();
        this.state = {
            type: '',
            month: '',
            supplier: ''
        }
    }

    onHandeChange = (item) => {
        if (item) { // Check if e is defined before accessing its value
            const data = item.value;
            this.setState({ selectedType: data });
        }
    }
    render() {
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


        const suppliersList = suppliers.map((item) => {
            const obj = {
                value: item.id,
                label: item.companyName
            }
        });

        return (
            <>
                <Select options={type} onChange={(type) => this.setState({ type: type.value })} defaultValue={"carton"} placeholder="Оберіть тип матеріалу" />
                <Select options={month} onChange={(month) => this.setState({ month: month.value })} defaultValue={"april"} placeholder="Оберіть місяць замовлення" />
                <Select options={result} onChange={(supplier) => this.setState({ supplier: supplier.value })} defaultValue={"s1"} placeholder="Оберіть постачальника" />
            </>
        )
    }
}

export default OrderProps;