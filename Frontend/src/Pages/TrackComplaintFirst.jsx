import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  HiOutlineClipboardDocumentCheck, 
  HiOutlineMagnifyingGlass, 
  HiOutlineQuestionMarkCircle 
} from 'react-icons/hi2';

// --- Main Component ---
const TrackComplaintFirst = () => {
  // State and handlers must be inside the component that renders them
  const navigate = useNavigate();

  const [complaintId, setComplaintId] = useState('');

  const handleTrack = (e) => {
    e.preventDefault();
    if (complaintId) {
      console.log('Tracking Complaint ID:', complaintId, localStorage.getItem("token"));
      // Navigation or API call logic here
    }
  }

  const getComplaint = async () => {
    let link = `http://localhost:8080/user/track-complaint-id/${complaintId}`
    const response = await fetch(link, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json"
      }
    });
    const result = await response.text();
    if (result != "") {
      console.log(result)
      sessionStorage.setItem("complaint", result)
      navigate('/UserMain/TrackComplaint')
    }
    else {
      alert("Enter a proper track no.")
      console.log('iuviv')
    }
  }

  return (
    <div>
      <div className="min-h-screen bg-white flex flex-col font-sans ">

        {/* Top Blue Header Section */}
        <div className="bg-gradient-to-r from-[#0F47DB] via-[#1A56FF] to-[#0F47DB] py-20 px-6 flex flex-col items-center justify-center text-center">

          {/* Icon Container */}
          <div className="bg-white/10 border border-white/20 p-4 rounded-full mb-6 ">
            <HiOutlineClipboardDocumentCheck className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>

          {/* Headings */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Track Your Complaint
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl font-light">
            Enter your complaint ID to check the latest status and progress
          </p>
        </div>

        {/* Bottom White Search Section */}
        <div className="flex-1 bg-white pt-12 px-6 pb-24 flex flex-col items-center">

          <form onSubmit={(e)=>{
            handleTrack(e),
            getComplaint()
          }} className="w-full max-w-3xl space-y-5">

            {/* Input Area */}
            <div className="relative group flex items-center">
              {/* Flexbox natively aligns the icon inside the input wrapper without absolute positioning */}
              <div className="pl-5 pr-2 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors duration-200">
                <HiOutlineMagnifyingGlass className="w-6 h-6" strokeWidth={2} />
              </div>
              <input
                type="text"
                value={complaintId}
                onChange={(e) => setComplaintId(e.target.value)}
                className="block w-full py-4 pr-6 bg-[#F8FAFC] border border-gray-100 rounded-r-xl rounded-l-none text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition-all text-lg shadow-sm hover:border-gray-200"
                placeholder="Enter Complaint ID (e.g., EC2026001234)"
                required
              />
            </div>

            {/* Action Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#E60000] hover:bg-[#CC0000] text-white py-4 rounded-xl font-bold text-lg shadow-sm hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
            >
              <HiOutlineMagnifyingGlass className="w-6 h-6" strokeWidth={2} />
              Track now
            </button>

            {/* Footer Link */}
            <div className="text-center pt-4">
              <span className="text-gray-600">Don't have a Complaint ID? </span>

              <Link to={'/UserMain/Complaint'} className='text-[#0F47DB] hover:text-blue-800 font-medium hover:underline transition-colors duration-200'>Register a new complaint</Link>

            </div>

          </form>
        </div>

        {/* Floating Help Button (Bottom Right) */}
        <button
          className="fixed bottom-6 right-6 bg-[#1A1A1A] hover:bg-black text-gray-300 hover:text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 group z-50"
          title="Help & Support"
        >
          <HiOutlineQuestionMarkCircle className="w-6 h-6" strokeWidth={2} />
        </button>

      </div>
    </div>
  )
}

export default TrackComplaintFirst;