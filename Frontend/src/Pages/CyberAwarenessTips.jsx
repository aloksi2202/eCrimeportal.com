import React, { useState } from 'react';
import { 
  HiOutlineShieldCheck, 
  HiOutlineLockClosed, 
  HiOutlineExclamationTriangle,
  HiOutlineEnvelope,
  HiOutlineShoppingCart,
  HiOutlineUserMinus,
  HiOutlineDevicePhoneMobile,
  HiOutlineWifi,
  HiOutlineBugAnt,
  HiOutlineInformationCircle,
  HiOutlineDocumentText,
  HiOutlineComputerDesktop,
  HiOutlineBookOpen,
  HiOutlineArrowDownTray,
  HiOutlineBell
} from 'react-icons/hi2';


const Icons = {
  // Hero Icons
  ShieldHero: () => <HiOutlineShieldCheck className="w-32 h-32 text-white " strokeWidth={1.5} />,
  LockHero: () => <HiOutlineLockClosed className="w-16 h-16 text-blue-200" strokeWidth={1.5} />,
  WarningHero: () => <HiOutlineExclamationTriangle className="w-16 h-16 text-orange-400" strokeWidth={1.5} />,
  
  // Featured Tips Icons
  Mail: () => <HiOutlineEnvelope className="w-6 h-6 text-white" strokeWidth={2} />,
  Lock: () => <HiOutlineLockClosed className="w-6 h-6 text-white" strokeWidth={2} />,
  Shield: () => <HiOutlineShieldCheck className="w-6 h-6 text-white" strokeWidth={2} />,
  Cart: () => <HiOutlineShoppingCart className="w-6 h-6 text-white" strokeWidth={2} />,
  UserX: () => <HiOutlineUserMinus className="w-6 h-6 text-white" strokeWidth={2} />,
  Smartphone: () => <HiOutlineDevicePhoneMobile className="w-6 h-6 text-white" strokeWidth={2} />,
  Wifi: () => <HiOutlineWifi className="w-6 h-6 text-white" strokeWidth={2} />,
  Bug: () => <HiOutlineBugAnt className="w-6 h-6 text-white" strokeWidth={2} />,
  
  Warning: () => <HiOutlineExclamationTriangle className="w-5 h-5" strokeWidth={2.5} />,
  Info: () => <HiOutlineInformationCircle className="w-5 h-5" strokeWidth={2.5} />,
  DocumentText: () => <HiOutlineDocumentText className="w-6 h-6 text-white" strokeWidth={2} />,
  MonitorPlay: () => <HiOutlineComputerDesktop className="w-6 h-6 text-white" strokeWidth={2} />,
  BookOpen: () => <HiOutlineBookOpen className="w-6 h-6 text-white" strokeWidth={2} />,
  ArrowDownTray: () => <HiOutlineArrowDownTray className="w-6 h-6 text-white" strokeWidth={2} />,
  Bell: () => <HiOutlineBell className="w-8 h-8 text-white" strokeWidth={2} />,
};


const safetyTips = [
  { title: "Phishing Email Detection", icon: Icons.Mail, color: "bg-blue-600", desc: "Phishing emails are fraudulent messages designed to trick you into revealing sensitive information like passwords, credit card numbers, or personal data. Be cautious of emails with urgent language, spelling errors, suspicious sender addresses, or unexpected attachments. Legitimate organizations never ask for sensitive data via email." },
  { title: "Strong Password Practices", icon: Icons.Lock, color: "bg-green-600", desc: "Strong passwords are essential for protecting your accounts. Use at least 12 characters combining uppercase and lowercase letters, numbers, and special symbols. Avoid using personal information, common words, or predictable patterns. Consider using a password manager to securely store unique passwords for each service." },
  { title: "Social Media Safety", icon: Icons.Shield, color: "bg-purple-600", desc: "Social media platforms can expose personal information if not properly secured. Review and adjust your privacy settings to control who can see your posts and personal details. Be cautious about sharing location data publicly. Verify friend requests from unknown people and report accounts that impersonate others." },
  { title: "Safe Online Transactions", icon: Icons.Cart, color: "bg-orange-500", desc: "When shopping online, only use secure websites with 'https://' in the URL and a padlock icon. Shop with reputable retailers and avoid deals that seem too good to be true. Use credit cards rather than debit cards for better fraud protection. Review bank statements regularly for unauthorized charges." },
  { title: "Identity Theft Prevention", icon: Icons.UserX, color: "bg-red-600", desc: "Identity theft occurs when someone uses your personal information without permission. Protect yourself by securing important documents, monitoring financial statements regularly, and being cautious about sharing personal information. Shred documents containing sensitive data before disposal." },
  { title: "Mobile Security", icon: Icons.Smartphone, color: "bg-indigo-500", desc: "Mobile devices contain vast amounts of personal data. Always use screen locks with strong PINs or biometric authentication. Keep your operating system updated to patch vulnerabilities. Only download apps from official stores and review permissions before installing. Avoid storing passwords in plain text." },
  { title: "Public Wi-Fi Risks", icon: Icons.Wifi, color: "bg-yellow-500", desc: "Public Wi-Fi networks are convenient but often unsecured, making them risky for transmitting sensitive information. Avoid accessing banking or email accounts on public networks. If you must use public Wi-Fi, use a Virtual Private Network (VPN) to encrypt your connection." },
  { title: "Malware & Ransomware Awareness", icon: Icons.Bug, color: "bg-pink-500", desc: "Malware is malicious software designed to damage systems, while ransomware encrypts your files and demands payment. Protect yourself by installing reputable antivirus software and keeping it updated. Never download files from untrusted sources. Regularly backup important data to cloud storage." }
];

const threatAlerts = [
  { title: "Fake Job Recruitment Scams", level: "HIGH RISK", type: "high", desc: "Scammers are impersonating legitimate companies to collect personal information and money from job seekers. Always verify job offers through official channels." },
  { title: "Banking Fraud via SMS", level: "HIGH RISK", type: "high", desc: "Fraudulent messages claiming to be from banks asking to verify account details. Banks never ask for sensitive information via SMS." },
  { title: "OTP Sharing Scams", level: "MEDIUM RISK", type: "medium", desc: "Attackers posing as customer service representatives requesting OTPs. Never share one-time passwords with anyone." },
  { title: "Social Engineering Attacks", level: "MEDIUM RISK", type: "medium", desc: "Manipulative tactics used to trick individuals into revealing confidential information. Stay vigilant and verify all requests." },
  { title: "QR Code Payment Fraud", level: "LOW RISK", type: "low", desc: "Fake QR codes replacing legitimate ones to redirect payments. Always verify payment details before scanning." }
];

const educationalResources = [
  { title: "Understanding Phishing Scams", icon: Icons.DocumentText, color: "bg-blue-500", desc: "Phishing is a fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity. Learn to identify suspicious emails by checking sender addresses, looking for urgent language, and verifying links before clicking." },
  { title: "How to Spot Fake Websites", icon: Icons.MonitorPlay, color: "bg-purple-500", desc: "Fake websites mimic legitimate sites to steal your credentials and financial information. Always verify the URL starts with 'https://', check for proper spelling, look for trust badges, and be cautious of unrealistic deals." },
  { title: "Complete Password Security Guide", icon: Icons.BookOpen, color: "bg-green-500", desc: "Strong passwords are your first line of defense. Create passwords with at least 12 characters using a mix of letters, numbers, and special characters. Enable two-factor authentication wherever possible." },
  { title: "Cybersecurity Checklist", icon: Icons.ArrowDownTray, color: "bg-orange-500", desc: "A comprehensive downloadable checklist covering essential security practices: regular software updates, antivirus protection, secure Wi-Fi configuration, data backup procedures, and safe browsing habits." }
];


export default function CyberAwarenessTips() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with ${email}!`);
      setEmail('');
    }
  };

  const getAlertStyles = (type) => {
    if (type === 'high') return { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-900', icon: 'bg-red-600 text-white', badge: 'bg-red-600 text-white', Icon: Icons.Warning };
    if (type === 'medium') return { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-900', icon: 'bg-orange-500 text-white', badge: 'bg-orange-500 text-white', Icon: Icons.Warning };
    return { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-900', icon: 'bg-yellow-500 text-white', badge: 'bg-yellow-500 text-white', Icon: Icons.Info };
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen pb-20">
      
    
      <section className="bg-blue-600 w-full px-6 py-20 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-start max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cyber Awareness Tips</h1>
          <p className="text-lg text-blue-100 mb-8">Stay informed. Stay secure. Protect yourself from cyber threats.</p>
          <button className="bg-orange-500 hover:bg-orange-600 hover:transition-all duration-300 text-white font-semibold py-3 px-8 rounded-lg shadow-lg">
            Explore Safety Tips
          </button>
        </div>
      
        <div className="flex items-center gap-6 shrink-0">
          <Icons.ShieldHero />
          <div className="flex flex-col gap-6">
            <Icons.LockHero />
            <Icons.WarningHero />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24 mt-20">
        
   
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Safety Tips</h2>
            <p className="text-slate-500">Essential cybersecurity knowledge to protect yourself online</p>
          </div>
          <div className="flex flex-col gap-4">
            {safetyTips.map((tip, idx) => {
              const IconComp = tip.icon;
              return (
                <div key={idx} className="flex flex-col sm:flex-row items-start gap-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover: transition-all duration-300">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${tip.color} shadow-sm`}>
                    <IconComp />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{tip.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{tip.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

     
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="text-red-600"><Icons.Warning /></div>
            <h2 className="text-2xl font-bold text-slate-900">Latest Cyber Threat Alerts</h2>
          </div>
          <div className="flex flex-col gap-4">
            {threatAlerts.map((alert, idx) => {
              const styles = getAlertStyles(alert.type);
              const AlertIcon = styles.Icon;
              return (
                <div key={idx} className={`flex flex-col sm:flex-row items-start gap-5 p-5 rounded-xl border ${styles.bg} ${styles.border} hover:shadow-md transition-shadow duration-300`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${styles.icon}`}>
                    <AlertIcon />
                  </div>
                  <div className="flex flex-col">
                    {/* Badge and Title aligned natively with flex */}
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className={`text-base font-bold ${styles.text}`}>{alert.title}</h3>
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${styles.badge}`}>
                        {alert.level}
                      </span>
                    </div>
                    <p className={`${styles.text} text-sm  leading-relaxed`}>{alert.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Educational Resources</h2>
            <p className="text-slate-500">Comprehensive guides and tutorials to enhance your cyber awareness</p>
          </div>
          <div className="flex flex-col gap-5">
            {educationalResources.map((resource, idx) => {
              const ResourceIcon = resource.icon;
              return (
                <div key={idx} className="flex flex-col sm:flex-row items-start gap-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 cursor-pointer">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${resource.color}`}>
                    <ResourceIcon />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{resource.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{resource.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

       
        <section className="bg-blue-600 rounded-3xl p-10 md:p-16 flex flex-col items-center text-center shadow-xl">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <Icons.Bell />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated on Cyber Threats</h2>
          <p className="text-blue-100 text-sm md:text-base mb-10 max-w-2xl">
            Subscribe to receive the latest security alerts, tips, and government advisories directly in your inbox.
          </p>
          
       
        </section>

      </div>
    </div>
  );
}