// rent-management-frontend/src/components/TenantDetails.js
import React from 'react';

const TenantDetails = ({ tenant }) => {
  return (
    <div>
      <h3>{tenant.name}'s Details</h3>
      <p>Rent Status: {tenant.rentStatus}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default TenantDetails;
