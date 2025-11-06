
import React, { useState } from 'react';

const securityData = [
    {
        title: "Infrastructure Security",
        content: "Our platform is hosted on Amazon Web Services (AWS), a secure, world-class data center environment that is certified for ISO 27001, PCI-DSS Level 1, and SOC 2. Physical access is strictly controlled, and our infrastructure is protected by a multi-layered security approach."
    },
    {
        title: "Data Encryption",
        content: "We protect your data at all times. Data is encrypted in transit using TLS 1.2+ and at rest using industry-standard AES-256 encryption. This ensures that your sensitive information remains confidential and secure."
    },
    {
        title: "Application Security",
        content: "Our application is developed with security best practices in mind, following OWASP guidelines. We conduct regular vulnerability scans, penetration testing, and code reviews to identify and remediate potential security risks before they can be exploited."
    },
    {
        title: "Network Security",
        content: "We utilize Virtual Private Clouds (VPCs), firewalls, and network access control lists to isolate our infrastructure and protect it from unauthorized access. Network traffic is continuously monitored for suspicious activity."
    },
    {
        title: "Compliance & Certifications",
        content: "Learnly is compliant with major data privacy regulations, including GDPR. We are undergoing SOC 2 Type II certification to provide independent validation of our enterprise-grade security controls."
    },
    {
        title: "Availability & Reliability",
        content: "We are committed to providing a highly available service with a 99.9% uptime guarantee. Our infrastructure is designed for redundancy, and we perform regular backups and have a robust disaster recovery plan in place to ensure business continuity."
    }
];

const AccordionItem: React.FC<{ title: string; content: string; isOpen: boolean; onClick: () => void; }> = ({ title, content, isOpen, onClick }) => (
    <div className="border-b border-gray-200">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none">
            <span className="text-lg font-semibold text-gray-800">{title}</span>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <p className="p-6 pt-0 text-gray-600 leading-relaxed">{content}</p>
        </div>
    </div>
);


const SecurityPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Security & Trust</h1>
                    <p className="mt-4 text-lg text-gray-600">We are committed to protecting your data and providing a secure, reliable, and compliant learning platform. Your trust is our top priority.</p>
                </div>

                <div className="mt-16 max-w-4xl mx-auto bg-white border border-gray-200/80 rounded-2xl shadow-xl overflow-hidden">
                    {securityData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={item.title}
                            content={item.content}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SecurityPage;
