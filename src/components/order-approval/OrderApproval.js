const OrderApproval = () => {
  return (
    <table className="order__approval">
      <thead className="order__approval-header">
        <tr>
          <th className="order__approval-item">Prepared by:</th>
          <th className="order__approval-item">Checked by:</th>
          <th className="order__approval-item">Approved by:</th>
        </tr>
      </thead>
    </table>
  );
};

export default OrderApproval;
