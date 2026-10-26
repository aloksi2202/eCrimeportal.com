import React from 'react';
import { Link } from 'react-router-dom';

// ============================================================================
// 1. INLINE SVG ICONS (Self-contained, no external libraries)
// ============================================================================
const Icons = {
  Hash: () => <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>,
  DocumentText: () => <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
  Tag: () => <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" /></svg>,
  Calendar: () => <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>,
  ExclamationCircle: () => <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
  User: () => <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
  Mail: () => <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
  Phone: () => <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.018a13.783 13.783 0 01-6.108-6.108l2.018-1.514c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>,
  MapPin: () => <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
  PaperClip: () => <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.5.75S8.75 10.164 8.75 9.75 8.918 9 9.25 9s.5.336.5.75zm5.5 0c0 .414-.168.75-.5.75s-.5-.336-.5-.75.168-.75.5-.75.5.336.5.75z" /></svg>,
  ImageFile: () => <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>,
  PdfFile: () => <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
  LocationMarker: () => <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
  CheckBadge: () => <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>,
  Plus: () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>,
};

// ============================================================================
// 2. MOCK DATA
// ============================================================================
const timelineData = [
  {
    id: 1, type: 'warning', icon: Icons.ExclamationCircle, color: 'bg-[#FF8C00]',
    title: 'Case Registered', officer: 'By Inspector Priya Mehta',
    desc: 'Complaint registered and initial FIR filed. Case assigned to Cyber Crime Cell.',
    date: 'March 28, 2026', time: '10:30 AM'
  },
  {
    id: 2, type: 'info', icon: Icons.LocationMarker, color: 'bg-blue-500',
    title: 'Visited Complainant Location', officer: 'By Sub-Inspector Amit Singh',
    desc: 'Visited complainant residence to collect additional evidence and record detailed statement. Collected mobile phone for forensic analysis of phishing messages.',
    date: 'March 29, 2026', time: '2:15 PM'
  },
  {
    id: 3, type: 'success', icon: Icons.DocumentText, color: 'bg-emerald-500',
    title: 'Evidence Collected', officer: 'By Inspector Priya Mehta',
    desc: 'Obtained bank transaction records, CCTV footage from ATM locations, and server logs from the bank. Forensic team analyzing digital footprints.',
    date: 'March 30, 2026', time: '11:00 AM'
  },
  {
    id: 4, type: 'warning', icon: Icons.ExclamationCircle, color: 'bg-[#FF8C00]',
    title: 'Investigation Update', officer: 'By Inspector Priya Mehta',
    desc: 'Traced IP address to a location in Mumbai. Coordinating with Mumbai Police Cyber Cell for further investigation. Suspect identified through digital forensics.',
    date: 'April 2, 2026', time: '9:45 AM'
  },
];

const activityLogData = [
  { id: 'ACT-001', officer: 'Inspector Priya Mehta', action: 'FIR Registration', date: '28 Mar 2026', remarks: 'Initial complaint filed under IT Act Section 66C' },
  { id: 'ACT-002', officer: 'Sub-Inspector Amit Singh', action: 'Physical Verification', date: '29 Mar 2026', remarks: 'Visited complainant and recorded statement' },
  { id: 'ACT-003', officer: 'Inspector Priya Mehta', action: 'Evidence Collection', date: '30 Mar 2026', remarks: 'Bank records and digital evidence obtained' },
  { id: 'ACT-004', officer: 'Forensic Team', action: 'Digital Forensics', date: '31 Mar 2026', remarks: 'Mobile and transaction data analysis in progress' },
  { id: 'ACT-005', officer: 'Inspector Priya Mehta', action: 'Cross-State Coordination', date: '02 Apr 2026', remarks: 'Coordinating with Mumbai Cyber Cell' },
];

// ============================================================================
// 3. UI COMPONENTS
// ============================================================================
const DetailItem = ({ icon: Icon, label, value, valueClass = "text-slate-900 font-medium" }) => (
  <div className="flex gap-3">
    <div className="mt-0.5"><Icon /></div>
    <div className="flex flex-col">
      <span className="text-xs text-slate-500 mb-0.5">{label}</span>
      <span className={`text-sm ${valueClass}`}>{value}</span>
    </div>
  </div>
);

const FilePill = ({ icon: Icon, name }) => (
  <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 px-3 py-1.5 rounded-md cursor-pointer hover:bg-amber-100 hover:border-amber-200 transition-colors mr-3 mb-3 shadow-sm">
    <Icon />
    <span className="text-xs font-medium text-slate-700">{name}</span>
  </div>
);

const SectionCard = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl border border-slate-200 shadow-sm p-6 ${className}`}>
    {children}
  </div>
);

// ============================================================================
// 4. MAIN PAGE LAYOUT
// ============================================================================
const ViewComplaint = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 p-6 md:p-8 lg:p-10 flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-col gap-6">
        
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Complaint Details</h1>

        {/* --- Top Info Card --- */}
        <SectionCard>
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            {/* Left Data Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4">
              <DetailItem icon={Icons.Hash} label="Case ID" value="EC-2026-045678" />
              <div className="md:col-span-3">
                <DetailItem icon={Icons.DocumentText} label="Complaint Title" value="Online Banking Fraud - Unauthorized Transaction" />
              </div>
              <DetailItem icon={Icons.Tag} label="Crime Type" value="Cyber Fraud" />
              <DetailItem icon={Icons.Calendar} label="Date Filed" value="March 28, 2026" />
              <DetailItem 
                icon={Icons.ExclamationCircle} 
                label="Priority" 
                value={<span className="text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded text-xs font-bold tracking-wide uppercase">High</span>} 
              />
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 mb-1 pl-8">Status</span>
                <span className="bg-[#FF8C00] text-white px-3 py-1 rounded text-xs font-bold tracking-wide uppercase w-max ml-8 shadow-sm">
                  In Progress
                </span>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col gap-3 shrink-0 lg:w-48">
              <button className="w-full bg-[#FF8C00] hover:bg-[#E67E22] text-white font-bold py-2 px-4 rounded-md text-sm transition-all shadow-sm active:scale-[0.98]">
                <Link to={'/PoliceMain/UpdateComplaint'} >Update Status</Link>
              </button>
              
             

              <button className="w-full bg-white border border-emerald-300 text-emerald-600 hover:bg-emerald-50 font-bold py-2 px-4 rounded-md text-sm transition-all shadow-sm active:scale-[0.98]">
                Mark as Resolved
              </button>
            </div>
          </div>
        </SectionCard>

        {/* --- Middle Row: Complainant Details & Description --- */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-6">
          
          {/* Complainant Details */}
          <SectionCard>
            <h2 className="text-lg font-bold text-[#FF8C00] mb-6 border-b border-slate-100 pb-2">Complainant Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              <DetailItem icon={Icons.User} label="Name" value="Rajesh Kumar Sharma" />
              <DetailItem icon={Icons.Phone} label="Contact Number" value="+91 98765 43210" />
              <DetailItem icon={Icons.Mail} label="Email" value="rajesh.sharma@email.com" />
              <DetailItem icon={Icons.MapPin} label="Address" value="123, Green Park Extension, Sector 21, New Delhi - 110016" valueClass="text-slate-900 font-medium leading-relaxed" />
            </div>
          </SectionCard>

          {/* Description & Evidence */}
          <SectionCard className="flex flex-col">
            <h2 className="text-lg font-bold text-[#FF8C00] mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
               <Icons.DocumentText /> Complaint Description
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-1">
              On March 25, 2026, at approximately 2:30 PM, I noticed unauthorized transactions totaling ₹85,000 from my savings account (Account No: XXXX1234) at State Bank. The transactions were made through an online banking portal which I did not initiate. I immediately contacted the bank and reported the incident. The bank has temporarily frozen my account. I received suspicious SMS messages claiming to be from the bank asking for OTP verification, which I now suspect was a phishing attempt. I have preserved all SMS records and email communications as evidence.
            </p>
            
            <div className="mt-auto">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                 <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.5.75S8.75 10.164 8.75 9.75 8.918 9 9.25 9s.5.336.5.75zm5.5 0c0 .414-.168.75-.5.75s-.5-.336-.5-.75.168-.75.5-.75.5.336.5.75z" /></svg>
                 Attached Evidence
              </h3>
              <div className="flex flex-wrap">
                <FilePill icon={Icons.PdfFile} name="bank_statement.pdf" />
                <FilePill icon={Icons.ImageFile} name="suspicious_sms_screenshot.jpg" />
                <FilePill icon={Icons.PdfFile} name="bank_complaint_receipt.pdf" />
              </div>
            </div>
          </SectionCard>

        </div>

        {/* --- Police Action Timeline (PURE FLEXBOX) --- */}
        <SectionCard>
          <h2 className="text-lg font-bold text-[#FF8C00] mb-6 border-b border-slate-100 pb-2">Police Action Timeline</h2>
          
          <div className="flex flex-col">
            {timelineData.map((item, index) => {
              const isLast = index === timelineData.length - 1;
              const IconComp = item.icon;
              
              return (
                <div key={item.id} className="flex group">
                  
                  {/* Left Column: Icon + Flexible Connecting Line */}
                  <div className="flex flex-col items-center mr-6 shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover: ${item.color}`}>
                      <IconComp />
                    </div>
                    {/* The Flex-1 magic: This natively stretches down to fill the height between this icon and the next, based purely on the text content height beside it. */}
                    {!isLast && (
                      <div className="w-0.5 flex-1 bg-slate-200 my-2 group-hover:bg-slate-300 transition-colors"></div>
                    )}
                  </div>

                  {/* Right Column: Content */}
                  <div className={`flex-1 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-8 pt-1`}>
                    <div>
                      <h3 className="text-base font-bold text-slate-800">{item.title}</h3>
                      <p className="text-xs font-medium text-slate-500 mb-2">{item.officer}</p>
                      <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">{item.desc}</p>
                    </div>
                    <div className="flex flex-col md:items-end shrink-0 text-right mt-1 md:mt-0">
                      <span className="text-sm font-bold text-slate-700">{item.date}</span>
                      <span className="text-xs text-slate-500">{item.time}</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </SectionCard>

        {/* --- Add New Action Form --- */}
        <SectionCard>
          <h2 className="text-lg font-bold text-[#FF8C00] mb-6 border-b border-slate-100 pb-2">Add New Action / Update</h2>
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700">Action Notes</label>
              <textarea 
                rows={4} 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-y"
                placeholder="Enter action details, notes, or updates here..."
              ></textarea>
            </div>
            <div>
              <button className="bg-[#FF8C00] hover:bg-[#E67E22] text-white font-bold py-2.5 px-5 rounded-md text-sm transition-all shadow-sm active:scale-[0.98] flex items-center gap-2">
                <Icons.Plus /> Add Update
              </button>
            </div>
          </div>
        </SectionCard>

        {/* --- Case Activity Log Table --- */}
        <SectionCard className="overflow-hidden p-0">
          <div className="p-6 pb-4 border-b border-slate-100">
             <h2 className="text-lg font-bold text-[#FF8C00]">Case Activity Log</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead className="bg-white border-b-2 border-slate-100">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-800 tracking-wide">Action ID</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-800 tracking-wide">Officer Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-800 tracking-wide">Action Taken</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-800 tracking-wide">Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-800 tracking-wide">Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {activityLogData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-slate-800">{row.id}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{row.officer}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{row.action}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{row.date}</td>
                    <td className="px-6 py-4 text-sm text-slate-500 whitespace-normal min-w-[250px]">{row.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

      </div>
    </div>
  );
}

export default ViewComplaint;