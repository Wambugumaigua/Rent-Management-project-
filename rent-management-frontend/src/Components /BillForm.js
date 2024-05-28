// rent-management-frontend/src/components/BillForm.js
import React, { useState } from 'react';

const BillForm = ({ onSubmit }) => {
  const [billData, setBillData] = useState({});

  const handleChange = (e) => {
    setBillData({ ...billData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(billData);
    setBillData({});
  };

  return (
    <div>
      <h2>Add Bill</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={billData.amount || ''}
          onChange={handleChange}
        />
        <button type="submit">Add Bill</button>
      </form>
    </div>
  );
};

export default BillForm;
