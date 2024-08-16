import React from 'react';

const CompanyList = ({ companies, onApply, appliedCompanies }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 text-left">Company Name</th>
            <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 text-left">City</th>
            <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 text-left">Type & Rating</th>
            <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 text-left">Route</th>
            <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4 text-gray-700">{company.org_name}</td>
              <td className="py-2 px-4 text-gray-700">{company.town.City}</td>
              <td className="py-2 px-4 text-gray-700">{company.type_and_rating}</td>
              <td className="py-2 px-4 text-gray-700">{company.route}</td>
              <td className="py-2 px-4">
                {appliedCompanies.some(applied => applied.org_name === company.org_name) ? (
                  <span className="text-green-500 font-bold">Applied</span>
                ) : (
                  <button
                    onClick={() => onApply(company)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Apply
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
