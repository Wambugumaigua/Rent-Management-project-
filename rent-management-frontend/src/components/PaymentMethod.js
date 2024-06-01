import React, { useState } from 'react';

const PaymentMethod = ({ onSubmit, paymentStatus }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [payerName, setPayerName] = useState('');
  const [payerHouseNumber, setPayerHouseNumber] = useState('');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePayerNameChange = (e) => {
    setPayerName(e.target.value);
  };

  const handlePayerHouseNumberChange = (e) => {
    setPayerHouseNumber(e.target.value);
  };

  const handlePay = () => {
    // Implement payment process here
    // You can send payment details (paymentMethod, phoneNumber, amount) to a backend server for processing
    // For now, just log the payment details
    console.log('Payment Method:', paymentMethod);
    console.log('Phone Number:', phoneNumber);
    console.log('Amount:', amount);
    console.log('Payer Name:', payerName);
    console.log('Payer House Number:', payerHouseNumber);

    // Call onSubmit callback to notify the parent component
    onSubmit({
      paymentMethod,
      phoneNumber,
      amount,
      payerName,
      payerHouseNumber
    });

    // Clear input fields after payment
    setPaymentMethod('');
    setPhoneNumber('');
    setAmount('');
    setPayerName('');
    setPayerHouseNumber('');
  };

  return (
    <div className="payment-method-container">
      <h2>Payment Method</h2>
      <label htmlFor="paymentMethod">Payment Method:</label>
      <select id="paymentMethod" name="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange}>
        <option value="">Select Payment Method</option>
        <option value="creditCard">Credit Card</option>
        <option value="debitCard">Debit Card</option>
        <option value="paypal">PayPal</option>
      </select>

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />

      <label htmlFor="amount">Amount:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={amount}
        onChange={handleAmountChange}
      />

      <label htmlFor="payerName">Payer Name:</label>
      <input
        type="text"
        id="payerName"
        name="payerName"
        value={payerName}
        onChange={handlePayerNameChange}
      />

      <label htmlFor="payerHouseNumber">Payer House Number:</label>
      <input
        type="text"
        id="payerHouseNumber"
        name="payerHouseNumber"
        value={payerHouseNumber}
        onChange={handlePayerHouseNumberChange}
      />

      <button type="button" className="button" onClick={handlePay}>Pay Now</button>
      <p>Status: {paymentStatus}</p>
    </div>
  );
};

export default PaymentMethod;
