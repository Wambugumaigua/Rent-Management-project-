import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import TenantList from './components/TenantList';
import BillForm from './components/BillForm';
import TenantDetails from './components/TenantDetails';
import Footer from './components/Footer';

const App = () => {
  // State variables
  const [tenants, setTenants] = useState([]);

  // Fetch tenant data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/tenants');
        setTenants(response.data);
      } catch (error) {
        console.error('Error fetching tenant data:', error);
      }
    };

    fetchData();
  }, []);

  // Add bill
  const addBill = async (billData) => {
    try {
      await axios.post('/api/bills', billData);
      // Update tenant rent status or any other relevant data
      // Example: setTenants(updatedTenants);
    } catch (error) {
      console.error('Error posting bill:', error);
    }
  };

  return (
    <div className="app">
      {<Header /> }
      <main>
        <TenantList tenants={tenants} />
        <BillForm onSubmit={addBill} />
        {tenants.map((tenant) => (
          <TenantDetails key={tenant.id} tenant={tenant} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
