// rent-management-frontend/src/components/TenantList.js
import React from 'react';

const TenantList = ({ tenants }) => {
  return (
    <div>
      <h2>Tenant List</h2>
      <ul>
        {tenants.map((tenant) => (
          <li key={tenant.id}>{tenant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TenantList;
