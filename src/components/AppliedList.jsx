import React from 'react';

const AppliedList = ({ appliedCompanies, onRemove }) => {
  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Applied Companies</h2>
      {appliedCompanies.length === 0 ? (
        <p className="text-gray-600">No companies applied.</p>
      ) : (
        <ul>
          {appliedCompanies.map((company) => (
            <li key={company.org_name} className="flex justify-between items-center p-2 border-b border-gray-200">
              <span className="font-medium">{company.org_name}</span>
              <button
                onClick={() => onRemove(company.org_name)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppliedList;
