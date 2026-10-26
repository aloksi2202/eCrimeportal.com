import React from 'react'


const Icons = {
 
   Settings: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  Search: () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  Filter: () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" /></svg>,
  Eye: () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  UserCog: () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>
};

// --- Mock Data ---
const complaintsData = [
  { id: 'CMP-2847', user: 'Sarah Johnson', type: 'Theft', priority: 'High', status: 'Pending', officer: 'Unassigned', date: '2026-04-12' },
  { id: 'CMP-2846', user: 'Michael Chen', type: 'Fraud', priority: 'Medium', status: 'In Progress', officer: 'Off. Martinez', date: '2026-04-11' },
  { id: 'CMP-2845', user: 'Emily Davis', type: 'Assault', priority: 'High', status: 'In Progress', officer: 'Off. Thompson', date: '2026-04-11' },
  { id: 'CMP-2844', user: 'James Wilson', type: 'Vandalism', priority: 'Low', status: 'Resolved', officer: 'Off. Anderson', date: '2026-04-10' },
  { id: 'CMP-2843', user: 'Lisa Brown', type: 'Cybercrime', priority: 'Medium', status: 'Pending', officer: 'Unassigned', date: '2026-04-10' },
  { id: 'CMP-2842', user: 'David Martinez', type: 'Theft', priority: 'High', status: 'In Progress', officer: 'Off. Garcia', date: '2026-04-09' },
  { id: 'CMP-2841', user: 'Jennifer Lee', type: 'Fraud', priority: 'Medium', status: 'Resolved', officer: 'Off. Johnson', date: '2026-04-09' },
  { id: 'CMP-2840', user: 'Robert Taylor', type: 'Assault', priority: 'High', status: 'Rejected', officer: 'Off. Williams', date: '2026-04-08' },
];

const SidebarItem = ({ icon: Icon, text, active }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-[#1E3A5F] text-white' : 'text-slate-400 hover:bg-[#16253B] hover:text-slate-200'}`}>
    <Icon />
    <span className="text-sm font-medium">{text}</span>
  </div>
);

const Badge = ({ text, type }) => {
  let baseClasses = "px-3 py-1 rounded-md text-xs font-medium border ";
  
  if (type === 'priority') {
    baseClasses += "border-slate-600 bg-transparent text-slate-300";
  } else if (type === 'status') {
    if (text === 'Pending') baseClasses += "border-slate-500/50 text-slate-300 bg-[#16253B]";
    if (text === 'In Progress') baseClasses += "border-blue-500/50 text-blue-400 bg-blue-900/20";
    if (text === 'Resolved') baseClasses += "border-emerald-500/50 text-emerald-400 bg-emerald-900/20";
    if (text === 'Rejected') baseClasses += "border-red-500/50 text-red-400 bg-red-900/20";
  }

  return <span className={baseClasses}>{text}</span>;
}

const ComplanitManagement = () => {
  return (
    <div>
        <main className="flex-1 flex flex-col min-w-0 p-8 bg-[#0B1524]">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-white mb-1">Complaint Management</h1>
          <p className="text-sm text-slate-400">View and manage all complaints</p>
        </div>

        {/* Filters & Search Bar (Flexbox handles alignment natively) */}
        <div className="flex flex-wrap items-center gap-4 bg-[#111C30] p-4 rounded-xl border border-[#1E2D45] mb-6">
          
          {/* Search Input Wrapper (Using Flex instead of absolute icons) */}
          <div className="flex flex-1 items-center bg-[#0B1524] border border-[#1E2D45] rounded-lg px-3 py-2.5 transition-colors focus-within:border-blue-500 min-w-[200px]">
            <Icons.Search />
            <input 
              type="text" 
              placeholder="Search complaints..." 
              className="bg-transparent border-none outline-none w-full ml-3 text-sm text-white placeholder-slate-500" 
            />
          </div>

          <select className="bg-[#0B1524] border border-[#1E2D45] text-slate-300 text-sm rounded-lg px-4 py-2.5 outline-none hover:border-blue-500 transition-colors cursor-pointer appearance-none min-w-[120px]">
            <option>All Status</option>
            <option>Pending</option>
            <option>In Progress</option>
          </select>

          <select className="bg-[#0B1524] border border-[#1E2D45] text-slate-300 text-sm rounded-lg px-4 py-2.5 outline-none hover:border-blue-500 transition-colors cursor-pointer appearance-none min-w-[120px]">
            <option>All Priority</option>
            <option>High</option>
            <option>Medium</option>
          </select>

          <button className="bg-[#2563EB] hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors active:scale-95">
            <Icons.Filter /> Apply
          </button>
        </div>

        {/* Data Table */}
        <div className="bg-[#111C30] rounded-xl overflow-x-auto border border-[#1E2D45]">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            
            <thead className="bg-[#0B1524] border-b border-[#1E2D45] text-slate-400 uppercase text-xs font-semibold tracking-wider">
              <tr>
                <th className="px-6 py-4">Complaint ID</th>
                <th className="px-6 py-4">User Name</th>
                <th className="px-6 py-4">Crime Type</th>
                <th className="px-6 py-4">Priority</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Assigned Officer</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#1E2D45]">
              {complaintsData.map((row, index) => (
                <tr key={index} className="hover:bg-[#16253B] transition-colors text-sm text-slate-300">
                  <td className="px-6 py-4 font-medium text-blue-400 cursor-pointer hover:text-blue-300 hover:underline">
                    {row.id}
                  </td>
                  <td className="px-6 py-4">{row.user}</td>
                  <td className="px-6 py-4">{row.type}</td>
                  <td className="px-6 py-4">
                    <Badge text={row.priority} type="priority" />
                  </td>
                  <td className="px-6 py-4">
                    <Badge text={row.status} type="status" />
                  </td>
                  <td className="px-6 py-4">{row.officer}</td>
                  <td className="px-6 py-4 text-slate-400">{row.date}</td>
                  <td className="px-6 py-4">
                    {/* Action Icons Flex Container */}
                    <div className="flex items-center justify-center gap-4 text-blue-500">
                      <button className="hover:text-blue-300 transition-colors p-1" title="View Details">
                        <Icons.Eye />
                      </button>
                      <button className="hover:text-blue-300 transition-colors p-1" title="Assign Case">
                        <Icons.UserCog />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            
          </table>
        </div>

      </main>
    </div>
  )
}

export default ComplanitManagement