import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import OrderList from "../order-list/Order-list";


export default function PDF({ selectedData }) {
    const pdfRef = useRef();
    const downloadPDF = () => {
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

            // const itemsPerPage = 10; // Вкажіть кількість елементів на сторінці
            // const pages = [];
            // for (let i = 0; i < items.length; i += itemsPerPage) {
            //     pages.push(items.slice(i, i + itemsPerPage));
            // }

            // pages.forEach((page, index) => {
            //     pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            //     if (index < pages.length - 1) {
            //         pdf.addPage();
            //     }
            // });
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('order.pdf');
        });


    }
    return (
        <>
            <div ref={pdfRef}>
                {selectedData}
            </div>
            <div>
                <button onClick={downloadPDF}>Створити</button>
            </div>
        </>
    )
}

