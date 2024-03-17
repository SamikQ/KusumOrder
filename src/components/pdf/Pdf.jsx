import React, { useState } from "react";
import * as XLSX from "xlsx";
import Footer from '../footer/Footer';

export default function Excel(props) {
    const [isGeneratingExcel, setIsGeneratingExcel] = useState(false);

    const downloadExcel = async () => {
        setIsGeneratingExcel(true);

        try {
            const { selectedData } = props;
            const ws = XLSX.utils.json_to_sheet(selectedData);

            // Adding header
            XLSX.utils.sheet_add_aoa(ws, [
                ['Header 1', 'Header 2', 'Header 3', 'Header 4'],
            ], { origin: -1 });

            // Adding footer
            const footerData = [['footer', 'Footer 2', 'Footer 3', 'Footer 4']];
            XLSX.utils.sheet_add_aoa(ws, footerData, { skipHeader: true, origin: XLSX.utils.decode_range(ws['!ref']).e.r + 2 });

            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Order List");
            XLSX.writeFile(wb, "order.xlsx");
        } catch (error) {
            console.error('Помилка генерації Excel:', error);
        } finally {
            setIsGeneratingExcel(false);
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
                        {selectedData.map((item, index) => (
                            <tr className="list-group-table" key={item.id}>
                                <td className="list-group-item">{index + 1}</td>
                                <td className="list-group-product">
                                    {item.product}
                                </td>
                                <td className="list-group-item">{item.type}</td>
                                <td className="list-group-item">{item.artwork}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Footer />
            </div>
            <div>
                <button onClick={downloadExcel} disabled={isGeneratingExcel}>
                    {isGeneratingExcel ? 'Генерується Excel...' : 'Завантажити Excel'}
                </button>
            </div>
        </>
    )
}
