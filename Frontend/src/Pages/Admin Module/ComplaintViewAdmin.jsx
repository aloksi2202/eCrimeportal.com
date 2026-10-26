import React, { useState } from 'react';
import { 
  LuHash, 
  LuTicket, 
  LuTag, 
  LuCalendar, 
  LuUser, 
  LuMail, 
  LuPhone, 
  LuMapPin, 
  LuFileText, 
  LuPaperclip,
  LuX
} from 'react-icons/lu';

// Mock data for officers
const availableOfficers = [
  { id: 'OFC-101', name: 'Arun Kumar', station: 'Cyber Cell, North' },
  { id: 'OFC-102', name: 'Priya Singh', station: 'Cyber Cell, HQ' },
  { id: 'OFC-103', name: 'Vikram Desai', station: 'Cyber Cell, East' },
  { id: 'OFC-104', name: 'Neha Sharma', station: 'Cyber Cell, South' },
];

const CaseSummaryCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // New States for Priority Management
  const [priority, setPriority] = useState('HIGH');
  const [isPriorityMenuOpen, setIsPriorityMenuOpen] = useState(false);

  const handleAssignOfficer = (officer) => {
    alert(`Successfully assigned Officer: ${officer.name} (${officer.id})`);
    setIsModalOpen(false);
  };

  const handleUpdatePriority = (newPriority) => {
    setPriority(newPriority);
    setIsPriorityMenuOpen(false);
  };

  // Helper function to dynamically color the priority badge
  const getPriorityBadgeStyles = () => {
    switch (priority) {
      case 'LOW':
        return 'bg-green-50 text-green-600';
      case 'MODERATE':
        return 'bg-yellow-50 text-yellow-600';
      case 'HIGH':
        return 'bg-red-50 text-red-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <>
      <div className="bg-[#111C30] text-white p-6 rounded-xl border border-gray-800 shadow-sm flex items-start gap-8 relative w-full">
        {/* Case Info Icons */}
        <div className="flex flex-col gap-5 text-gray-200 mt-1">
          <LuHash className="size-5" />
          <LuTicket className="size-5" />
          <LuTag className="size-5" />
          <LuCalendar className="size-5" />
        </div>

        {/* Case Details */}
        <div className="flex-grow flex flex-col gap-4">
          <div>
            <p className="text-sm text-gray-100 font-medium">Case ID</p>
            <p className="text-base font-semibold text-gray-400">EC-2026-045678</p>
          </div>
          <div>
            <p className="text-sm text-gray-100 font-medium">Complaint Title</p>
            <p className="text-base font-semibold text-gray-400">Online Banking Fraud - Unauthorized Transaction</p>
          </div>
          <div className="flex gap-16">
            <div>
              <p className="text-sm text-gray-100 font-medium">Crime Type</p>
              <p className="text-base font-semibold text-gray-400">Cyber Fraud</p>
            </div>
            <div>
              <p className="text-sm text-gray-100 font-medium">Date Filed</p>
              <p className="text-base font-semibold text-gray-400">March 28, 2026</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-200 font-medium mb-1.5">Status</p>
            <span className="bg-green-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full inline-flex items-center">
              In Progress
            </span>
          </div>
        </div>

        {/* Priority and Actions */}
        <div className="flex flex-col items-end gap-5">
          <div className="flex items-center gap-2">
              <span className="text-sm text-gray-200 font-medium">Priority</span>
              {/* Dynamic Badge */}
              <span className={`${getPriorityBadgeStyles()} text-xs font-bold px-3 py-1 rounded-full`}>
                  {priority}
              </span>
          </div>
          <div className="flex flex-col gap-3 w-48 relative">
              {/* Update Priority Button & Dropdown */}
              <div className="relative w-full">
                <button 
                  onClick={() => setIsPriorityMenuOpen(!isPriorityMenuOpen)}
                  className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-6 py-2 rounded-lg text-sm w-full"
                >
                  Update Priority
                </button>
                
                {/* Priority Dropdown Menu */}
                {isPriorityMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-[#1A263D] border border-gray-700 rounded-lg shadow-xl z-20 overflow-hidden">
                    <button 
                      onClick={() => handleUpdatePriority('LOW')}
                      className="w-full text-left px-4 py-2.5 text-sm font-medium text-green-400 hover:bg-[#111C30] transition-colors border-b border-gray-800"
                    >
                      Low Priority
                    </button>
                    <button 
                      onClick={() => handleUpdatePriority('MODERATE')}
                      className="w-full text-left px-4 py-2.5 text-sm font-medium text-yellow-400 hover:bg-[#111C30] transition-colors border-b border-gray-800"
                    >
                      Moderate Priority
                    </button>
                    <button 
                      onClick={() => handleUpdatePriority('HIGH')}
                      className="w-full text-left px-4 py-2.5 text-sm font-medium text-red-400 hover:bg-[#111C30] transition-colors"
                    >
                      High Priority
                    </button>
                  </div>
                )}
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="border border-blue-500 text-blue-500 hover:bg-blue-500/10 transition-colors font-semibold px-6 py-2 rounded-lg text-sm w-full"
              >
                Assign Officer
              </button>
          </div>
        </div>
      </div>

      {/* Assign Officer Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm px-4">
          <div className="bg-[#111C30] border border-gray-700 rounded-xl w-full max-w-5xl shadow-2xl overflow-hidden">
            
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold text-white">Assign Investigating Officer</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <LuX className="size-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="overflow-x-auto rounded-lg border border-gray-800">
                <table className="w-full text-left text-sm text-gray-400">
                  <thead className="bg-[#1A263D] text-gray-200 uppercase text-xs font-semibold">
                    <tr>
                      <th className="px-6 py-4">Officer ID</th>
                      <th className="px-6 py-4">Name</th>
                      <th className="px-6 py-4">Assigned Station</th>
                      <th className="px-6 py-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {availableOfficers.map((officer) => (
                      <tr key={officer.id} className="hover:bg-[#162235] transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-300">{officer.id}</td>
                        <td className="px-6 py-4 text-white">{officer.name}</td>
                        <td className="px-6 py-4">{officer.station}</td>
                        <td className="px-6 py-4 text-center">
                          <button 
                            onClick={() => handleAssignOfficer(officer)}
                            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-md text-xs transition-colors"
                          >
                            Assign
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

const ComplainantDetailsCard = () => {
  return (
    <div className="bg-[#111C30] text-white p-6 rounded-xl border border-gray-800 shadow-sm w-full">
      <h2 className="text-xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
        <span className="size-1 rounded-full bg-blue-500 block"></span>
        Complainant Details
      </h2>
      <div className="grid grid-cols-2 gap-x-12 gap-y-6">
        {[
          { icon: LuUser, label: 'Name', value: 'Rajesh Kumar Sharma' },
          { icon: LuMail, label: 'Email', value: 'rajesh.sharma@email.com' },
          { icon: LuPhone, label: 'Contact Number', value: '+91 98765 43210' },
          { icon: LuMapPin, label: 'Address', value: '123, Green Park Extension, Sector 21, New Delhi - 110016' },
        ].map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="flex gap-4 items-start">
              <div className="p-2.5 bg-[#1A263D] rounded-lg text-blue-400">
                  <IconComponent className="size-5" />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-medium mb-1">{item.label}</p>
                <p className="text-base font-semibold text-gray-200">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ComplaintDescriptionCard = () => {
  return (
    <div className="bg-[#111C30] text-white p-6 rounded-xl border border-gray-800 shadow-sm relative w-full">
        <div className="absolute top-1/2 -left-3 size-1.5 rounded-full"></div>
      <h2 className="text-xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
        <span className="size-1 rounded-full bg-orange-500 block"></span>
        Complaint Description
      </h2>
      <p className="text-base text-gray-400 leading-relaxed mb-8">
        On March 25, 2026, at approximately 2:30 PM, I noticed unauthorized transactions totaling ₹85,000 from my savings account (Account No: XXXX1234) at State Bank. The transactions were made through an online banking portal which I did not initiate. I immediately contacted the bank and reported the incident. The bank has temporarily frozen my account. I received suspicious SMS messages claiming to be from the bank asking for OTP verification, which I now suspect was a phishing attempt. I have preserved all SMS records and email communications as evidence.
      </p>

      <h3 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
         <LuPaperclip className="size-5 text-gray-400" />
        Attached Evidence
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {[
          { name: 'bank_statement.pdf', icon: LuFileText, iconColor: 'text-orange-500' },
          { name: 'suspicious_sms_screenshot.jpg', icon: LuFileText, iconColor: 'text-orange-500' },
          { name: 'bank_complaint_receipt.pdf', icon: LuFileText, iconColor: 'text-orange-500' },
        ].map((file, index) => {
          const IconComponent = file.icon;
          return (
            <div key={index} className="flex items-center gap-3 p-3 bg-[#1A263D] rounded-lg border border-gray-700 hover:border-gray-500 transition-colors cursor-pointer">
              <div className={`p-2 bg-[#111C30] rounded-lg ${file.iconColor}`}>
                  <IconComponent className="size-5" />
              </div>
              <span className="text-sm font-medium text-gray-300 truncate flex-grow">{file.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ComplaintViewAdmin = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#0b1221] text-white p-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-100">Complaint Details</h1>

        <div className="flex flex-col gap-6 w-full">
          <CaseSummaryCard />
          
          <div className="flex flex-col gap-6 w-full">
            <ComplainantDetailsCard />
            <ComplaintDescriptionCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintViewAdmin;