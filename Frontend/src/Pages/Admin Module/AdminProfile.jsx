import React, { useState } from 'react';
import { FiMail, FiCalendar, FiPhone, FiLock, FiShield, FiClock, FiEye, FiMonitor } from 'react-icons/fi';
const AdminProfile = () => {
 const [activeTab, setActiveTab] = useState('Personal Info');

  return (
    <div className="min-h-screen bg-[#0b1221] text-gray-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-1">Admin Profile</h1>
          <p className="text-sm text-gray-400">Manage your account settings and preferences</p>
        </div>

        {/* Profile Summary Card */}
        <div className="bg-[#11192b] border border-gray-800 rounded-xl p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
          <div className="flex items-center gap-5">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/150?u=alex"
                alt="Alex Kumar"
                className="w-20 h-20 rounded-full border-2 border-blue-500 object-cover"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl font-semibold text-white">Alex Kumar</h2>
                <span className="bg-blue-600 text-white text-[10px] font-medium px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Super Admin
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center text-sm text-gray-400 gap-2">
                  <FiMail size={14} className="text-gray-500" />
                  <span>alex.kumar@ecinveportal.gov</span>
                </div>
                <div className="flex items-center text-sm text-gray-400 gap-2">
                  <FiCalendar size={14} className="text-gray-500" />
                  <span>Joined: Jan 15, 2024</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <FiPhone size={14} className="text-gray-500" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
              <span className="text-emerald-500 text-xs font-medium">Active</span>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex gap-8 border-b border-gray-800 mb-8">
          {['Personal Info', 'Security'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-1 text-sm font-medium transition-colors border-b-2 -mb-[1px] ${
                activeTab === tab
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-[#11192b] border border-gray-800 rounded-xl p-8 shadow-sm">
          
          {/* --- PERSONAL INFO TAB --- */}
          {activeTab === 'Personal Info' && (
            <div className="animate-in fade-in duration-300">
              <h3 className="text-lg font-medium text-white mb-6">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Alex Kumar"
                    className="w-full bg-[#0a101d] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue="alex.kumar@ecinveportal.gov"
                    className="w-full bg-[#0a101d] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+91 98765 43210"
                    className="w-full bg-[#0a101d] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">Date of Birth</label>
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="05/15/1990"
                      className="w-full bg-[#0a101d] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                    <FiCalendar size={16} className="absolute right-3 top-3 text-gray-500" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-gray-400 mb-2">Address</label>
                  <input
                    type="text"
                    defaultValue="New Delhi, India"
                    className="w-full bg-[#0a101d] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 focus:ring-offset-[#11192b]">
                  Save Changes
                </button>
                <button className="text-gray-400 hover:text-white px-4 py-2.5 text-sm font-medium transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* --- SECURITY TAB --- */}
          {activeTab === 'Security' && (
            <div className="animate-in fade-in duration-300 space-y-10">
              
              {/* Change Password */}
              <div>
                <h3 className="text-lg font-medium text-white flex items-center gap-2 mb-6">
                  <FiLock size={18} className="text-gray-400" /> Change Password
                </h3>
                <div className="max-w-md space-y-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2">Current Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full bg-[#0a101d] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                      <FiEye size={16} className="absolute right-3 top-3 text-gray-500 cursor-pointer hover:text-gray-300" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2">New Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        className="w-full bg-[#0a101d] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                      <FiEye size={16} className="absolute right-3 top-3 text-gray-500 cursor-pointer hover:text-gray-300" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2">Confirm New Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        className="w-full bg-[#0a101d] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                      <FiEye size={16} className="absolute right-3 top-3 text-gray-500 cursor-pointer hover:text-gray-300" />
                    </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors mt-2">
                    Update Password
                  </button>
                </div>
              </div>

              {/* Security Settings */}
              <div className="pt-8 border-t border-gray-800">
                <h3 className="text-lg font-medium text-white flex items-center gap-2 mb-6">
                  <FiShield size={18} className="text-gray-400" /> Security Settings
                </h3>
                
                <div className="flex items-center justify-between p-4 bg-[#0a101d] border border-gray-800 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-gray-200">Two-Factor Authentication</div>
                    <div className="text-xs text-gray-500 mt-1">Add an extra layer of security to your account</div>
                  </div>
                  {/* Toggle Switch UI */}
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </div>
                </div>
              </div>

              

            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminProfile