const OrderInform = () => {
  const orderDate = new Date()
    .toISOString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join(".");

  return (
    <div className="order-inform">
      <div className="order__details">
        <div className="order__details-list">
          <span className="order__detail-li">Purchase order No.: 283/24/2024</span>
          <span className="order__detail-li">Dated: {orderDate}</span>
        </div>
        <div className="order__details-list oder__details-list-second">
          <span className="order__receipt-li">Ordered to: "PrintPharm LLC"</span>
          <span className="order__receipt-li">Contact details:</span>
          <span className="order__receipt-li">Name: Oleksiy Pastukhov</span>
          <span className="order__receipt-li">Phone No.: +38098-017-88-71</span>
          <span className="order__receipt-li">Mail: a.b.pastukhov@gmail.com</span>
        </div>
      </div>
      <div className="order__details">
        <div className="order__details-list">
          <span className="order__contract-li">Delivery address: 54, Skryabina str, Sumy city, Ukraine</span>
        </div>
        <div className="order__details-list oder__details-list-second">
          <span className="order__contract-li">Contract No: 07/20-ГФ/1/07</span>
          <span className="order__contract-li">Terms of delivery: DPP; Carton</span>
          <span className="order__contract-li">
            Payment terms: 50% - prepayment / 50% - 30 days credit term
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderInform;
