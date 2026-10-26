import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiFilter, FiEdit2, FiEye, FiMapPin } from 'react-icons/fi';

// --- Static Data ---

// Resolved Cases
const cases3 = [
  {
    id: "FIR-2026-00195",
    date: "20 Mar 2026",
    outcome: "Arrested",
    status: "Closed",
  },
  {
    id: "FIR-2026-00201",
    date: "22 Mar 2026",
    outcome: "Property Recovered",
    status: "Closed",
  },
  {
    id: "FIR-2026-00210",
    date: "25 Mar 2026",
    outcome: "Case Dismissed",
    status: "Resolved",
  },
  {
    id: "FIR-2026-00215",
    date: "27 Mar 2026",
    outcome: "Settled",
    status: "Closed",
  },
];

const StatusBadge2 = ({ status }) => {
  return (
    <span
      className={`px-4 py-1 rounded-full text-sm font-medium transition duration-300 hover:scale-105
      ${
        status === "Closed"
          ? "bg-green-100 text-green-700"
          : "bg-emerald-100 text-emerald-700"
      }`}
    >
      {status}
    </span>
  );
};

// Current Assigned Cases 
const cases = [
  {
    id: "FIR-2026-00134",
    name: "Amit Sharma",
    crime: "Theft",
    date: "02 Apr 2026",
    status: "Pending",
  },
  {
    id: "FIR-2026-00235",
    name: "Priya Patel",
    crime: "Fraud",
    date: "03 Apr 2026",
    status: "In Progress",
  },
  {
    id: "FIR-2026-00236",
    name: "Rahul Verma",
    crime: "Assault",
    date: "04 Apr 2026",
    status: "In Progress",
  },
  {
    id: "FIR-2026-00237",
    name: "Sunita Desai",
    crime: "Burglary",
    date: "05 Apr 2026",
    status: "Pending",
  },
];

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`px-4 py-1 rounded-full text-sm font-medium
      ${
        status === "Pending"
          ? "bg-yellow-100 text-yellow-700"
          : "bg-orange-100 text-orange-700"
      }`}
    >
      {status}
    </span>
  );
};

const Police = () => {
  // --- States for Search Functionality ---
  const [searchAssigned, setSearchAssigned] = useState('');
  const [searchResolved, setSearchResolved] = useState('');

  // --- Filtering Logic ---
  const filteredAssignedCases = cases.filter((item) => {
    const query = searchAssigned.toLowerCase();
    return (
      item.id.toLowerCase().includes(query) ||
      item.name.toLowerCase().includes(query) ||
      item.crime.toLowerCase().includes(query) ||
      item.status.toLowerCase().includes(query)
    );
  });

  const filteredResolvedCases = cases3.filter((item) => {
    const query = searchResolved.toLowerCase();
    return (
      item.id.toLowerCase().includes(query) ||
      item.outcome.toLowerCase().includes(query) ||
      item.status.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      {/* 1. Profile Section */}
      <div className="bg-gray-100 min-h-fit flex items-start justify-center p-8">
        <div className="bg-white w-full max-w-7xl rounded-2xl shadow-md p-6 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            {/* Image */}
            <img
              src="https://i.pinimg.com/736x/eb/36/0e/eb360ed390888326f33e324a706a698d.jpg"   // replace with your image
              alt="Inspector"
              className="w-28 h-28 rounded-xl object-cover border-4 border-orange-400 shrink-0"
            />

            {/* Details */}
            <div>
              <h2 className="text-3xl font-semibold text-black">
                Inspector Rajesh Kumar
              </h2>

              <p className="text-orange-500 font-medium mt-1">
                Senior Inspector
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-8 sm:gap-12 mt-4 text-gray-700 text-sm">
                <div>
                  <p className="text-gray-400">Station</p>
                  <p className="font-medium">Mumbai Central Police Station</p>
                </div>

                <div>
                  <p className="text-gray-400">Contact</p>
                  <p className="font-medium">+91 98765 43210</p>
                </div>

                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="font-medium">rajesh.kumar@police.gov.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Badge ID */}
          <div className="bg-orange-50 px-6 py-3 rounded-xl text-center shrink-0">
            <p className="text-sm text-gray-500">Badge ID</p>
            <p className="font-semibold text-lg">MH-01-4523</p>
          </div>

        </div>
      </div>

      {/* 2. Assigned Cases Section */}
      <div className="bg-gray-100 p-8 pt-0">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-7xl mx-auto">

          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 text-xl font-semibold">
            Assigned Cases
          </div>

          {/* Search & Filter (Flexbox ONLY - No absolute/relative) */}
          <div className="flex flex-col sm:flex-row gap-4 p-6 border-b">
            <div className="flex-1 flex items-center bg-white border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-orange-400 transition-shadow">
              <FiSearch className="text-gray-400 w-5 h-5 shrink-0" />
              <input
                type="text"
                value={searchAssigned}
                onChange={(e) => setSearchAssigned(e.target.value)}
                placeholder="Search by Case ID, Name, Crime, or Status..."
                className="w-full bg-transparent outline-none ml-3 text-gray-700 placeholder-gray-400"
              />
            </div>
            <button className="flex items-center justify-center gap-2 border px-6 py-2 rounded-lg hover:bg-gray-50 text-gray-700 transition">
              <FiFilter /> Filter
            </button>
          </div>

          {/* Table */}
          <div className="px-6 pb-6 overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-4 whitespace-nowrap">
              <thead>
                <tr className="text-gray-500 text-sm">
                  <th className="px-4">Case ID</th>
                  <th className="px-4">Complainant Name</th>
                  <th className="px-4">Crime Type</th>
                  <th className="px-4">Date</th>
                  <th className="px-4">Status</th>
                  <th className="px-4 text-center">Location</th>
                  <th className="px-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                {filteredAssignedCases.length > 0 ? (
                  filteredAssignedCases.map((item, index) => (
                    <tr key={index} className="bg-white shadow-sm transition duration-300 hover:bg-orange-50 hover:shadow-md">
                      <td className="py-3 px-4 font-medium">{item.id}</td>
                      <td className="px-4">{item.name}</td>
                      <td className="px-4">{item.crime}</td>
                      <td className="px-4">{item.date}</td>
                      <td className="px-4">
                        <StatusBadge status={item.status} />
                      </td>
                      
                      {/* Location Button */}
                      <td className="px-4 text-center">
                        <button className="inline-flex items-center justify-center gap-1.5 border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg transition duration-300 hover:bg-gray-50 hover:border-gray-300 active:scale-95 text-sm">
                           <FiMapPin className="text-orange-500 shrink-0" />
                           <Link to={'/PoliceMain/PoliceMap'}>Location</Link>
                        </button>
                      </td>

                      <td className="px-4 text-center">
                        <button className="inline-flex bg-orange-500 text-white px-4 py-1.5 rounded-lg transition duration-300 hover:bg-orange-600 hover:scale-105 active:scale-95">
                          <Link to={'/PoliceMain/UpdateComplaint'} className="flex items-center gap-2">
                            <FiEdit2 /> Update
                          </Link>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    {/* Updated colSpan from 6 to 7 to match new column count */}
                    <td colSpan="7" className="py-8 text-center text-gray-500">
                      No assigned cases found matching "{searchAssigned}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <p className="text-sm text-gray-500 mt-4 border-t pt-4">
              Showing {filteredAssignedCases.length} {filteredAssignedCases.length === 1 ? 'case' : 'cases'}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Resolved Cases Section */}
      <div className="bg-gray-100 p-8 pt-0">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-7xl mx-auto">

          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 text-xl font-semibold">
            Resolved Cases
          </div>

          {/* Search & Filter (Flexbox ONLY - No absolute/relative) */}
          <div className="flex flex-col sm:flex-row gap-4 p-6 border-b">
            <div className="flex-1 flex items-center bg-white border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-green-400 transition-shadow">
              <FiSearch className="text-gray-400 w-5 h-5 shrink-0" />
              <input
                type="text"
                value={searchResolved}
                onChange={(e) => setSearchResolved(e.target.value)}
                placeholder="Search cases by ID, Outcome, or Status..."
                className="w-full bg-transparent outline-none ml-3 text-gray-700 placeholder-gray-400"
              />
            </div>
            <button className="flex items-center justify-center gap-2 border px-6 py-2 rounded-lg hover:bg-gray-50 text-gray-700 transition">
              <FiFilter /> Filter
            </button>
          </div>

          {/* Table */}
          <div className="px-6 pb-6 overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-3 whitespace-nowrap">
              <thead>
                <tr className="text-gray-500 text-sm">
                  <th className="px-4">Case ID</th>
                  <th className="px-4">Resolution Date</th>
                  <th className="px-4">Outcome</th>
                  <th className="px-4">Status</th>
                  <th className="px-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                {filteredResolvedCases.length > 0 ? (
                  filteredResolvedCases.map((item, index) => (
                    <tr
                      key={index}
                      className="bg-white transition duration-300 hover:bg-green-50 hover:shadow-md rounded-lg"
                    >
                      <td className="py-4 px-4 font-medium">{item.id}</td>
                      <td className="px-4">{item.date}</td>
                      <td className="px-4">{item.outcome}</td>
                      <td className="px-4">
                        <StatusBadge2 status={item.status} />
                      </td>
                      <td className="px-4 text-center">
                        <button className="inline-flex bg-green-600 text-white px-4 py-1.5 rounded-lg transition duration-300 hover:bg-green-700 hover:scale-105 active:scale-95">
                          <Link to={'/PoliceMain/ViewComplaint'} className="flex items-center gap-2">
                            <FiEye /> View Details
                          </Link>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-8 text-center text-gray-500">
                      No resolved cases found matching "{searchResolved}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <p className="text-sm text-gray-500 mt-4 border-t pt-4">
              Showing {filteredResolvedCases.length} {filteredResolvedCases.length === 1 ? 'case' : 'cases'}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Police;