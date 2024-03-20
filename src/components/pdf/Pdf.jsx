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