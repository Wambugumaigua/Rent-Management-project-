import React from 'react';

const TenantList = ({ tenants }) => {
  return (
    <div>
      <h2>Tenant List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Water Bill</th>
            <th>WiFi Bill</th>
            <th>Rent</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map((tenant) => (
            <tr key={tenant.id}>
              <td>{tenant.name}</td>
              <td>{tenant.waterBill}</td>
              <td>{tenant.wifiBill}</td>
              <td>{tenant.rentAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TenantList;
