import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import './fonts/Sana-normal';

var examples = {}
window.examples = examples

const arr = [
    {
        "id": 1,
        "product": "Аброл SR капс 75мг",
        "type": "label",
        "artwork": "ALSRC-01"
    },
    {
        "id": 2,
        "product": "Аброл сироп 15мг/5мл",
        "type": "carton",
        "artwork": "AL-02"
    }];


const CreatePDF = () => {
    const doc = new jsPDF();
    doc.addFont('Sana-normal.ttf', 'Sana', 'normal');
    doc.setFont('Sana');
    doc.setFontSize(18);
    doc.text('With content', 40, 30);

    // Pass the jsPDF instance to autoTable
    autoTable(doc, { // Pass doc as the first argument
        startY: 100,
        head: [['id', 'product', 'type', 'artwork']],
        body: arr.map(item => [item.id, item.product, item.type, item.artwork]),
        styles: {
            font: 'Sana',
            fontStyle: 'normal'
        }
    });

    doc.save("a4.pdf");

};

export default CreatePDF;


// export default function PDF({ selectedData }) {
//     const pdfRef = useRef();
//     const downloadPDF = () => {
//         const input = pdfRef.current;
//         html2canvas(input, {
//             scale: 3,
//             letterRendering: true,
//         }).then((canvas) => {
//             const imgData = canvas.toDataURL('image/webp', 1.0);
//             const pdf = new jsPDF('p', 'mm', 'a4', true);
//             const pdfWidth = pdf.internal.pageSize.getWidth();
//             const pdfHeight = pdf.internal.pageSize.getHeight();
//             const imgWidth = canvas.width;
//             const imgHeight = canvas.height;
//             const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
//             const imgX = (pdfWidth - imgWidth * ratio) / 2;
//             const imgY = 30;
//             pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
//             pdf.save('order.pdf');
//         });
//     }
//     return (
//         <>
//             <div ref={pdfRef}>
//                 {selectedData}
//             </div>
//             <div>
//                 <button onClick={downloadPDF}>Створити</button>
//             </div>
//         </>
//     )
// }




// import React, { useState } from "react";
// import * as XLSX from "xlsx";
// import ReactDOMServer, { renderToString } from "react-dom/server";
// import Footer from '../footer/Footer';

// export default function Excel(props) {
//     const [isGeneratingExcel, setIsGeneratingExcel] = useState(false);

//     const downloadExcel = async () => {
//         setIsGeneratingExcel(true);

//         try {
//             const { selectedData } = props;
//             const ws = XLSX.utils.json_to_sheet(selectedData);

//             // Додати заголовок
//             XLSX.utils.sheet_add_aoa(ws, [
//                 ['Заголовок 1', 'Заголовок 2', 'Заголовок 3', 'Заголовок 4'],
//             ], { origin: -1 });

//             // Отримання контенту футера
//             const footerContent = <Footer />;
//             const footerHTML = renderToString(footerContent);

//             // Додати футер
//             const lastRow = XLSX.utils.decode_range(ws['!ref']).e.r;
//             const footerPosition = lastRow + 4;
//             XLSX.utils.sheet_add_aoa(ws, [footerHTML.split('\n')], {
//                 origin: footerPosition,
//                 skipHeader: true
//             });

//             const wb = XLSX.utils.book_new();
//             XLSX.utils.book_append_sheet(wb, ws, "Order List");
//             XLSX.writeFile(wb, "order.xlsx");
//         } catch (error) {
//             console.error('Помилка генерації Excel:', error);
//         } finally {
//             setIsGeneratingExcel(false);
//         }
//     };

//     const { selectedData } = props;

//     return (
//         <>
//             <div>
//                 <table className="order-list">
//                     <thead className="order-list-header">
//                         <tr>
//                             <th className="list-group-item-label">№</th>
//                             <th className="list-group-item-label">Product</th>
//                             <th className="list-group-item-type">Type</th>
//                             <th className="list-group-item-artwork">Artwork</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {selectedData.map((item, index) => (
//                             <tr className="list-group-table" key={item.id}>
//                                 <td className="list-group-item">{index + 1}</td>
//                                 <td className="list-group-product">
//                                     {item.product}
//                                 </td>
//                                 <td className="list-group-item">{item.type}</td>
//                                 <td className="list-group-item">{item.artwork}</td>
//                             </tr>)
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//             <div>
//                 <button onClick={downloadExcel} disabled={isGeneratingExcel}>
//                     {isGeneratingExcel ? 'Генерується Excel...' : 'Завантажити Excel'}
//                 </button>
//             </div>
//         </>
//     )
// }