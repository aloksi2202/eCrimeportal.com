import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// --- Mock Data ---
const initialComplaints = [
  { id: 'ECR-2026-0542', date: '2026-04-03', category: 'Phishing Attack', status: 'Investigating' },
  { id: 'ECR-2026-0541', date: '2026-03-28', category: 'Identity Theft', status: 'Pending' },
  { id: 'ECR-2026-0540', date: '2026-03-15', category: 'Online Fraud', status: 'Resolved' },
  { id: 'ECR-2026-0539', date: '2026-03-10', category: 'Social Media Hack', status: 'Investigating' },
  { id: 'ECR-2026-0538', date: '2026-02-28', category: 'Ransomware', status: 'Resolved' },
  { id: 'ECR-2026-0537', date: '2026-02-20', category: 'Phishing Attack', status: 'Pending' },
  // Extra data to demonstrate "Load More"
  { id: 'ECR-2026-0536', date: '2026-02-15', category: 'Identity Theft', status: 'Investigating' },
  { id: 'ECR-2026-0535', date: '2026-02-10', category: 'Online Fraud', status: 'Pending' },
  { id: 'ECR-2026-0534', date: '2026-02-05', category: 'Ransomware', status: 'Resolved' },
];

// --- Icons ---
const Icons = {
  Search: () => <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  Filter: () => <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>,
  Eye: () => <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  Shield: () => <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  UserX: () => <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" /></svg>,
  CreditCard: () => <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
  MessageSquare: () => <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
  Lock: () => <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
};

// --- Helper Functions ---
const getCategoryIcon = (category) => {
  switch (category) {
    case 'Phishing Attack': return <Icons.Shield />;
    case 'Identity Theft': return <Icons.UserX />;
    case 'Online Fraud': return <Icons.CreditCard />;
    case 'Social Media Hack': return <Icons.MessageSquare />;
    case 'Ransomware': return <Icons.Lock />;
    default: return <Icons.Shield />;
  }
};

const getStatusStyles = (status) => {
  switch (status) {
    case 'Investigating': return 'bg-blue-100 text-blue-700';
    case 'Pending': return 'bg-orange-100 text-orange-700';
    case 'Resolved': return 'bg-green-100 text-green-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

export default function RecentComplaints() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [visibleCount, setVisibleCount] = useState(6);

  // --- Filtering Logic ---
  const filteredComplaints = useMemo(() => {
    return initialComplaints.filter((complaint) => {
      const matchesSearch = complaint.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'All Statuses' || complaint.status === statusFilter;
      const matchesCategory = categoryFilter === 'All Categories' || complaint.category === categoryFilter;
      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [searchQuery, statusFilter, categoryFilter]);

  const displayedComplaints = filteredComplaints.slice(0, visibleCount);
  const hasMore = visibleCount < filteredComplaints.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] p-6 md:p-10 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Recent Complaints</h1>
            <p className="text-gray-500 text-sm">Track and manage your complaint history</p>
          </div>
          <button className="px-6 py-2 bg-white border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors shadow-sm focus:ring-2 focus:ring-blue-200">
            View All
          </button>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4">
          
          {/* Search */}
          <div className="flex-1 ">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icons.Search />
            </div>
            <input
              type="text"
              placeholder="Search by Complaint ID..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Status Filter */}
          <div className="md:w-64 ">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icons.Filter />
            </div>
            <select
              className="w-full pl-10 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All Statuses">All Statuses</option>
              <option value="Investigating">Investigating</option>
              <option value="Pending">Pending</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>

          {/* Category Filter */}
          <div className="md:w-64 ">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icons.Filter />
            </div>
            <select
              className="w-full pl-10 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All Categories">All Categories</option>
              <option value="Phishing Attack">Phishing Attack</option>
              <option value="Identity Theft">Identity Theft</option>
              <option value="Online Fraud">Online Fraud</option>
              <option value="Social Media Hack">Social Media Hack</option>
              <option value="Ransomware">Ransomware</option>
            </select>
          </div>
        </div>

        {/* Complaints Grid */}
        {displayedComplaints.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {displayedComplaints.map((complaint) => (
              <div 
                key={complaint.id} 
                className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-lg hover: transition-all duration-300 flex flex-col h-full"
              >
                {/* Card Header */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900 text-lg">{complaint.id}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyles(complaint.status)}`}>
                    {complaint.status}
                  </span>
                </div>
                
                {/* Card Date */}
                <p className="text-sm text-gray-500 mb-6">Date: {complaint.date}</p>
                
                {/* Card Category */}
                <div className="flex items-center text-gray-700 font-medium mb-8">
                  {getCategoryIcon(complaint.category)}
                  {complaint.category}
                </div>
                
                {/* Card Button */}
                <div className="mt-auto">
                  <button className="w-full flex items-center justify-center py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <Icons.Eye />
                    <Link to={'/UserMain/TrackComplaint '}>View Details</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-gray-500 text-lg">No complaints found matching your criteria.</p>
          </div>
        )}

        {/* Footer / Load More */}
        {filteredComplaints.length > 0 && (
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-sm text-gray-500">
              Showing {displayedComplaints.length} of {filteredComplaints.length} complaints
            </p>
            {hasMore && (
              <button 
                onClick={handleLoadMore}
                className="px-8 py-2.5 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm focus:ring-2 focus:ring-gray-200"
              >
                Load More
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
