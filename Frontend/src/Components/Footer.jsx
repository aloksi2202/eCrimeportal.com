import React from 'react'




const MapPinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.018a13.783 13.783 0 01-6.108-6.108l2.018-1.514c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd" />
  </svg>
);

const HelpIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
  </svg>
);

const Footer = () => {
  return (
    <div><footer className="bg-[#0D1525] text-[#9BA4B5] font-sans">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white font-bold text-xl rounded px-2.5 py-1.5 flex items-center justify-center">
                eC
              </div>
              <span className="text-white text-2xl font-bold tracking-wide">
                eCrimePortal
              </span>
            </div>
            <p className="text-[#9BA4B5] text-sm leading-relaxed max-w-sm">
              A secure and efficient platform to report cybercrime incidents, track
              complaint status, and access cybersecurity awareness resources.
              Making the digital world safer for everyone.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="/Home" className="hover:text-white transition-colors duration-200 block">Home</a>
              </li>
              <li>
                <a href="/Services" className="hover:text-white transition-colors duration-200 block">Services</a>
              </li>
              <li>
                <a href="TrackComplaintFirst" className="hover:text-white transition-colors duration-200 block">Track Complaint</a>
              </li>
              <li>
                <a href="ContactUs" className="hover:text-white transition-colors duration-200 block">Contact</a>
              </li>
              <li>
                <a href="ContactUs" className="hover:text-white transition-colors duration-200 block">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">
                  Cyber Crime Investigation Cell,<br />
                  Police Headquarters, New Delhi,<br />
                  India - 110001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-sm">1930 (Helpline)</span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-blue-400 shrink-0" />
                <a href="mailto:support@ecrimeportal.gov.in" className="text-sm hover:text-white transition-colors duration-200">
                  support@ecrimeportal.gov.in
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect With Us & Emergency */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Connect With Us</h3>
            <p className="text-sm mb-6 max-w-xs">
              Follow us on social media for updates and cybersecurity tips
            </p>
            
            {/* Social Icons Container */}
            <div className="flex gap-3 mb-8">
              <a href="#" className="p-2.5 rounded-lg border border-[#2B354D] bg-[#1A2235] text-gray-300 hover:text-white hover:border-gray-400 transition-all duration-200 flex items-center justify-center group">
                <FacebookIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-2.5 rounded-lg border border-[#2B354D] bg-[#1A2235] text-gray-300 hover:text-white hover:border-gray-400 transition-all duration-200 flex items-center justify-center group">
                <TwitterIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-2.5 rounded-lg border border-[#2B354D] bg-[#1A2235] text-gray-300 hover:text-white hover:border-gray-400 transition-all duration-200 flex items-center justify-center group">
                <LinkedInIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-2.5 rounded-lg border border-[#2B354D] bg-[#1A2235] text-gray-300 hover:text-white hover:border-gray-400 transition-all duration-200 flex items-center justify-center group">
                <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Emergency Helpline Box */}
            <div className="bg-[#1A233A] rounded-xl p-5 border border-[#242E46]">
              <p className="text-sm text-gray-300 mb-1">Emergency Helpline</p>
              <p className="text-3xl font-extrabold text-[#00E676] tracking-wide">1930</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-16 pt-8 border-t border-[#1C253B] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">
            © 2026 eCrimePortal. All rights reserved. | Government of India Initiative
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-sm hover:text-white transition-colors duration-200">
              Accessibility
            </a>
            
            {/* Help / Floating Action Button */}
            <button className="ml-2 w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#1A233A] hover:text-white hover:border-gray-400 transition-all duration-200 group">
              <HelpIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
    </div>
  )
}

export default Footer