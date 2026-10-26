import React from 'react'
import { Link } from 'react-router-dom';





const DocumentIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const ChartTrendingIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);

const HistoryIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
  </svg>
);

const BookIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);


const services = [
  {
    id: 1,
    title: 'File Complaint',
    description: 'Submit a detailed report of your cybercrime incident with necessary evidence and documentation.',
    icon: DocumentIcon,
    bgClass: 'bg-blue-100',
    colorClass: 'text-blue-600',
    click:'/UserMain/Complaint'
  },
  {
    id: 2,
    title: 'Track Complaint',
    description: 'Monitor the real-time status of your complaint and receive updates on investigation progress.',
    icon: ChartTrendingIcon,
    bgClass: 'bg-green-100',
    colorClass: 'text-green-600',
     click:'/UserMain/TrackComplaintFirst'
  },
  {
    id: 3,
    title: 'View Complaint History',
    description: 'Access all your previously filed complaints and their resolution history in one place.',
    icon: HistoryIcon,
    bgClass: 'bg-purple-100',
    colorClass: 'text-purple-600',
     click:'/UserMain/RecentComplaints'
  },
  {
    id: 4,
    title: 'Cyber Awareness Tips',
    description: 'Learn about the latest cyber threats, prevention techniques, and best practices for online safety.',
    icon: BookIcon,
    bgClass: 'bg-orange-100',
    colorClass: 'text-orange-500',
     click:'/UserMain/CyberAwarenessTips'
  },
];



const Home = () => {
  return (
    <div>
      <div className=" flex items-center justify-center p-6 lg:p-12 font-sans bg-gray-50">
      
      {/* Main Container */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Column: Content */}
        <div className="flex flex-col items-start w-full lg:w-1/2">
          
          {/* Top Badge */}
          <div className="flex items-center gap-2 bg-[#FFF4ED] text-[#FF6B00] px-4 py-1.5 rounded-full text-sm font-medium mb-8 cursor-default hover:bg-[#FFE8D6] transition-colors">
            <span className="font-bold text-[#FF6B00]">IN</span>
            <span>Serving the Nation</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#0F172A] leading-tight mb-6">
            Report and Track <br />
            <span className="text-blue-600">Cyber Crimes</span> Easily
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
            A secure and efficient platform to report cybercrime incidents,
            track complaint status, and access cybersecurity awareness
            resources. Together, we make the digital world safer for
            everyone.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
             <Link to={'/UserMain/Complaint'}> Register Complaint</Link>
            </button>

            <button className="flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
             <Link to={'/UserMain/TrackComplaintFirst'}> Track Complaint</Link>
            </button>
          </div>
        </div>

        {/* Right Column: Clean Flexbox Card */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          
          {/* Card Container - No Absolute, No Relative, No Negative Margins */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8 flex flex-col gap-6 w-full max-w-md hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-shadow duration-300">
            
            {/* Top Row: Icon + Secure Badge */}
            <div className="flex justify-between items-start">
              <div className="bg-[#EBF3FF] text-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="bg-[#00C853] text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Secure
              </div>
            </div>

            {/* Main Text Content */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Complaint Filing</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                File your complaint in just a few minutes with our simplified process.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <div className="bg-blue-600 h-full w-[75%] rounded-full"></div>
              </div>
              <span className="text-xs font-bold text-gray-500">75%</span>
            </div>

            {/* Footer Row: 24/7 Support Badge */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="bg-[#FF6B00] text-white px-4 py-1.5 rounded-full text-sm font-bold">
                24/7 Support
              </div>
              <span className="text-sm text-gray-400 font-medium">Always Online</span>
            </div>

          </div>
        </div>

      </div>
    </div>



<section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B132B] mb-4 text-center">
          Our Services
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl text-center mb-16 leading-relaxed">
          Comprehensive tools and resources to help you report, track, and understand cybercrime incidents
        </p>

        {/* Grid Layout for Cards (No absolute/relative used) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {services.map((service) => {
            const IconComponent = service.icon;
            
            return (
              // Card Container
              // Uses flex flex-col to push the link to the bottom natively
              <div 
                key={service.id}
                className="group flex flex-col bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover: transition-all duration-300 ease-out cursor-pointer"
              >
                
                {/* Icon Box */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.bgClass} ${service.colorClass}`}>
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                {/* flex-grow ensures this paragraph takes up available space, pushing the link down evenly across all cards */}
                <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Action Link */}
         <Link to={service.click}

  className="inline-flex items-center text-sm font-semibold transition-opacity hover:opacity-80"
  style={{ color: service.colorClass }}
>
  <div>Learn More</div>
  <ArrowRightIcon className="ml-1" />
</Link>

              </div>
            );
          })}

        </div>
      </div>
    </section>



    </div>
  )
}

export default Home