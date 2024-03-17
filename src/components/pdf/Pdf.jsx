import React, { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function PDF(props) {
    const [showPDFContent, setShowPDFContent] = useState(false);
    const pdfRef = useRef();
    const downloadPDF = () => {
        setShowPDFContent(true);
        setShowPDFContent(false);
        const input = pdfRef.current;
        html2canvas(input, {
            scale: 3,
            letterRendering: true,
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/webp', 1.0);
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('order.pdf');
        });
    }

    const { selectedData } = props;
    console.log(selectedData.length);
    return (
        <>
            {showPDFContent && (
                <div ref={pdfRef}>
                    <table className="order-list">
                        <thead className="order-list-header">
                            <tr>
                                <th className="list-group-item-label">№</th>
                                <th className="list-group-item-label">Product</th>
                                <th className="list-group-item-artwork">Artwork</th>
                                <th className="list-group-item-quantity">Quantity, pcs</th>
                                <th className="list-group-item-delivery">Delivery date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedData.map((item, index) => (
                                <tr className="list-group-table" key={item.id}>
                                    <td className="list-group-item">{index+1}</td>
                                    <td className="list-group-product">
                                        {item.type}: {item.product}
                                    </td>
                                    <td className="list-group-item">{item.artwork}</td>
                                    <td className="list-group-item">{item.apr2024}</td>
                                    <td className="list-group-item">{item.deliveryBy}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <div>
                <button onClick={downloadPDF}>Створити</button>
            </div>
        </>
    )
}