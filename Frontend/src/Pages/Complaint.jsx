import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

// --- Static Data & Mocks ---
const statusData = [
  { step: 1, title: 'Complaint Submitted', date: '01 Apr 2026', status: 'completed' },
  { step: 2, title: 'Under Review', date: '02 Apr 2026', status: 'completed' },
  { step: 3, title: 'Investigation', date: '03 Apr 2026', subtitle: 'In Progress', status: 'in_progress' },
  { step: 4, title: 'Action Taken', status: 'pending' },
  { step: 5, title: 'Closed / Resolved', status: 'pending' },
];

const mockOptions = {
  idProof: ['Aadhar Card'],
  crimeCategory: ['Theft', 'Assault', 'Fraud', 'Cyber Crime', 'Property Damage']
};

// --- Custom Icon Components ---
const CustomIcon = ({ path, className = "w-6 h-6", color = "currentColor", strokeWidth=1.5 }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24" strokeWidth={strokeWidth}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const Icons = {
  Check: { path: "M4.5 12.75l6 6 9-13.5", className: "w-5 h-5", color: "#fff", strokeWidth: 3 },
  Clock: { path: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
  Warning: { path: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" },
  ChevronDown: { path: "M19.5 8.25l-7.5 7.5-7.5-7.5", className: "w-5 h-5" },
  MapPin: { path: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
  Calendar: { path: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" },
  User: { path: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z M4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" },
  Email: { path: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" },
  Phone: { path: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.018a13.783 13.783 0 01-6.108-6.108l2.018-1.514c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" },
  Hash: { path: "M5.25 8.25h15m-16.5 7.5h15m-1.875 5.25L16.5 3m-9.75 18L9 3" },
  Info: { path: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" },
  ShieldCheck: { path: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
  Upload: { path: "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" },
  DocumentText: { path: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" },
  FilePlus: { path: "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" },
  ArrowPath: { path: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" },
  ChatBubbleCheck: { path: "M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.028z" }
};

const requiredFields = {
  fullName: 'Full Name',
  email: 'Email Address',
  phone: 'Phone Number',
  idProofType: 'ID Proof Type',
  address: 'Address',
  idProofNumber: 'ID Proof Number',
  complaintTitle: 'Complaint Title',
  crimeCategory: 'Crime Category',
  incidentLocation: 'Incident Location',
  incidentDate: 'Date of Incident',
  incidentTime: 'Time of Incident',
  declaration: 'Declaration'
};

// =========================================================================
// UI COMPONENTS
// =========================================================================

const Label = ({ htmlFor, text, required }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
    {text} {required && <span className="text-red-500">*</span>}
  </label>
);

const InputWrapper = ({ icon, children }) => (
  <div className="">
    <div className=" inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
      {icon}
    </div>
    {children}
  </div>
);

const FormInput = ({ icon, type = "text", ...props }) => (
  <InputWrapper icon={icon}>
    <input
      type={type}
      className="block w-full rounded-lg border border-gray-200 pl-11 pr-3.5 py-3 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition duration-150"
      {...props}
    />
  </InputWrapper>
);

const FormSelect = ({ icon, options, ...props }) => (
  <div className="">
    <InputWrapper icon={icon}>
      <select
        className="block w-full appearance-none rounded-lg border border-gray-200 pl-11 pr-10 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition duration-150 cursor-pointer"
        {...props}
      >
        <option value="" disabled>{`Select ${requiredFields[props.id] || props.id}`}</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </InputWrapper>
    <div className=" inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-400">
      <CustomIcon {...Icons.ChevronDown} />
    </div>
  </div>
);

const FormCard = ({ icon, step, title, subtitle, children }) => (
  <section className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm mb-6 scroll-mt-20 w-full">
    <div className="flex items-start gap-4 mb-6 border-b border-gray-100 pb-5">
      <div className={`p-3.5 rounded-xl border ${step ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-100'}`}>
        <div className={`${step ? 'text-blue-600' : 'text-gray-400'}`}>{icon}</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          {step && <span className="text-blue-600 font-mono text-lg">{step}.</span>}
          {title}
        </h2>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      </div>
    </div>
    <div className="space-y-6">
      {children}
    </div>
  </section>
);


// =========================================================================
// MAIN COMPONENT
// =========================================================================

const Complaint = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [charCount, setCharCount] = useState(0);

  const [formValues, setFormValues] = useState({
    fullName: '', email: '', phone: '', idProofType: '', address: '', idProofNumber: '',
    complaintTitle: '', crimeCategory: '', incidentLocation: '', incidentDate: '',
    incidentTime: '', incidentDescription: '', declaration: false
  });

  // --- UPDATED INPUT HANDLER ---
  const handleInputChange = (e) => {
    const { id, type, checked } = e.target;
    let value = e.target.value;

    // 1. Restrict Full Name and Complaint Title to Letters & Spaces ONLY
    if (id === 'fullName' || id === 'complaintTitle') {
      value = value.replace(/[^a-zA-Z\s]/g, '');
    }

    // 2. Restrict Phone Number to Numbers ONLY
    if (id === 'phone') {
      value = value.replace(/[^0-9]/g, '');
    }

    // Update state with the cleaned value
    setFormValues(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));

    if (id === 'incidentDescription') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formValues);
    
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const newFiles = Array.from(e.dataTransfer.files).map(file => ({
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`
    }));
    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const handleFileSelect = (e) => {
    const newFiles = Array.from(e.target.files).map(file => ({
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`
    }));
    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const handleReset = () => {
    setFormValues({
      fullName: '', email: '', phone: '', idProofType: '', address: '', idProofNumber: '',
      complaintTitle: '', crimeCategory: '', incidentLocation: '', incidentDate: '',
      incidentTime: '', incidentDescription: '', declaration: false
    });
    setUploadedFiles([]);
    setCharCount(0);
  };
  
  const registerComplaint=async()=>{
    let link = "http://localhost:8080/user/register-complaint"
    const response=await fetch(link,{
      method: "POST",
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type":"application/json"
      },
      body: JSON.stringify({ fullName : formValues.fullName ,mobile:formValues.fullName , email:formValues.email,address:formValues.address,aadharNumber:formValues.idProofNumber,category:formValues.crimeCategory,complaintTitle:formValues.complaintTitle,location:formValues.incidentLocation,date:formValues.incidentDate,time:formValues.incidentTime,description:formValues.incidentDescription
      })
    });
    const result=await response.text();
    if(result==="Successfully"){
      alert("Compalint registration: "+result)
    }
    alert("Compalint registration: Failed")
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="max-w-360 mx-auto px-4 md:px-6 py-12 lg:grid lg:grid-cols-[1fr,320px] lg:gap-10 xl:gap-14">
        <div className="lg:max-w-225 w-full mx-auto">
          
          <div className="text-center mb-10 px-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">Register Your Complaint</h1>
            <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">Provide accurate details to help us take quick action against law enforcement and support your case.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* 1. Complainant Details */}
            <FormCard step={1} icon={<CustomIcon {...Icons.User} />} title="Complainant Details" subtitle="Please provide your personal information for verification.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <div>
                  <Label htmlFor="fullName" text="Full Name" required />
                  <FormInput id="fullName" value={formValues.fullName} onChange={handleInputChange} 
                  type="text" placeholder="Enter your full name" icon={<CustomIcon {...Icons.User} className="w-5 h-5" />} required />
                </div>
                <div>
                  <Label htmlFor="email" text="Email Address" required />
                  <FormInput id="email" type="email" value={formValues.email} onChange={handleInputChange} placeholder="your.email@example.com" icon={<CustomIcon {...Icons.Email} className="w-5 h-5" />} required />
                </div>
                <div>
                  <Label htmlFor="phone" text="Phone Number" required />
                  <FormInput id="phone" type="tel" value={formValues.phone}  onChange={handleInputChange} placeholder="10-digit mobile number" icon={<CustomIcon {...Icons.Phone} className="w-5 h-5" />} required  />
                </div>
                <div>
                  <Label htmlFor="idProofType" text="ID Proof Type" required />
                  <FormSelect id="idProofType" value={formValues.idProofType} onChange={handleInputChange} options={mockOptions.idProof} icon={<CustomIcon {...Icons.ShieldCheck} className="w-5 h-5" />} required />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address" text="Address" required />
                  <InputWrapper icon={<CustomIcon {...Icons.MapPin} className="w-5 h-5" />}>
                    <textarea id="address" value={formValues.address} onChange={handleInputChange} rows={3} placeholder="Enter your complete address" className="block w-full rounded-lg border border-gray-200 pl-11 pr-3.5 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition duration-150 resize-y" required />
                  </InputWrapper>
                </div>
                <div>
                  <Label htmlFor="idProofNumber" text="ID Proof Number" required />
                  <FormInput id="idProofNumber" value={formValues.idProofNumber} onChange={handleInputChange} placeholder="Enter your ID proof number" icon={<CustomIcon {...Icons.Hash} className="w-5 h-5" />} required />
                </div>
              </div>
            </FormCard>

            {/* 2. Complaint Details */}
            <FormCard step={2} icon={<CustomIcon {...Icons.Info} />} title="Complaint Details" subtitle="Provide specific information about the incident.">
              <div className="space-y-5">
                <div>
                  <Label htmlFor="complaintTitle" text="Complaint Title" required />
                  {/* Applied letter restriction to Complaint Title in handler */}
                  <FormInput id="complaintTitle" value={formValues.complaintTitle} onChange={handleInputChange} placeholder="Brief title for your complaint" icon={<CustomIcon {...Icons.DocumentText} className="w-5 h-5" />} required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  <div>
                    <Label htmlFor="crimeCategory" text="Crime Category" required />
                    <FormSelect id="crimeCategory" value={formValues.crimeCategory} onChange={handleInputChange} options={mockOptions.crimeCategory} icon={<CustomIcon {...Icons.ShieldCheck} className="w-5 h-5" />} required />
                  </div>
                  <div>
                    <Label htmlFor="incidentLocation" text="Incident Location" required />
                    <FormInput id="incidentLocation" value={formValues.incidentLocation} onChange={handleInputChange} placeholder="Where did this occur?" icon={<CustomIcon {...Icons.MapPin} className="w-5 h-5" />} required />
                  </div>
                  <div>
                    <Label htmlFor="incidentDate" text="Date of Incident" required />
                    <FormInput id="incidentDate" type="date" value={formValues.incidentDate} onChange={handleInputChange} icon={<CustomIcon {...Icons.Calendar} className="w-5 h-5" />} required />
                  </div>
                  <div>
                    <Label htmlFor="incidentTime" text="Time of Incident" required />
                    <FormInput id="incidentTime" type="time" value={formValues.incidentTime} onChange={handleInputChange} icon={<CustomIcon {...Icons.Clock} className="w-5 h-5" />} required />
                  </div>
                </div>
              </div>
            </FormCard>

            {/* 3. Detailed Description */}
            <FormCard step={3} icon={<CustomIcon {...Icons.DocumentText} />} title="Detailed Description" subtitle="Describe the incident with all relevant details.">
              <div>
                <Label htmlFor="incidentDescription" text="Incident Description" required />
                <textarea id="incidentDescription" value={formValues.incidentDescription} onChange={handleInputChange} rows={6} placeholder="Describe the incident clearly with all relevant details..." className="block w-full rounded-lg border border-gray-200 p-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition duration-150 resize-y" required />
                <div className="flex justify-end mt-1.5">
                  <span className={`text-xs ${charCount < 20 ? 'text-red-500 font-medium' : 'text-gray-500'}`}>{charCount} / 20 minimum characters</span>
                </div>
              </div>
            </FormCard>

            {/* 4. Evidence Upload */}
            <FormCard step={4} icon={<CustomIcon {...Icons.Upload} />} title="Evidence Upload" subtitle="Upload supporting documents, images, or screenshots (Optional)">
              <div 
                className={`border-2 border-dashed rounded-2xl p-10 text-center transition ${dragOver ? 'border-blue-400 bg-blue-50' : 'border-gray-200 bg-gray-50'}`}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleFileDrop}
              >
                <CustomIcon {...Icons.Upload} className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-800">Drag and drop files here, or <button type="button" onClick={() => fileInputRef.current.click()} className="text-blue-600 hover:text-blue-700">click to browse</button></p>
                <p className="text-sm text-gray-500 mt-2">Supported formats: JPG, PNG, GIF, PDF</p>
                <input type="file" multiple ref={fileInputRef} className="hidden" onChange={handleFileSelect} />
              </div>
            </FormCard>

            {/* 5. Declaration */}
            <FormCard step={5} icon={<CustomIcon {...Icons.ShieldCheck} />} title="Declaration" subtitle="Confirm the truthfulness of the information provided.">
                <div className="flex items-start gap-3.5 p-5 border border-gray-100 bg-gray-50 rounded-xl cursor-pointer hover:border-gray-200 transition" onClick={() => handleInputChange({ target: { id: 'declaration', type: 'checkbox', checked: !formValues.declaration }})}>
                    <input type="checkbox" id="declaration" checked={formValues.declaration} onChange={handleInputChange} className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-100 mt-0.5" required />
                    <label htmlFor="declaration" className="text-sm text-gray-800 leading-relaxed cursor-pointer flex-1">I confirm that the information provided is true and accurate.<span className="text-red-500">*</span></label>
                </div>
            </FormCard>

            {/* Submit Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3.5 mt-8 border-t border-gray-100 pt-8 pb-10">
                <button type="button" onClick={handleReset} className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-900 px-6 py-3.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 active:scale-[0.98] transition">
                    <CustomIcon {...Icons.ArrowPath} className="w-5 h-5 text-gray-400" />
                    Reset Form
                </button>
                <button onClick={registerComplaint} type="submit" className="flex items-center justify-center gap-2.5 text-sm font-semibold text-white px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition">
                    <CustomIcon {...Icons.ChatBubbleCheck} className="w-5 h-5"/>
                    Submit Complaint
                </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Complaint;