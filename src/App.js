import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyList from './components/CompanyList';
import PaginationControls from './components/PaginationControls';
import AppliedList from './components/AppliedList';
import sponsorData from './data/tire2jobsData.json';
import { addAppliedCompany, getAppliedCompanies, deleteAppliedCompany } from './services/db';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import AboutMe from './components/AboutMe'; 

const App = () => {
  const [appliedCompanies, setAppliedCompanies] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [citySearchTerm, setCitySearchTerm] = React.useState('');
  const [selectedCity, setSelectedCity] = React.useState('');
  const itemsPerPage = 10;

  React.useEffect(() => {
    const fetchAppliedCompanies = async () => {
      const companies = await getAppliedCompanies();
      setAppliedCompanies(companies);
    };
    fetchAppliedCompanies();
  }, []);

  const filteredCompanies = sponsorData.filter(company =>
    company.org_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCity === '' || company.town.City === selectedCity)
  );

  const cities = [...new Set(sponsorData.map(company => company.town.City))]
    .filter(city => city.toLowerCase().includes(citySearchTerm.toLowerCase()));

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  const indexOfLastCompany = currentPage * itemsPerPage;
  const indexOfFirstCompany = indexOfLastCompany - itemsPerPage;
  const currentCompanies = filteredCompanies.slice(indexOfFirstCompany, indexOfLastCompany);

  const handleApply = async (company) => {
    if (!appliedCompanies.some(applied => applied.org_name === company.org_name)) {
      const updatedAppliedCompanies = [...appliedCompanies, company];
      setAppliedCompanies(updatedAppliedCompanies);
      await addAppliedCompany(company);
    }
  };

  const handleRemove = async (orgName) => {
    const updatedAppliedCompanies = appliedCompanies.filter(company => company.org_name !== orgName);
    setAppliedCompanies(updatedAppliedCompanies);
    await deleteAppliedCompany(orgName);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCitySearchChange = (e) => {
    setCitySearchTerm(e.target.value);
    setSelectedCity('');
    setCurrentPage(1);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setCitySearchTerm('');
    setCurrentPage(1);
  };

  return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={
              <>
                <div className="max-w-6xl mx-auto">
                  <div className="flex space-x-4 mb-6">
                    <input
                      type="text"
                      placeholder="Search companies..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Search cities..."
                      value={citySearchTerm}
                      onChange={handleCitySearchChange}
                      className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                      value={selectedCity}
                      onChange={handleCityChange}
                      className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">All Cities</option>
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                  <CompanyList companies={currentCompanies} onApply={handleApply} appliedCompanies={appliedCompanies} />
                  <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                  <AppliedList appliedCompanies={appliedCompanies} onRemove={handleRemove} />
                </div>
              </>
            } />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </main>
        <Footer />
      </div>

  );
};

export default App;
