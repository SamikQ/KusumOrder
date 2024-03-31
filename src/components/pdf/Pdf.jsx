import jsPDF from "jspdf";
import React from "react";
import autoTable from 'jspdf-autotable';
import './fonts/Sana-normal';
import { Component } from "react";
import logo from '../header/img/logo-header.png'

class PDF extends Component {
    constructor(props) {
        super();
    }

    CreatePDF = async () => {
        const arr = this.props.data;
        console.log(arr);
        const doc = new jsPDF('p', 'px', 'a4');
        doc.addFont('Sana-normal.ttf', 'Sana', 'normal');
        doc.setFont('Sana');
        doc.setFontSize(10);
        doc.addImage(logo, 'png', 10, 10, 16, 23);

        // Pass the jsPDF instance to autoTable
        autoTable(doc, { // Pass doc as the first argument
            startY: 100,
            head: [['id', 'type', 'product', 'artwork', 'quantity', 'delyvery']],
            body: arr.order.map((item, index) => [index + 1, item.type, item.label, item.artwork, item.quantity, item.month]),
            styles: {
                font: 'Sana',
                fontStyle: 'normal'
            }
        });


        const CreateFooter = (doc, yPosition) => {
            const fontSize = 10;
            const lineHeight = fontSize + 2;

            const footerData = [
                {
                    name: "GladPharm LTD",
                    address: "58 Alma-atinska str, Kiev city, Ukraine",
                    contact: "+38(044)-495-82-88",
                    mail: "info@kusum.ua",
                },
                {
                    name: "KusumPharm LLC",
                    address: "54 Skryabina str, Sumy city, Ukraine",
                    contact: "+38(0542)-77-46-10",
                    mail: "plant@kusum.ua",
                },
            ];

            doc.setFontSize(fontSize);
            footerData.forEach(company => {
                doc.text(company.name, 100, yPosition); // Adjust x-position for alignment
                yPosition += lineHeight;
                doc.text(company.address, 100, yPosition);
                yPosition += lineHeight;
                doc.text(company.contact, 100, yPosition);
                yPosition += lineHeight;
                doc.text(company.mail, 100, yPosition);
                yPosition += lineHeight * 2; // Add extra space after contacts
            });
            const textWidth = doc.getTextWidth("All rights reserved 2024 ©.");
            const copyrightY = yPosition + lineHeight; // Adjust for desired position
            doc.text("All rights reserved 2024 ©.", doc.internal.pageSize.getWidth() - textWidth - 100, copyrightY);
        }
        const yPosition = 200; // Adjust for desired footer position
        CreateFooter(doc, yPosition);

        await doc.output();
        doc.save("a4.pdf");
    };

    render() {
        return (
            <div><button onClick={this.CreatePDF} className="fill">Click!</button></div>
        )
    }

}
export default PDF; 