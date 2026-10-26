import React, { useContext, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { TokenDataContext } from './TokenContext';


//Resolved Cases
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


//Assigned Cases
const cases1 = [
  {
    id1: "FIR-2026-00222",
    date1: "28 Mar 2026",
    priority1: "High",
    status1: "In Progress",
  },
  {
    id1: "FIR-2026-00225",
    date1: "30 Mar 2026",
    priority1: "Medium",
    status1: "In Progress",
  },
  {
    id1: "FIR-2026-00228",
    date1: "01 Apr 2026",
    priority1: "Urgent",
    status1: "Ongoing",
  },
  {
    id1: "FIR-2026-00230",
    date1: "02 Apr 2026",
    priority1: "Low",
    status1: "Pending",
  },
];


const PriorityBadge = ({ priority }) => {
  const styles = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-blue-100 text-blue-600",
    Urgent: "bg-pink-100 text-pink-600",
    Low: "bg-gray-200 text-gray-700",
  };

  return (
    <span
      className={`px-4 py-1 rounded-full text-sm font-medium transition duration-300 hover:scale-105 ${styles[priority]}`}
    >
      {priority}
    </span>
  );
};

const StatusBadge1 = ({ status }) => {
  const styles = {
    "In Progress": "bg-orange-100 text-orange-600",
    Ongoing: "bg-orange-100 text-orange-600",
    Pending: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`px-4 py-1 rounded-full text-sm font-medium transition duration-300 hover:scale-105 ${styles[status]}`}
    >
      {status}
    </span>
  );
};





//Current Cases
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



policeFirst = () => {
  
  const [token,setToken]=useContext(TokenDataContext)

  const [username, setUsername] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')

  const getUser=async()=>{
    let link = "http://localhost:8080/user/get-details"
    const response=await fetch(link,{
      method: "GET",
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json"
      }
    });
    const result=await response.json();
    setUsername(result.name)
    setMobile(result.mobile)
    setEmail(result.email)
    console.log(result)
  }
  useEffect(()=>{
    getUser()
  },[])

  return (
    <div>
        <div className="bg-gray-100 min-h-fit flex items-start justify-center p-8">
      <div className="bg-white w-full max-w-7xl rounded-2xl shadow-md p-6 flex justify-between items-center">

        {/* Left Section */}
        <div className="flex items-center gap-6">

          {/* Image */}
          <img
            src="https://i.pinimg.com/736x/eb/36/0e/eb360ed390888326f33e324a706a698d.jpg"   // replace with your image
            alt="Inspector"
            className="w-28 h-28 rounded-xl object-cover border-4 border-orange-400"
          />

          {/* Details */}
          <div>
            <h2 className="text-3xl font-semibold text-black">
              Inspector {username}
            </h2>

            <p className="text-orange-500 font-medium mt-1">
              Senior Inspector
            </p>

            <div className="flex gap-12 mt-4 text-gray-700 text-sm">

              <div>
                <p className="text-gray-400">Station</p>
                <p className="font-medium">Mumbai Central Police Station</p>
              </div>

              <div>
                <p className="text-gray-400">Contact</p>
                <p className="font-medium">{mobile}</p>
              </div>

              <div>
                <p className="text-gray-400">Email</p>
                <p className="font-medium">{email}</p>
              </div>

            </div>
          </div>
        </div>

        {/* Badge ID */}
        <div className="bg-orange-50 px-6 py-3 rounded-xl text-center">
          <p className="text-sm text-gray-500">Badge ID</p>
          <p className="font-semibold text-lg">MH-01-4523</p>
        </div>

      </div>
    </div>

<div className="bg-gray-100  p-9">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 text-xl font-semibold">
          Current Cases
        </div>

        {/* Search & Filter */}
        <div className="flex gap-4 p-6 border-b">
          <input
            type="text"
            placeholder="Search cases..."
            className="flex-1 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button className="border px-6 py-2 rounded-lg hover:bg-gray-50">
            Filter
          </button>
        </div>

        {/* Table */}
        <div className="px-6 pb-6">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="text-gray-500 text-sm">
                <th>Case ID</th>
                <th>Complainant Name</th>
                <th>Crime Type</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="text-gray-700  ">
              {cases.map((item, index) => (
                <tr key={index} className="bg-white shadow-sm transition duration-300 hover:bg-orange-50 hover:shadow-md">
                  <td className="py-3">{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.crime}</td>
                  <td>{item.date}</td>
                  <td>
                    <StatusBadge status={item.status} />
                  </td>
                  <td>
                    <button className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition duration-300 hover:bg-orange-600 hover:scale-105 active:scale-95">
                      <Link to={'/UpdateComplaint'}> ✏ Update</Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-sm text-gray-500 mt-4">Showing 4 cases</p>
        </div>
      </div>
    </div>




 <div className="bg-gray-100  p-8">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 text-xl font-semibold rounded-t-2xl">
          Assigned Cases
        </div>

        {/* Search & Filter */}
        <div className="flex gap-4 p-6 border-b">
          <input
            type="text"
            placeholder="Search cases..."
            className="flex-1 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button className="border px-6 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
            Filter
          </button>
        </div>

        {/* Table */}
        <div className="px-6 pb-6">
          <table className="w-full text-left border-separate border-spacing-y-3">
            <thead>
              <tr className="text-gray-500 text-sm">
                <th>Case ID</th>
                <th>Assigned Date</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {cases1.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white rounded-lg transition duration-300 hover:bg-blue-50 hover:shadow-md"
                >
                  <td className="py-4">{item.id1}</td>
                  <td>{item.date1}</td>
                  <td>
                    <PriorityBadge priority={item.priority1} />
                  </td>
                  <td>
                    <StatusBadge1 status={item.status1} />
                  </td>
                  <td>
                    <button className="bg-blue-500 text-white px-4 py-1.5 rounded-lg transition duration-300 hover:bg-blue-600 hover:scale-105 active:scale-95">
                      <Link to={'/UpdateComplaint'}> ✏ Update</Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-sm text-gray-500 mt-4">
            Showing {cases.length} cases
          </p>
        </div>
      </div>
    </div>

    


<div className="bg-gray-100  p-8">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 text-xl font-semibold">
          Resolved Cases
        </div>

        {/* Search & Filter */}
        <div className="flex gap-4 p-6 border-b">
          <input
            type="text"
            placeholder="Search cases..."
            className="flex-1 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <button className="border px-6 py-2 rounded-lg hover:bg-gray-100 transition">
            Filter
          </button>
        </div>

        {/* Table */}
        <div className="px-6 pb-6">
          <table className="w-full text-left border-separate border-spacing-y-3">
            <thead>
              <tr className="text-gray-500 text-sm">
                <th>Case ID</th>
                <th>Resolution Date</th>
                <th>Outcome</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {cases3.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white transition duration-300 hover:bg-green-50 hover:shadow-md rounded-lg"
                >
                  <td className="py-4">{item.id}</td>
                  <td>{item.date}</td>
                  <td>{item.outcome}</td>
                  <td>
                    <StatusBadge status={item.status} />
                  </td>
                  <td>
                    <button className="bg-green-600 text-white px-4 py-1.5 rounded-lg transition duration-300 hover:bg-green-700 hover:scale-105 active:scale-95">
                     <Link to={'/ViewComplaint'}> 👁 View Details</Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-sm text-gray-500 mt-4">
            Showing {cases.length} cases
          </p>
        </div>
      </div>
    </div>





    </div>
  )
}

export default 
policeFirst