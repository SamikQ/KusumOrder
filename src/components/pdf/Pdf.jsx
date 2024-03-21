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

    CreatePDF = async () => {
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
        const footerElement = `<footer id="footer" ref={footerRef}>
            <div className="footer-contacts">HELLO!</div>
            <div className="footer-copyrights">All rights reserved 2024 &copy;.</div>
        </footer>`;

        await doc.html(footerElement, {
            callback: function () {
                doc.output();
            },
            'x': 15,
            'y': 15,
            'width': 200,
        });

        doc.save("a4.pdf");
    };

    render() {
        return (
            <div><button onClick={this.CreatePDF} className="fill">Click!</button></div>
        )
    }

}
export default PDF;