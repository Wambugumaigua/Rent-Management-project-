import React, { useState } from 'react';
import axios from 'axios';

const RentPaymentForm = () => {
  const [tenantName, setTenantName] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');

  const handleTenantNameChange = (e) => {
    setTenantName(e.target.value);
  };

  const handleHouseNumberChange = (e) => {
    setHouseNumber(e.target.value);
  };

  const handlePaymentAmountChange = (e) => {
    setPaymentAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make POST request to backend API endpoint
      await axios.post('/api/rent-payments', {
        tenantName,
        houseNumber,
        paymentAmount
      });

      // Clear form fields after successful submission
      setTenantName('');
      setHouseNumber('');
      setPaymentAmount('');

      // Optionally, display a success message or redirect the user
      alert('Rent payment information submitted successfully!');
    } catch (error) {
      // Handle error, display error message to user, etc.
      console.error('Error submitting rent payment:', error);
      alert('An error occurred while submitting rent payment. Please try again.');
    }
  };

  return (
    <div>
      <h2>Record Rent Payment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tenantName">Tenant Name:</label>
        <input
          type="text"
          id="tenantName"
          value={tenantName}
          onChange={handleTenantNameChange}
          required
        />

        <label htmlFor="houseNumber">House Number:</label>
        <input
          type="text"
          id="houseNumber"
          value={houseNumber}
          onChange={handleHouseNumberChange}
          required
        />

        <label htmlFor="paymentAmount">Payment Amount:</label>
        <input
          type="number"
          id="paymentAmount"
          value={paymentAmount}
          onChange={handlePaymentAmountChange}
          required
        />

        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default RentPaymentForm;
