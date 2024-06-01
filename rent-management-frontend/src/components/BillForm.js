import React, { useState, useEffect } from 'react';
import './BillForm.css'; // Import CSS file for styling
import PaymentMethod from './PaymentMethod'; // Import PaymentMethod component
import RentPaymentForm from './RentPaymentForm'; // Import RentPaymentForm component

const BillForm = ({ onSubmit }) => {
  const [billData, setBillData] = useState({ rentAmount: '', waterBill: '', wifiBill: '', garbageBill: '', totalBill: '' });
  const [billsList, setBillsList] = useState([]);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedBillsList = JSON.parse(localStorage.getItem('billsList'));
    if (savedBillsList) {
      setBillsList(savedBillsList);
    }
  }, []);

  // Save data to localStorage when billsList changes
  useEffect(() => {
    localStorage.setItem('billsList', JSON.stringify(billsList));
  }, [billsList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillData({ ...billData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBillsList([...billsList, billData]);
    onSubmit(billData);
    setBillData({ rentAmount: '', waterBill: '', wifiBill: '', garbageBill: '', totalBill: '' });
  };

  const handleDeleteBill = (index) => {
    const updatedBillsList = [...billsList];
    updatedBillsList.splice(index, 1);
    setBillsList(updatedBillsList);
  };

  return (
    <div className="bill-form-container"> {/* Add a class for styling */}
      <h2>Add Bill</h2>
      <form onSubmit={handleSubmit}>
        {/* Bill details inputs */}
        <label htmlFor="rentAmount">Rent Amount:</label>
        <input
          type="text"
          id="rentAmount"
          name="rentAmount"
          value={billData.rentAmount}
          onChange={handleChange}
        />
        <label htmlFor="waterBill">Water Bill:</label>
        <input
          type="text"
          id="waterBill"
          name="waterBill"
          value={billData.waterBill}
          onChange={handleChange}
        />
        <label htmlFor="wifiBill">WiFi Bill:</label>
        <input
          type="text"
          id="wifiBill"
          name="wifiBill"
          value={billData.wifiBill}
          onChange={handleChange}
        />
        <label htmlFor="garbageBill">Garbage Bill:</label>
        <input
          type="text"
          id="garbageBill"
          name="garbageBill"
          value={billData.garbageBill}
          onChange={handleChange}
        />
        <label htmlFor="totalBill">Total Bill:</label>
        <input
          type="text"
          id="totalBill"
          name="totalBill"
          value={billData.totalBill}
          onChange={handleChange}
        />
        {/* Other bill input fields... */}
        <button type="submit" className="button">Submit</button> {/* Apply the button class */}
      </form>

      {/* Render the PaymentMethod component */}
      <PaymentMethod />

      {/* Render the RentPaymentForm component */}
      <RentPaymentForm />

      {/* Display unpaid bills */}
      <div className="bills-list-container">
        <h2>Unpaid Bills List</h2>
        <ul className="bills-list"> {/* Add a class for styling */}
          {billsList.map((bill, index) => (
            <li key={index} className="bill-item"> {/* Add a class for styling */}
              <p>Rent: {bill.rentAmount}</p>
              <p>Garbage: {bill.garbageBill}</p>
              <p>WiFi: {bill.wifiBill}</p>
              <p>Water: {bill.waterBill}</p>
              <p>Total: {bill.totalBill}</p>
              <div className="button-container"> {/* Add a class for styling */}
                <button className="button" onClick={() => handleDeleteBill(index)}>Delete</button> {/* Apply the button class */}
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default BillForm;