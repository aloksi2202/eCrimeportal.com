import React from 'react';
import { Link } from 'react-router-dom';
import {
  HiOutlineShieldCheck,
  HiOutlineEye,
  HiOutlineUser,
  HiOutlineCheckBadge,
  HiOutlineUsers,
  HiOutlineBell,
  HiOutlineCircleStack,
  HiOutlineLockClosed,
  HiOutlineDocumentText,
  HiOutlineArrowRight
} from "react-icons/hi2";

// --- Icon Mapping ---
const IconMap = {
  shield: HiOutlineShieldCheck,
  eye: HiOutlineEye,
  user: HiOutlineUser,
  badgeCheck: HiOutlineCheckBadge,
  users: HiOutlineUsers,
  bell: HiOutlineBell,
  database: HiOutlineCircleStack,
  lock: HiOutlineLockClosed,
  document: HiOutlineDocumentText,
  arrowRight: HiOutlineArrowRight
};

// --- Data ---
const features = [
  { id: 1, title: 'Secure Complaint Registration', desc: 'End-to-end encrypted complaint submission with data protection', icon: 'shield' },
  { id: 2, title: 'Real-time Case Tracking', desc: 'Track your complaint status and updates in real-time', icon: 'eye' },
  { id: 3, title: 'Admin Case Assignment', desc: 'Intelligent case routing to appropriate departments', icon: 'users' },
  { id: 4, title: 'Priority-based Handling', desc: 'Automatic prioritization based on severity and urgency', icon: 'bell' },
  { id: 5, title: 'Notification System', desc: 'Instant alerts on case progress and status changes', icon: 'database' },
  { id: 6, title: 'Data Privacy & Security', desc: 'Military-grade encryption and secure data storage', icon: 'lock' },
];

const steps = [
  { id: 1, title: 'Submit Complaint', desc: 'User files a complaint with complete details', icon: 'document' },
  { id: 2, title: 'Admin Verifies', desc: 'Admin reviews and validates the complaint', icon: 'badgeCheck' },
  { id: 3, title: 'Case Assigned', desc: 'Complaint assigned to relevant police officer', icon: 'users' },
  { id: 4, title: 'Investigation', desc: 'Police investigates and updates progress', icon: 'eye' },
  { id: 5, title: 'Case Resolved', desc: 'Final resolution and case closure', icon: 'badgeCheck' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
      
      {/* 1. Hero Banner */}
      <section className="bg-[#0F172A] py-20 px-6 sm:px-12 lg:px-24 border-b border-slate-800">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              About eCrimePortal
            </h1>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
              A digital platform designed to simplify cybercrime reporting and enhance coordination between citizens and law enforcement.
            </p>
            <Link to={'/UserMain/Complaint'}>
              <button className="bg-[#2A85FF] hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover: hover:shadow-lg hover:shadow-blue-500/30">
                Register Complaint
              </button>
            </Link>
          </div>
          {/* Image Placeholder */}
          <div className="bg-[#1E293B] rounded-2xl h-[300px] lg:h-[400px] flex items-center justify-center border border-slate-700 shadow-2xl p-4">
             <img src="https://i.pinimg.com/1200x/36/7e/a6/367ea6a970a45194410ebe6dcb3e3a86.jpg" alt="Cyber Security" className="rounded-2xl w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 2. About the Platform */}
      <section className="bg-white py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0B132B] mb-6">About the Platform</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              <span className="font-bold text-gray-900">eCrimePortal</span> is a comprehensive digital solution designed to bridge the gap between citizens and law enforcement agencies in reporting and managing cybercrime cases.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              In today's digital age, cybercrimes are rapidly increasing, yet reporting mechanisms remain fragmented and inefficient. Our platform addresses this challenge by providing a centralized, secure, and user-friendly system for cybercrime reporting.
            </p>
            <h3 className="font-bold text-gray-900 text-lg mb-4">Key Benefits:</h3>
            <ul className="space-y-3">
              {[
                'Simplified complaint registration process',
                'Real-time case tracking and status updates',
                'Enhanced coordination between police and citizens',
                'Secure data handling with encryption',
                'Priority-based case assignment'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></div> {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Simulated Right Image */}
          <div className="bg-slate-100 rounded-2xl h-[400px] flex items-center justify-center shadow-inner border border-gray-200">
            <img src="https://images.unsplash.com/photo-1760199789455-49098afd02f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjeWJlcnNlY3VyaXR5JTIwZGlnaXRhbCUyMG5ldHdvcmslMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NjEwMTMwNnww&ixlib=rb-4.1.0&q=80&w=1080" className="rounded-2xl w-full h-full object-cover" alt="Network Security" />
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-[#1A2538] rounded-2xl p-10 hover: transition-transform duration-300 shadow-lg">
            <div className="w-14 h-14 bg-blue-500 text-white rounded-xl flex items-center justify-center mb-6">
              <HiOutlineShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-300 leading-relaxed">
              To provide a reliable and secure platform for reporting and resolving cybercrime efficiently, ensuring every citizen has access to swift justice and protection in the digital world.
            </p>
          </div>
          {/* Vision Card */}
          <div className="bg-[#1A73E8] rounded-2xl p-10 hover:transition-transform duration-300 shadow-lg">
            <div className="w-14 h-14 bg-white text-[#1A73E8] rounded-xl flex items-center justify-center mb-6">
              <HiOutlineEye className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-blue-100 leading-relaxed">
              To build a safer digital ecosystem by strengthening collaboration between citizens and law enforcement agencies, creating a future where cybercrime is efficiently detected, reported, and resolved.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Who Can Use This Platform */}
      <section className="bg-white py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0B132B] mb-4">Who Can Use This Platform</h2>
          <p className="text-gray-500 mb-16 text-lg">Designed for multiple stakeholders in the cybercrime reporting ecosystem</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover: hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <HiOutlineUser className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Citizens / Users</h3>
              <p className="text-gray-500 text-sm">Report cybercrime incidents and track complaint status</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="w-20 h-20 bg-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <HiOutlineCheckBadge className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Police Officers</h3>
              <p className="text-gray-500 text-sm">Investigate assigned cases and update progress</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <HiOutlineShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Admin Authorities</h3>
              <p className="text-gray-500 text-sm">Manage, verify, and assign complaints efficiently</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Features */}
      <section className="py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0B132B] mb-4">Key Features</h2>
          <p className="text-gray-500 mb-16 text-lg">Powerful capabilities designed to streamline cybercrime reporting and management</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {features.map((feature) => {
              const FeatureIcon = IconMap[feature.icon];
              return (
                <div key={feature.id} className="bg-white border border-gray-100 rounded-2xl p-8 hover: hover:border-blue-200 transition-all duration-300 shadow-sm">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6">
                    <FeatureIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    
      <section className="bg-slate-50 py-24 px-6 sm:px-12 lg:px-24 ">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0B132B] mb-4">How the System Works</h2>
          <p className="text-gray-500 mb-16 text-lg">Simple 5-step process from complaint to resolution</p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, idx) => {
              const StepIcon = IconMap[step.icon];
              return (
                <div key={step.id} className="flex flex-col items-center">
                  
                  {/* Timeline Row */}
                  <div className="flex items-center w-full mb-8">
                    {/* Left connecting line */}
                    <div className={`h-[3px] flex-1 ${idx === 0 ? 'bg-transparent' : 'bg-blue-500'}`}></div>
                    
                    {/* Step Icon and Number Badge */}
                    <div className="flex items-start ">
                      <div className="w-16 h-16 bg-[#1A73E8] text-white rounded-full flex items-center justify-center border-4 border-white ">
                        <StepIcon className="w-7 h-7" />
                      </div>
                      {/* Native overlapping using negative margin */}
                      <div className="w-7 h-7 bg-[#0F172A] text-white rounded-full flex items-center justify-center text-xs font-bold -ml-4 -mt-2 ">
                        {step.id}
                      </div>
                    </div>

                    {/* Right connecting line */}
                    <div className={`h-[3px] flex-1 ${idx === steps.length - 1 ? 'bg-transparent' : 'bg-blue-500'}`}></div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover: transition-all duration-300 w-full h-full text-center">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">{step.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <section className="bg-gradient-to-r from-[#1A56FF] to-[#0F47DB] py-20 px-6 text-center">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Take a step towards a safer digital world
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Report cybercrime incidents quickly and securely
          </p>
          <Link to={'/UserMain/Complaint'}>
            <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover: hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
              Report a Crime Now <HiOutlineArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

    </div>
  )
}

export default About;