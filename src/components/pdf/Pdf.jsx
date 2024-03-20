import React, { useState } from "react";
import jsPDF from "jspdf";

export default function PDF(props) {
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

    const downloadPDF = async () => {
        setIsGeneratingPDF(true);

        try {
            const { selectedData } = props;
            const pdf = new jsPDF();
            let y = 15;
            let currentPage = 1;

            const addPageWithFooter = () => {
                pdf.addPage();
                pdf.text(`Page ${currentPage}`, 15, 280);
                currentPage++;
                y = 15; // Reset y position for the new page
            };

            selectedData.forEach((item, index) => {
                if (y > 260) { // Check if text exceeds the bottom margin of the page
                    addPageWithFooter();
                }

                pdf.text(`#${index + 1}`, 15, y);
                pdf.text(`Product: ${item.product}`, 30, y + 5, { encoding: 'UTF-8' });
                pdf.text(`Type: ${item.type}`, 30, y + 10, { encoding: 'UTF-8' });
                pdf.text(`Artwork: ${item.artwork}`, 30, y + 15, { encoding: 'UTF-8' });
                y += 25;
            });

            // Add footer to the last page
            pdf.text(`Page ${currentPage}`, 15, 280);

            pdf.save(`order_page${currentPage}.pdf`);
        } catch (error) {
            console.error('Помилка генерації PDF:', error);
        } finally {
            setIsGeneratingPDF(false);
        }
    };

    const { selectedData } = props;

    return (
        <>
            <div>
                <table className="order-list">
                    <thead className="order-list-header">
                        <tr>
                            <th className="list-group-item-label">№</th>
                            <th className="list-group-item-label">Product</th>
                            <th className="list-group-item-type">Type</th>
                            <th className="list-group-item-artwork">Artwork</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedData && selectedData.map((item, index) => (
                            <tr className="list-group-table" key={item.id}>
                                <td className="list-group-item">{index + 1}</td>
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
            <div>
                <button onClick={downloadPDF} disabled={isGeneratingPDF}>
                    {isGeneratingPDF ? 'Генерується PDF...' : 'Завантажити PDF'}
                </button>
            </div>
        </>
    )
}
