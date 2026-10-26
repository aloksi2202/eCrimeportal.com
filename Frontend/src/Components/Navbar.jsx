import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Icons = {


 
  Logout: () => (
    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
    </svg>
  )
};

const Navbar = () => {

  const navigate=useNavigate();


  return (
    <div className='bg-[#0D1525] bg-blend-darken text-teal-50 flex justify-between px-5 py-6   fixed w-screen top-0 '>
      <div className="text-3xl font-bold">
        <h1 className="flex"><p className="text-blue-600">eCrime</p> Portal</h1>
      </div>
      <div className="font-bold flex justify-center gap-9 text-2xl ">
        <Link to={"/UserMain/"} className="hover:text-blue-600 duration-200 transition-colors">Home</Link>
        <Link to={"/UserMain/About"} className="hover:text-blue-600 duration-200 transition-colors">About</Link>

        <div className="relative group">
          <button className="text-white hover:text-blue-600 duration-200 transition-colors">Services</button>

          <ul className="absolute hidden group-hover:block mt-1 bg-white text-black w-50 text-xl shadow-md hover:text-blue-600 duration-200 transition-colors">
            <li className="p-2 hover:bg-gray-200">
              <Link to={"/UserMain/Complaint"}>Register Complaint</Link>
            </li>
            <li className="p-2 border-t-1 hover:bg-gray-200">
              <Link to={'/UserMain/TrackComplaintFirst'}>Track Complaint</Link>
            </li>
           
          </ul>
        </div>
        <Link to={"/UserMain/ContactUs"} className="hover:text-blue-600 duration-200 transition-colors">Contact Us</Link>
        <button onClick={()=>{
          sessionStorage.clear()
          navigate('/LogIn')
        }} className="flex items-center gap-2 bg-blue-500 px-5 py-2 rounded-lg shadow-sm hover:shadow hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-200 active:scale-95 ml-2">
          <Icons.Logout />
          <span className="text-white font-semibold text-sm">
           Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
