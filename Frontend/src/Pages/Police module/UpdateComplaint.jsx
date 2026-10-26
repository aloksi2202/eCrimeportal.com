

import React, { useState } from 'react';

// Inline SVGs for all icons to remove dependencies
const ClockIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ExclamationCircleIcon = () => (
  <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const UploadIcon = () => (
  <svg className="w-10 h-10 text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// Define standard colors from the image
const colors = {
    amber: {
        text: 'text-amber-700',
        border: 'border-amber-100',
        bg: 'bg-amber-50',
        primary: 'bg-amber-600',
        primaryHover: 'hover:bg-amber-700',
        caseText: 'text-amber-600',
    },
    red: {
        text: 'text-red-700',
        border: 'border-red-100',
        bg: 'bg-red-50',
    },
    green: {
        primary: 'bg-emerald-600',
        primaryHover: 'hover:bg-emerald-700',
    }
};




const UpdateComplaint = ({ onClose = () => {} }) => {

const [newStatus, setNewStatus] = useState('');
    const [assignedOfficer, setAssignedOfficer] = useState('');
    const [remarks, setRemarks] = useState('');
    const [notify, setNotify] = useState(false);
    const [urgent, setUrgent] = useState(false);

    // Mock options
    const statusOptions = ['pending', 'resolved', 'closed'];


  return (
    <div>

<div className="  bg-gray-200  flex items-center justify-center p-4 z-50 ">
            {/* Modal Container */}
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl  border border-gray-100 overflow-hidden">
                
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Update Complaint Status</h2>
                        <p className="text-sm text-gray-600 mt-1">Case ID: <span className={`font-semibold ${colors.amber.caseText}`}>EC-2026-045678</span></p>
                    </div>
                   
                </div>

                {/* Form Content - use semantic <form> */}
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="p-8 space-y-6 bg-white">
                        {/* Current Status Box */}
                        <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg flex items-center gap-3">
                            <span className="text-sm font-medium text-gray-600">Current Status</span>
                            {/* In Progress Tag */}
                            <div className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full ${colors.amber.bg} ${colors.amber.border} border ${colors.amber.text} text-sm font-medium`}>
                                <ClockIcon />
                                In Progress
                            </div>
                            {/* High Priority Tag */}
                            <div className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full ${colors.red.bg} ${colors.red.border} border ${colors.red.text} text-sm font-medium`}>
                                <ExclamationCircleIcon />
                                HIGH PRIORITY
                            </div>
                        </div>

                        {/* Form Fields Stack */}
                        <div className="space-y-4">
                            
                            {/* Select New Status */}
                            <div>
                                <label htmlFor="new-status" className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Select New Status <span className="text-red-500">*</span>
                                </label>
                                <div className=" group">
                                    <select 
                                        id="new-status"
                                        value={newStatus}
                                        onChange={(e) => setNewStatus(e.target.value)}
                                        required
                                        className="w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-colors group-hover:border-gray-400 cursor-pointer"
                                    >
                                        <option value="" disabled hidden>Choose status...</option>
                                        {statusOptions.map(option => (
                                            <option key={option} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-gray-400 transition-colors group-hover:text-gray-500">
                                        <ChevronDownIcon />
                                    </div>
                                </div>
                            </div>

                            {/* Assign to Officer */}
                            <div>
                                <label htmlFor="assign-officer" className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Assign to Officer
                                </label>
                                <div className=" group">
                                    <input 
                                        id="assign-officer"
                                        type="search"
                                        placeholder="Search officer name or ID..."
                                        value={assignedOfficer}
                                        onChange={(e) => setAssignedOfficer(e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 text-gray-900 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-colors group-hover:border-gray-400"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400 transition-colors group-hover:text-gray-500">
                                        <SearchIcon />
                                    </div>
                                </div>
                            </div>

                            {/* Remarks / Action Notes */}
                            <div>
                                <label htmlFor="remarks" className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Remarks / Action Notes <span className="text-red-500">*</span>
                                </label>
                                <div className=" group">
                                    <textarea 
                                        id="remarks"
                                        rows={5}
                                        required
                                        placeholder="Enter investigation update, actions taken, or reason for status change..."
                                        value={remarks}
                                        onChange={(e) => setRemarks(e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 p-4 text-gray-900 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-colors group-hover:border-gray-400 resize-none"
                                    />
                                    {/* The little red dot from the image, treated as a decorative marker */}
                                    <div className="absolute left-1/2 -translate-x-1/2 bottom-5 w-2.5 h-2.5 " />
                                </div>
                            </div>

                            {/* Upload Evidence / Documents Zone */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Upload Evidence / Documents
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center bg-gray-50 hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer group">
                                    <div className="flex flex-col items-center">
                                        <UploadIcon />
                                        <p className="text-xl font-medium text-gray-800">
                                            Drag & drop files or <button type="button" className={`font-semibold ${colors.amber.caseText} hover:text-amber-700 transition-colors`}>browse</button>
                                        </p>
                                        <p className="text-base text-gray-500 mt-2.5">Supports: JPG, PNG, PDF, Video clips</p>
                                    </div>
                                </div>
                            </div>

                            {/* Update Timestamp Field */}
                            <div>
                                <label htmlFor="timestamp" className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Update Timestamp
                                </label>
                                <div className="">
                                    <input 
                                        id="timestamp"
                                        type="text"
                                        value="10 Apr 2026, 11:25 pm"
                                        readOnly
                                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 pl-12 text-gray-700 cursor-default focus:ring-0 focus:border-gray-200"
                                    />
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                                        <ClockIcon />
                                    </div>
                                </div>
                            </div>

                            {/* Checkboxes Group */}
                            <div className="space-y-3.5 pt-2.5">
                                <label className="flex items-center gap-3.5 cursor-pointer group">
                                    <input 
                                        type="checkbox" 
                                        checked={notify}
                                        onChange={() => setNotify(!notify)}
                                        className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-100 focus:ring-2 transition-colors group-hover:border-blue-400"
                                    />
                                    <span className="text-base font-medium text-gray-900 group-hover:text-gray-800">Notify Complainant</span>
                                </label>
                                <label className="flex items-center gap-3.5 cursor-pointer group">
                                    <input 
                                        type="checkbox"
                                        checked={urgent}
                                        onChange={() => setUrgent(!urgent)}
                                        className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-100 focus:ring-2 transition-colors group-hover:border-blue-400"
                                    />
                                    <span className="text-base font-medium text-gray-900 group-hover:text-gray-800">Mark as urgent</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Footer Buttons Section */}
                    <div className="p-6 border-t border-gray-100 flex items-center justify-end gap-3.5 bg-white rounded-b-xl">
                        <button 
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 rounded-xl border border-gray-300 text-base font-semibold text-gray-900 bg-white hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-100 focus:ring-offset-2"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className={`px-6 py-3 rounded-xl text-base font-semibold text-white ${colors.green.primary} ${colors.green.primaryHover} transition-colors flex items-center gap-2.5 focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2`}
                        >
                            <CheckIcon />
                            Mark as Resolved
                        </button>
                        <button 
                            type="submit" 
                            className={`px-6 py-3 rounded-xl text-base font-semibold text-white ${colors.amber.primary} ${colors.amber.primaryHover} transition-colors focus:ring-2 focus:ring-amber-200 focus:ring-offset-2`}
                        >
                            Update Status
                        </button>
                    </div>
                </form>
            </div>
        </div>


    </div>
  )
}

export default UpdateComplaint