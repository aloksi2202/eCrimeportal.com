import React from 'react';
import { 
  FiMap, 
  FiAlertTriangle, 
  FiTrendingUp, 
  FiMapPin 
} from 'react-icons/fi';

const PoliceMap = () => {
  // Updated labels to Latitude and Longitude
  const summaryStats = [
    { label: 'Latitude', value: '6', icon: <FiMap className="w-5 h-5" /> },
    { label: 'Longitude', value: '3', icon: <FiAlertTriangle className="w-5 h-5" /> },
    { label: 'Peak Hours', value: '16-20', icon: <FiTrendingUp className="w-5 h-5" /> },
    { label: 'Most Active', value: 'Central', icon: <FiMapPin className="w-5 h-5" /> },
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
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 p-6 md:p-8">
        <div className="max-w-[1600px] mx-auto">
          
          {/* --- 1. Header Section --- */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-1">User's Location</h1>
              <p className="text-sm text-slate-500">Regional crime distribution and hotspot analysis</p>
            </div>
          </div>

          {/* --- 2. Summary Cards --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {summaryStats.map((stat, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 flex items-center gap-5 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-xs font-medium mb-1 uppercase tracking-wider">{stat.label}</span>
                  <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* --- 3. Main Content Grid --- */}
          {/* Changed grid layout to single column to allow full width */}
          <div className="grid grid-cols-1 gap-6">
            
            {/* Left: Regional Crime Heatmap (Now spans full width: col-span-1) */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col shadow-sm min-h-[600px] relative overflow-hidden">
              <h2 className="text-lg font-bold text-slate-900 mb-6 z-10">Regional Crime Heatmap</h2>
              
              {/* Map Grid Background */}
              <div 
                className="absolute inset-0 top-16 opacity-50 w-full"
                style={{
                  backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
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
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center text-blue-600 shadow-[0_4px_10px_rgba(59,130,246,0.3)] z-20 group-hover:scale-110 transition-transform duration-200">
                    <FiMapPin className="w-4 h-4 fill-blue-50" />
                  </div>
                  {/* Pin Label */}
                  <div className="mt-2 bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-center z-20 group-hover:border-blue-400 transition-colors shadow-sm">
                    <p className="text-xs font-bold text-slate-800 whitespace-nowrap">{marker.name}</p>
                    <p className="text-[10px] text-slate-500">{marker.crimes} crimes</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliceMap;