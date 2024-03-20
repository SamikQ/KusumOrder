import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import './fonts/Sana-normal';
import { Component } from "react";
import Footer from '../footer/Footer';


var examples = {}
window.examples = examples

class PDF extends Component {
    constructor(props) {
        super();
    }

    CreatePDF = () => {
        const arr = this.props.data;
        console.log(arr);
        const doc = new jsPDF();
        doc.addFont('Sana-normal.ttf', 'Sana', 'normal');
        doc.setFont('Sana');
        doc.setFontSize(18);
        doc.text('With content', 40, 30);

        // Pass the jsPDF instance to autoTable
        autoTable(doc, { // Pass doc as the first argument
            startY: 100,
            head: [['id', 'product', 'type', 'artwork']],
            body: arr.order.map(item => [item.id, item.product, item.type, item.artwork]),
            styles: {
                font: 'Sana',
                fontStyle: 'normal'
            }
        });
        //Footer from the body
        const footerElement = footerRef.current;
        doc.html(source, {
            callback: function (doc) {
                doc.output();
            },
            x: 10,
            y: 10
        });
        doc.save("a4.pdf");
    };

    render() {
        return (
            <div><button onClick={this.CreatePDF}>Click!</button></div>
        )
    }

}
export default PDF;