// rent-management-frontend/src/components/BillList.js
import React from 'react';

const BillList = ({ bills }) => {
  return (
    <div>
      <h2>Bills</h2>
      <ul>
        {bills.map((bill) => (
          <li key={bill.id}>{bill.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default BillList;
