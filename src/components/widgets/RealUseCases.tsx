'use client';
// components/RealUseCases.tsx

import React, { useState } from 'react';
import { FaPhone, FaPhoneAlt, FaMicrochip,FaCut, FaTooth, FaUtensils, FaLaptopCode, FaHome, FaShieldAlt, FaPoll, FaUserCheck, FaMoneyBillWave, FaTruck, FaHeartbeat, FaMotorcycle, FaUserTie, FaBrain, FaRobot, FaHandsHelping, FaPaw, FaAssistiveListeningSystems, FaCar, FaUserNurse } from 'react-icons/fa';

type TabContent = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const tabs = [
  { name: 'Inbound Calls', icon: <FaPhone /> },
  { name: 'Outbound Calls', icon: <FaPhoneAlt /> },
  { name: 'Voice Products', icon: <FaRobot /> },
  { name: 'Voice IoT', icon: <FaMicrochip /> },
] as const;

type TabKey = typeof tabs[number]['name'];

const content: Record<TabKey, TabContent[]> = {
  'Inbound Calls': [
    { title: 'Barbershop', description: 'Availability, bookings, inquiries', icon: <FaCut /> },
    { title: 'Dentist Office', description: 'Schedule appointments, patient FAQs', icon: <FaTooth /> },
    { title: 'Restaurant', description: 'Reservations, menu inquiries', icon: <FaUtensils /> },
    { title: 'SaaS Website', description: 'Support, product information, troubleshooting.', icon: <FaLaptopCode /> },
    { title: 'Realtor Office', description: 'Property inquiries, viewings', icon: <FaHome /> },
    { title: 'Insurance Companies', description: 'Claims, policy help, support', icon: <FaShieldAlt /> },
  ],
  'Outbound Calls': [
    { title: 'Satisfaction Surveys', description: 'Collect customer insights', icon: <FaPoll /> },
    { title: 'Qualifying Leads', description: 'Screen potential clients', icon: <FaUserCheck /> },
    { title: 'Debt Collection', description: 'Negotiate repayments', icon: <FaMoneyBillWave /> },
    { title: 'Transportation Logistics', description: 'Check shipment statuses.', icon: <FaTruck /> },
    { title: 'Telehealth Check-ins', description: 'Monitor patient health', icon: <FaHeartbeat /> },
    { title: 'Food Delivery', description: 'Inform delivery progress', icon: <FaMotorcycle /> },
  ],
  'Voice Products': [
    { title: 'Sales Roleplay', description: 'Train your new employees', icon: <FaUserTie /> },
    { title: 'Conversations Roleplay', description: 'Train your managers', icon: <FaBrain /> },
    { title: 'Digital Employees', description: 'Conversational workplace AI agents', icon: <FaRobot /> },
    { title: 'Mock Interviews', description: 'Train for job interviews', icon: <FaUserTie /> },
    { title: 'AI Therapy', description: 'Supportive conversations and inquiry', icon: <FaBrain /> },
    { title: 'AI Companions', description: 'Interactive emotional support', icon: <FaHandsHelping /> },
  ],
  'Voice IoT': [
    { title: 'AI Toys', description: 'Smart playtime companions', icon: <FaPaw /> },
    { title: 'Home Assistants', description: 'Voice-activated home control', icon: <FaAssistiveListeningSystems /> },
    { title: 'Last-Mile Robots', description: 'Conversational delivery experience', icon: <FaRobot /> },
    { title: 'Cars', description: 'Car assistants that actually work.', icon: <FaCar /> },
    { title: 'Smart Mirrors', description: 'Daily check-ins, mood and health tracker', icon: <FaBrain /> },
    { title: 'Elderly Care', description: 'Medication reminders, assistance', icon: <FaUserNurse /> },
  ],
};

const RealUseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('Inbound Calls');

  return (
    <div className="py-10 px-5 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Real Use Cases. Real Value.</h1>
        <p className="text-center text-gray-600 mb-8">The best ideas come from those closest to the business.</p>

        <div className="flex flex-wrap justify-center space-x-2 space-y-2 md:space-x-4 mb-8">
  {tabs.map((tab) => (
    <button
      key={tab.name}
      onClick={() => setActiveTab(tab.name)}
      className={`px-3 py-2 rounded-full flex items-center space-x-1 md:space-x-2 text-base md:text-lg font-medium ${
        activeTab === tab.name
          ? 'bg-blue-600 text-white'
          : 'bg-white text-gray-700 hover:bg-gray-200'
      } transition duration-300 w-full sm:w-auto`}
    >
      {tab.icon}
      <span>{tab.name}</span>
    </button>
  ))}
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content[activeTab].map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 p-6 shadow-lg rounded-xl flex items-center space-x-4"
            >
              <div className="text-blue-600">{item.icon}</div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealUseCases;
