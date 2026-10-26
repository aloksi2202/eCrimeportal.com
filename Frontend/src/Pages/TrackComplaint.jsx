import React, { useState } from "react";
import { 
  HiOutlineCheck, 
  HiOutlineClock, 
  HiOutlineExclamationTriangle 
} from "react-icons/hi2";

// --- Sub-components ---
function Detail({ label, value }) {
  return (
    <div className="group transition">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition">
        {value}
      </p>
    </div>
  );
}

// --- Main Component ---
const TrackComplaint = () => {
  // Safe fallback for sessionStorage
  const [complaint, setComplaint] = useState(
    JSON.parse(sessionStorage.getItem("complaint")) || {
      complaintId: "CMP-0000-0000",
      date: "Oct 24, 2026",
      category: "Financial Fraud",
      status: "REGISTERED",
      description: "Sample description of the cybercrime incident goes here.",
      assignedOfficer: null
    }
  );

  const steps = [
    { id: 1, title: 'Complaint Submitted', status: 'REGISTERED' },
    { id: 2, title: 'Under Review', status: 'REGISTERED' },
    { id: 3, title: 'Investigation', status: 'current', label: 'IN_PROCESS' },
    { id: 4, title: 'Action Taken', status: 'ACTION_TAKEN' },
    { id: 5, title: 'Closed / Resolved', status: 'SOLVED' },
  ];

  const officer = () => {
    if (!complaint.assignedOfficer) {
      return "----------";
    } else {
      return complaint.assignedOfficer;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 gap-12 font-sans">
      
      {/* Top Details Card */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10 transition duration-300 hover:shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Complaint Details
          </h1>
          <span className="px-4 py-2 text-sm font-bold rounded-full bg-blue-50 text-blue-700">
            Under Investigation
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-y-10 gap-x-20 text-gray-700">
          <div className="space-y-8">
            <Detail label="Complaint ID" value={complaint.complaintId} />
            <Detail label="Date Submitted" value={complaint.date} />
            <Detail label="Assigned Officer" value={officer()} />
          </div>
          <div className="space-y-8">
            <Detail label="Complaint Type" value={complaint.category} />
            <Detail label="Current Status" value={complaint.status} />
            <Detail label="Police Station" value="Cyber Crime Cell, Delhi" />
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-gray-500 font-medium text-sm mb-3">Description</p>
          <p className="text-gray-800 leading-relaxed bg-gray-50 p-6 rounded-xl border border-gray-100 transition hover:bg-blue-50/50 hover:border-blue-100">
            {complaint.description}
          </p>
        </div>
      </div>

      {/* Bottom Timeline Card */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Complaint Progress
        </h2>

        {/* Timeline Container - Zero Absolute/Relative positioning used */}
        <div className="flex flex-col">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            const isCompleted = step.status === complaint.status;
            const isCurrent = step.status === 'current';
            const isPending = step.status === 'pending';

            // Determine line color (blue if this step is done, gray if pending)
            const lineColor = isCompleted ? 'bg-blue-600' : 'bg-gray-200';

            return (
              <div key={step.id} className="flex group cursor-pointer">
                
                {/* Left Column: Icon and Dynamic Line */}
                <div className="flex flex-col items-center mr-6">
                  
                  {/* Status Circle */}
                  <div 
                    className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                      isCompleted ? 'bg-[#10b981] text-white' : 
                      isCurrent ? 'bg-blue-600 text-white' : 
                      'bg-white border-2 border-gray-200 text-gray-400 group-hover:border-gray-300'
                    }`}
                  >
                    {/* Using React Icons here */}
                    {isCompleted && <HiOutlineCheck className="w-6 h-6 stroke-2" />}
                    {isCurrent && <HiOutlineClock className="w-6 h-6 stroke-2" />}
                    {isPending && <HiOutlineExclamationTriangle className="w-5 h-5 stroke-2" />}
                  </div>

                  {/* Vertical Connecting Line */}
                  {/* flex-1 automatically stretches this line to fill the remaining height of the text column beside it */}
                  {!isLast && (
                    <div className={`w-0.5 flex-1 my-2 rounded-full transition-colors ${lineColor}`}></div>
                  )}

                </div>

                {/* Right Column: Text Content */}
                <div className="flex-1 pb-10 pt-1.5 transition-transform duration-200 group-hover:translate-x-1">
                  <p className={`text-base font-bold ${isPending ? 'text-gray-400' : 'text-gray-900'}`}>
                    {step.title}
                  </p>
                  
                  {step.date && (
                    <p className="mt-1 text-sm text-gray-500 font-medium">
                      {step.date}
                    </p>
                  )}
                  
                  {step.label && (
                    <p className="mt-1.5 text-sm font-bold text-blue-600 bg-blue-50 inline-block px-2.5 py-0.5 rounded-md">
                      {step.label}
                    </p>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default TrackComplaint;