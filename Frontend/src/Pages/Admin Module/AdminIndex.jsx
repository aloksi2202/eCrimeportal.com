import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiFileText, 
  FiBriefcase, 
  FiShield, 
  FiUsers, 
  FiSettings, 
  FiMapPin, 
  FiUser, 
  FiPlus, 
  FiSearch, 
  FiFilter, 
  FiEye, 
  FiEdit2, 
  FiTrash2, 
  FiBell 
} from 'react-icons/fi';

const Icons = {
  Complaints: () => <FiFileText className="w-5 h-5" />,
  AssignCases: () => <FiBriefcase className="w-5 h-5" />,
  PoliceOfficers: () => <FiShield className="w-5 h-5" />,
  Admin: () => <FiUsers className="w-5 h-5" />,
  Settings: () => <FiSettings className="w-5 h-5" />,
  MapPin: () => <FiMapPin className="w-4 h-4" />,
  User: () => <FiUser className="w-5 h-5 text-slate-300" />,
  Plus: () => <FiPlus className="w-4 h-4" />,
  Search: () => <FiSearch className="w-4 h-4 text-slate-400" />,
  Filter: () => <FiFilter className="w-4 h-4" />,
  Eye: () => <FiEye className="w-4 h-4" />,
  Edit: () => <FiEdit2 className="w-4 h-4" />,
  Trash: () => <FiTrash2 className="w-4 h-4" />,
  ShieldCheck: () => <FiShield className="w-6 h-6 text-white" />,
  Notifications: () => <FiBell className="w-5 h-5 text-white" />
};

const Badge = ({ text, type }) => {
  let styles = "px-3 py-1 rounded-md text-xs font-medium border text-center ";
  if (type === 'high') styles += "border-blue-500/50 text-blue-400 bg-blue-900/20";
  else if (type === 'medium') styles += "border-slate-500/50 text-slate-300 bg-[#16253B]";
  else if (type === 'low') styles += "border-slate-600 bg-transparent text-slate-400";
  else if (text === 'Pending') styles += "border-slate-500/50 text-slate-300 bg-[#16253B]";
  else if (text === 'In Progress') styles += "border-blue-500/50 text-blue-400 bg-blue-900/20";
  else if (text === 'Resolved' || text === 'Active' || text === 'Closed') styles += "border-emerald-500/50 text-emerald-400 bg-emerald-900/20";
  else if (text === 'Rejected' || text === 'Inactive') styles += "border-red-500/50 text-red-400 bg-red-900/20";

  return <span className={styles}>{text}</span>;
};

// Flex-based Toggle Switch
const ToggleSwitch = ({ active }) => (
  <button 
    className={`w-11 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${active ? 'bg-blue-600 justify-end' : 'bg-slate-600 justify-start'}`}
  >
    <div className="w-4 h-4 bg-white rounded-full transition-transform"></div>
  </button>
);

const InputField = ({ label, value, type = "text" }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-sm text-slate-400">{label}</label>
    <div className="flex bg-[#0B1524] border border-[#1E2D45] rounded-lg px-4 py-2.5 transition-colors focus-within:border-blue-500">
      <input type={type} defaultValue={value} className="bg-transparent border-none outline-none w-full text-sm text-white" />
    </div>
  </div>
);


// 3. TAB COMPONENTS


// --- TAB: COMPLAINTS ---
const TabComplaints = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const complaintsData = [
    { id: 'CMP-2847', user: 'Sarah Johnson', type: 'Theft', priority: 'High', status: 'Pending', officer: 'Unassigned', date: '2026-04-12' },
    { id: 'CMP-2846', user: 'Michael Chen', type: 'Fraud', priority: 'Medium', status: 'In Progress', officer: 'Off. Martinez', date: '2026-04-11' },
    { id: 'CMP-2845', user: 'Emily Davis', type: 'Assault', priority: 'High', status: 'In Progress', officer: 'Off. Thompson', date: '2026-04-11' },
    { id: 'CMP-2844', user: 'James Wilson', type: 'Vandalism', priority: 'Low', status: 'Resolved', officer: 'Off. Anderson', date: '2026-04-10' },
  ];

  // Filtering Logic for Complaints
  const filteredComplaints = complaintsData.filter(complaint => {
    const matchesSearch = 
      complaint.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
      complaint.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      complaint.type.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'All Status' || complaint.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white mb-1">Complaint Management</h1>
        <p className="text-sm text-slate-400">View and manage all complaints</p>
      </div>

      <div className="flex flex-wrap items-center gap-4 bg-[#111C30] p-4 rounded-xl border border-[#1E2D45] mb-6">
        <div className="flex flex-1 items-center bg-[#0B1524] border border-[#1E2D45] rounded-lg px-3 py-2.5 focus-within:border-blue-500 transition-colors min-w-[200px]">
          <Icons.Search />
          <input 
            type="text" 
            placeholder="Search by ID, User, or Crime Type..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none w-full ml-3 text-sm text-white placeholder-slate-500" 
          />
        </div>
        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-[#0B1524] border border-[#1E2D45] text-slate-300 text-sm rounded-lg px-4 py-2.5 outline-none hover:border-blue-500 transition-colors cursor-pointer appearance-none min-w-[120px]"
        >
          <option value="All Status">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
        <button className="bg-[#2563EB] hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors active:scale-95">
          <Icons.Filter /> Apply
        </button>
      </div>

      <div className="bg-[#111C30] rounded-xl overflow-x-auto border border-[#1E2D45]">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead className="bg-[#0B1524] border-b border-[#1E2D45] text-slate-400 uppercase text-xs font-semibold tracking-wider">
            <tr>
              <th className="px-6 py-4">Complaint ID</th><th className="px-6 py-4">User Name</th><th className="px-6 py-4">Crime Type</th>
              <th className="px-6 py-4">Priority</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Officer</th><th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E2D45]">
            {filteredComplaints.length > 0 ? (
              filteredComplaints.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#16253B] transition-colors text-sm text-slate-300">
                  <td className="px-6 py-4 font-medium text-blue-400 cursor-pointer hover:underline">{row.id}</td>
                  <td className="px-6 py-4">{row.user}</td>
                  <td className="px-6 py-4">{row.type}</td>
                  <td className="px-6 py-4"><Badge text={row.priority} type={row.priority.toLowerCase()} /></td>
                  <td className="px-6 py-4"><Badge text={row.status} type="status" /></td>
                  <td className="px-6 py-4">{row.officer}</td>
                  <td className="px-6 py-4 text-blue-500 flex justify-center gap-3">
                    <button className="hover:text-blue-300"><Link to={'/AdminMain/ComplaintView'}><Icons.Eye /></Link></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-8 text-center text-slate-500">
                  No complaints found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- TAB: RESOLVED CASES ---
const TabResolvedCases = () => {
  const [searchQuery, setSearchQuery] = useState('');

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

  // Filtering Logic for Resolved Cases
  const filteredCases = cases3.filter(item => {
    const query = searchQuery.toLowerCase();
    return (
      item.id.toLowerCase().includes(query) ||
      item.outcome.toLowerCase().includes(query) ||
      item.status.toLowerCase().includes(query)
    );
  });

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white mb-1">Resolved Cases</h1>
        <p className="text-sm text-slate-400">View and manage closed and resolved cases</p>
      </div>

      <div className="flex flex-wrap items-center gap-4 bg-[#111C30] p-4 rounded-xl border border-[#1E2D45] mb-6">
        <div className="flex flex-1 items-center bg-[#0B1524] border border-[#1E2D45] rounded-lg px-3 py-2.5 focus-within:border-blue-500 transition-colors min-w-[200px]">
          <Icons.Search />
          <input 
            type="text" 
            placeholder="Search cases by ID, Outcome, or Status..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none w-full ml-3 text-sm text-white placeholder-slate-500" 
          />
        </div>
        <button className="bg-[#2563EB] hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors active:scale-95">
          <Icons.Filter /> Filter
        </button>
      </div>

      <div className="bg-[#111C30] rounded-xl overflow-x-auto border border-[#1E2D45]">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead className="bg-[#0B1524] border-b border-[#1E2D45] text-slate-400 uppercase text-xs font-semibold tracking-wider">
            <tr>
              <th className="px-6 py-4">Case ID</th>
              <th className="px-6 py-4">Resolution Date</th>
              <th className="px-6 py-4">Outcome</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E2D45]">
            {filteredCases.length > 0 ? (
              filteredCases.map((item, index) => (
                <tr key={index} className="hover:bg-[#16253B] transition-colors text-sm text-slate-300">
                  <td className="px-6 py-4 font-medium text-blue-400 cursor-pointer hover:underline">{item.id}</td>
                  <td className="px-6 py-4">{item.date}</td>
                  <td className="px-6 py-4">{item.outcome}</td>
                  <td className="px-6 py-4">
                    <Badge text={item.status} type="status" />
                  </td>
                  <td className="px-6 py-4 flex justify-center gap-3">
                    <button className="text-blue-500 hover:text-blue-300">
                      <Link to={'/AdminMain/ViewResolvedComplaint'}><Icons.Eye /></Link>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-8 text-center text-slate-500">
                  No resolved cases found matching "{searchQuery}".
                </td>
              </tr>
            )}
          </tbody>
        </table>
        
        <div className="px-6 py-4 border-t border-[#1E2D45] text-sm text-slate-500">
          Showing {filteredCases.length} {filteredCases.length === 1 ? 'case' : 'cases'}
        </div>
      </div>
    </div>
  );
};

// --- TAB: POLICE OFFICERS ---
const TabPoliceOfficers = () => {
  const officers = Array(6).fill({ name: 'Officer Martinez', badge: '#-4521', area: 'Downtown', cases: 3, status: 'Active' });

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-white mb-1">Police Officers</h1>
          <p className="text-sm text-slate-400">Manage police officers and their assignments</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex gap-2 items-center transition-colors">
          <Icons.Plus /> <Link to={'/AdminMain/AddOfficer'}>Add Officer</Link>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {officers.map((off, i) => (
          <div key={i} className="bg-[#111C30] border border-[#1E2D45] rounded-xl p-6 hover:border-blue-500/50 transition-colors flex flex-col h-full shadow-sm">
            <div className="flex justify-between items-start mb-5">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center shrink-0">
                  <Icons.User />
                </div>
                <span className="text-slate-200 font-medium text-lg">{off.name}</span>
              </div>
              <span className="text-emerald-400 text-xs font-medium">{off.status}</span>
            </div>
            <div className="flex flex-col gap-2 mb-8 text-sm text-slate-400">
              <span>Badge: <span className="text-slate-300">{off.badge}</span></span>
              <span>Area: <span className="text-slate-300">{off.area}</span></span>
              <span>Active Cases: <span className="text-slate-300">{off.cases}</span></span>
            </div>
            <div className="flex gap-3 mt-auto pt-4 border-t border-[#1E2D45]">
              <button className="flex-1 border border-[#1E2D45] text-slate-300 hover:bg-[#1E2D45] hover:text-white py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors">
                <Icons.Edit /> Edit
              </button>
              <button className="flex-1 border border-red-900/50 text-red-400 hover:bg-red-900/20 py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors">
                <Icons.Trash /> Deactivate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- TAB: ADMIN MANAGEMENT ---
const TabAdminManagement = () => {
  const admins = [
    { id: 'ADM-001', name: 'John Smith', email: 'john.smith@ecrime.gov', role: 'Super Admin', status: 'Active', login: '2026-04-12 10:30' },
    { id: 'ADM-002', name: 'Emma Wilson', email: 'emma.wilson@ecrime.gov', role: 'Sub Admin', status: 'Active', login: '2026-04-12 09:15' },
    { id: 'ADM-004', name: 'Sarah Davis', email: 'sarah.davis@ecrime.gov', role: 'Sub Admin', status: 'Inactive', login: '2026-04-08 14:20' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-white mb-1">Admin Management</h1>
          <p className="text-sm text-slate-400">Manage administrator accounts and permissions</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex gap-2 items-center transition-colors">
          <Icons.Plus /> <Link to={'/AdminMain/AddAdmin'}>Add Admin</Link>
        </button>
      </div>

      <div className="bg-[#111C30] rounded-xl overflow-x-auto border border-[#1E2D45]">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead className="bg-[#0B1524] border-b border-[#1E2D45] text-slate-400 uppercase text-xs font-semibold tracking-wider">
            <tr>
              <th className="px-6 py-4">Admin ID</th><th className="px-6 py-4">Name</th><th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Role</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Last Login</th><th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E2D45]">
            {admins.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#16253B] transition-colors text-sm text-slate-300">
                <td className="px-6 py-4 font-medium text-blue-400">{row.id}</td>
                <td className="px-6 py-4">{row.name}</td>
                <td className="px-6 py-4">{row.email}</td>
                <td className="px-6 py-4"><span className="text-blue-400 bg-blue-900/20 px-2 py-1 rounded text-xs">{row.role}</span></td>
                <td className="px-6 py-4"><Badge text={row.status} type="status" /></td>
                <td className="px-6 py-4 text-slate-400">{row.login}</td>
                <td className="px-6 py-4 flex justify-center gap-3">
                  <button className="text-blue-500 hover:text-blue-400"><Icons.Edit /></button>
                  <button className="text-red-500 hover:text-red-400"><Icons.Trash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- TAB: SETTINGS ---
const TabSettings = () => {
  return (
    <div className="flex flex-col h-full pb-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white mb-1">Settings</h1>
        <p className="text-sm text-slate-400">System configuration preferences and account settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Card 1: Profile */}
        <div className="bg-[#111C30] border border-[#1E2D45] rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b border-[#1E2D45] pb-4">
            <Icons.User /> <h2 className="text-lg font-medium text-white">Profile Settings</h2>
          </div>
          <div className="flex flex-col gap-5">
            <InputField label="Full Name" value="Admin User" />
            <InputField label="Email Address" value="admin@ecrime.gov" type="email" />
            <InputField label="Phone Number" value="+1 (555) 123-4567" />
            <button className="bg-[#1E2D45] hover:bg-blue-600 text-white py-3 rounded-lg text-sm font-medium transition-colors mt-2">
              Update Profile
            </button>
          </div>
        </div>

        {/* Card 2: Security */}
        <div className="bg-[#111C30] border border-[#1E2D45] rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b border-[#1E2D45] pb-4">
            <Icons.Admin /> <h2 className="text-lg font-medium text-white">Security</h2>
          </div>
          <div className="flex flex-col gap-5">
            <InputField label="Current Password" type="password" value="********" />
            <InputField label="New Password" type="password" />
            <InputField label="Confirm Password" type="password" />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm font-medium transition-colors mt-2">
              Change Password
            </button>
          </div>
        </div>

        {/* Card 3: Notifications */}
        <div className="bg-[#111C30] border border-[#1E2D45] rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b border-[#1E2D45] pb-4">
            <Icons.Notifications /> <h2 className="text-lg font-medium text-white">Notifications</h2>
          </div>
          <div className="flex flex-col">
            {[
              { t: 'New Complaints', d: 'Get notified when new complaints are filed', on: true },
              { t: 'Case Assignments', d: 'Notify when assigned to new cases', on: true },
              { t: 'Status Updates', d: 'Get updates on case status changes', on: false },
              { t: 'System Alerts', d: 'Receive critical alerts for system events', on: true },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-4 border-b border-[#1E2D45] last:border-0 last:pb-0">
                <div className="flex flex-col pr-4">
                  <span className="text-slate-200 text-sm font-medium">{item.t}</span>
                  <span className="text-slate-500 text-xs mt-1 leading-relaxed">{item.d}</span>
                </div>
                <ToggleSwitch active={item.on} />
              </div>
            ))}
          </div>
        </div>

        {/* Card 4: System Prefs */}
        <div className="bg-[#111C30] border border-[#1E2D45] rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b border-[#1E2D45] pb-4">
            <Icons.Settings /> <h2 className="text-lg font-medium text-white">System Preferences</h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-300">Auto-Assign Cases</span>
              <ToggleSwitch active={false} />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-slate-400">Default Priority</label>
              <div className="flex bg-[#0B1524] border border-[#1E2D45] rounded-lg px-4 py-2.5 focus-within:border-blue-500 transition-colors">
                <select className="bg-transparent border-none outline-none w-full text-sm text-white appearance-none cursor-pointer">
                  <option>Medium</option>
                  <option>High</option>
                  <option>Low</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-slate-400">Session Timeout (minutes)</label>
              <div className="flex bg-[#0B1524] border border-[#1E2D45] rounded-lg px-4 py-2.5 focus-within:border-blue-500 transition-colors">
                <input type="number" defaultValue="30" className="bg-transparent border-none outline-none w-full text-sm text-white" />
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm font-medium transition-colors mt-auto">
              Save Preferences
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

const AdminIndex = () => {
  const [activeTab, setActiveTab] = useState('Complaints');

  const tabs = [
    { id: 'Complaints', icon: Icons.Complaints },
    { id: 'Resolved Cases', icon: Icons.AssignCases },
    { id: 'Police Officers', icon: Icons.PoliceOfficers },
    { id: 'Admin Management', icon: Icons.Admin },
    { id: 'Settings', icon: Icons.Settings },
  ];

  return (
    <div>
      <div className="flex min-h-screen bg-[#060D18] font-sans text-white">
        
        <aside className="w-[260px] shrink-0 bg-[#060D18] border-r border-[#1E2D45] flex flex-col py-6 px-4 gap-2 z-10 overflow-y-auto sticky top-0 h-screen">
          
          <div className="px-4 pb-6 mb-2 border-b border-[#1E2D45] flex items-center gap-3">
             <div className="bg-blue-600 p-1.5 rounded-md"><Icons.ShieldCheck /></div>
             <span className="text-xl font-bold tracking-wide">eCrime Portal</span>
          </div>

          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <div 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                  isActive ? 'bg-[#1E3A5F] text-white shadow-sm' : 'text-slate-400 hover:bg-[#16253B] hover:text-slate-200'
                }`}
              >
                <Icon />
                <span className="text-sm font-medium tracking-wide">{tab.id}</span>
              </div>
            );
          })}
        </aside>

        <main className="flex-1 flex flex-col min-w-0 bg-[#0B1524]">
          <div className="p-8 max-w-[1600px] w-full mx-auto">
            {activeTab === 'Complaints' && <TabComplaints />}
            {activeTab === 'Resolved Cases' && <TabResolvedCases />}
            {activeTab === 'Police Officers' && <TabPoliceOfficers />}
            {activeTab === 'Admin Management' && <TabAdminManagement />}
            {activeTab === 'Settings' && <TabSettings />}
          </div>
        </main>
        
      </div>
    </div>
  )
}

export default AdminIndex;