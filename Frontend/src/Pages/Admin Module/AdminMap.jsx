import React from 'react'
import { 
  FiMap, 
  FiAlertTriangle, 
  FiTrendingUp, 
  FiMapPin, 
  FiFilter 
} from 'react-icons/fi';
const AdminMap = () => {
    const summaryStats = [
    { label: 'Total Complaints', value: '6', icon: <FiMap className="w-5 h-5" /> },
    { label: 'Total Police Officers', value: '3', icon: <FiAlertTriangle className="w-5 h-5" /> },
    { label: 'Peak Hours', value: '16-20', icon: <FiTrendingUp className="w-5 h-5" /> },
    { label: 'Most Active', value: 'Central', icon: <FiMapPin className="w-5 h-5" /> },
  ];

  const recentIncidents = [
    { id: 'CMP-2847', type: 'Theft', location: 'Downtown', time: '10 min ago', severity: 'high' },
    { id: 'CMP-2846', type: 'Fraud', location: 'North District', time: '25 min ago', severity: 'medium' },
    { id: 'CMP-2845', type: 'Assault', location: 'East Side', time: '1 hr ago', severity: 'high' },
    { id: 'CMP-2844', type: 'Vandalism', location: 'West End', time: '2 hrs ago', severity: 'low' },
  ];

  const mapMarkers = [
    { name: 'North District', crimes: 423, top: '45%', left: '35%' },
    { name: 'Downtown', crimes: 542, top: '40%', left: '15%' },
    { name: 'East Side', crimes: 389, top: '65%', left: '55%' },
    { name: 'West End', crimes: 312, top: '70%', left: '12%' },
    { name: 'South Zone', crimes: 456, top: '85%', left: '35%' },
  ];
  return (
    <div>
<div className="min-h-screen bg-[#060D18] font-sans text-white p-6 md:p-8">
      <div className="max-w-[1600px] mx-auto">
        
        {/* --- 1. Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Crime Map & Analytics</h1>
            <p className="text-sm text-slate-400">Regional crime distribution and hotspot analysis</p>
          </div>
          
         
        </div>

        {/* --- 2. Summary Cards --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {summaryStats.map((stat, idx) => (
            <div key={idx} className="bg-[#111C30] border border-[#1E2D45] rounded-xl p-6 flex items-center gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#1E2D45]/50 flex items-center justify-center text-blue-400 shrink-0">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-xs font-medium mb-1">{stat.label}</span>
                <span className="text-2xl font-bold text-slate-100">{stat.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* --- 3. Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left: Regional Crime Heatmap (Spans 2 columns) */}
          <div className="lg:col-span-2 bg-[#111C30] border border-[#1E2D45] rounded-xl p-6 flex flex-col shadow-sm min-h-[600px] relative overflow-hidden">
            <h2 className="text-lg font-semibold text-white mb-6 z-10">Regional Crime Heatmap</h2>
            
            {/* Map Grid Background */}
            <div 
              className="absolute inset-0 top-16 opacity-[0.15]"
              style={{
                backgroundImage: `linear-gradient(to right, #475569 1px, transparent 1px), linear-gradient(to bottom, #475569 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            ></div>

            {/* Map Markers */}
            {mapMarkers.map((marker, idx) => (
              <div 
                key={idx} 
                className="absolute flex flex-col items-center group cursor-pointer"
                style={{ top: marker.top, left: marker.left }}
              >
                {/* Pin Icon */}
                <div className="w-8 h-8 rounded-full bg-[#111C30] border border-blue-500 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-20 group-hover:scale-110 transition-transform">
                  <FiMapPin className="w-4 h-4" />
                </div>
                {/* Pin Label */}
                <div className="mt-2 bg-[#0B1524] border border-[#1E2D45] px-3 py-1.5 rounded-lg text-center z-20 group-hover:border-blue-500/50 transition-colors">
                  <p className="text-xs font-bold text-slate-200 whitespace-nowrap">{marker.name}</p>
                  <p className="text-[10px] text-slate-400">{marker.crimes} crimes</p>
                </div>
              </div>
            ))}

            {/* Map Legend */}
            <div className="absolute bottom-6 right-6 bg-[#0B1524] border border-[#1E2D45] rounded-lg p-4 z-20">
              <p className="text-xs font-semibold text-slate-300 mb-3">Severity</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                  <span className="text-xs text-slate-400">High Risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"></div>
                  <span className="text-xs text-slate-400">Medium Risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                  <span className="text-xs text-slate-400">Low Risk</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Recent Incidents List */}
          <div className="bg-[#111C30] border border-[#1E2D45] rounded-xl p-6 shadow-sm flex flex-col h-full">
            <h2 className="text-lg font-semibold text-white mb-6">Recent Incidents</h2>
            
            <div className="flex flex-col flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {recentIncidents.map((incident, idx) => (
                <div key={idx} className="py-4 border-b border-[#1E2D45] last:border-0 hover:bg-[#16253B] -mx-4 px-4 transition-colors rounded-lg cursor-pointer">
                  
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-blue-400 text-sm font-medium">{incident.id}</span>
                    <div className={`w-2 h-2 rounded-full mt-1.5 shadow-sm ${
                      incident.severity === 'high' ? 'bg-red-500 shadow-red-500/50' : 
                      incident.severity === 'medium' ? 'bg-orange-500 shadow-orange-500/50' : 
                      'bg-slate-500'
                    }`}></div>
                  </div>
                  
                  <p className="text-slate-200 text-sm font-medium mb-2">{incident.type}</p>
                  
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <FiMapPin className="w-3.5 h-3.5" />
                      <span>{incident.location}</span>
                    </div>
                    <span>{incident.time}</span>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>

    </div>
  )
}

export default AdminMap