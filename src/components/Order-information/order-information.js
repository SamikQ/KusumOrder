const OrderInform = () => {
  const orderDate = new Date().toISOString().slice(0,10).split('-').reverse().join('.');

  return (
    <div className="order-inform">
      <ul className="order-inform__details details">
        <li className="details-number">Purchase order No.: 283/24/2024</li>
        <li className="details-date">Dated: {orderDate}</li>
      </ul>
      <ul className="order-inform__receipt receipt">
        <li className="receipt-li">Ordered to: "PrintPharm LLC"</li>
        <li className="receipt-li">Contact details:</li>
        <li className="receipt-li">Name: Oleksiy Pastukhov</li>
        <li className="receipt-li">Phone No.: +38098-017-88-71</li>
        <li className="receipt-li">Mail: a.b.pastukhov@gmail.com</li>
      </ul>
      <div className="order-inform__delivery-address">
        Delivery address: 54, Skryabina str, Sumy city, Ukraine
      </div>
      <ul className="order-inform__terms terms">
        <li className="terms-li">Contract No: 07/20-ГФ/1/07</li>
        <li className="terms-li">Terms of delivery: DPP; Carton</li>
        <li className="terms-li">Payment terms: 50% - prepayment / 50% - 30 days credit term</li>
      </ul>
    </div>
  );
};

export default OrderInform;
