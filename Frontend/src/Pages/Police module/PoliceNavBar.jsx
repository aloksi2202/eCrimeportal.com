import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Icons = {


  User: () => (
    <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  Logout: () => (
    <svg className="w-5 h-5 text-[#FE982A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
    </svg>
  )
};
const PoliceNavBar = () => {
  const navigate=useNavigate();
  return (
    <div>
     <header className="bg-[#FE982A] w-full px-6 py-4 flex items-center justify-between shadow-md font-sans">
      
      {/* Left Section: Logo & Brand Name */}
      <div className="flex items-center gap-3 cursor-pointer group">
        
        <span className="text-2xl  text-white tracking-wide font-bold">
          eCrimePortal 
        </span>
      </div>

      <div className="flex items-center gap-6">
    
       

   
        <button className="flex items-center justify-center group focus:outline-none">
         <Link to={'/PoliceMain/PoliceProfile'}> <Icons.User /></Link>
        </button>

     
        <button onClick={()=>{
          sessionStorage.clear()
          navigate('/LogIn')
        }} className="flex items-center gap-2 bg-white px-5 py-2 rounded-lg shadow-sm hover:shadow hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-200 active:scale-95 ml-2">
          <Icons.Logout />
          <span className="text-[#FE982A] font-semibold text-sm">
            Logout
          </span>
        </button>
        
      </div>
    </header>
    </div>
  )
}

export default PoliceNavBar