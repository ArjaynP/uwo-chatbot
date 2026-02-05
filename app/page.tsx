'use client';

import { useState } from 'react';
import ChatButton from './components/ChatButton';
import ChatWindow from './components/ChatWindow';
import Footer from './components/Footer';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-[#4F2683] mb-4">
              Western University Chatbot
            </h1>
            <p className="text-xl text-gray-600">
              Your AI-powered assistant for all things Western
            </p>
          </div>

          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#4F2683] rounded-full mb-4">
                <span className="text-white text-4xl font-bold">W</span>
              </div>
            </div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Welcome to Western University
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Get instant answers to your questions about courses, campus life, admissions, 
              and more. Click the chat button below to get started!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-[#4F2683] mb-2">Ask Questions</h3>
                <p className="text-gray-600">
                  Get quick answers about courses, programs, and campus facilities
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-[#4F2683] mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Available anytime to help with your inquiries
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-[#4F2683] mb-2">Instant Responses</h3>
                <p className="text-gray-600">
                  Get immediate assistance without waiting in line
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-[#4F2683] text-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-4">Need Help?</h3>
            <p className="text-lg mb-4">
              Our chatbot is here to assist you with information about Western University.
            </p>
            <p className="text-sm opacity-90">
              Click the purple chat button in the bottom right corner to start a conversation.
            </p>
          </div>

          {/* Topics Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#4F2683] mb-8">What Can I Help You With?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {/* Course Registration */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#4F2683] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#4F2683] mb-3">Course Registration</h3>
                <p className="text-sm text-gray-600">
                  Learn about course enrollment, add/drop deadlines, course selection, and registration procedures for your academic program.
                </p>
              </div>

              {/* OSAP */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#4F2683] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#4F2683] mb-3">OSAP</h3>
                <p className="text-sm text-gray-600">
                  Get information about Ontario Student Assistance Program applications, funding, repayment options, and financial aid eligibility.
                </p>
              </div>

              {/* Bursaries & Work Study */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#4F2683] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#4F2683] mb-3">Bursaries & Work Study</h3>
                <p className="text-sm text-gray-600">
                  Explore bursary opportunities, work-study programs, scholarships, and other financial support options available to students.
                </p>
              </div>

              {/* Transcript Form */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#4F2683] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#4F2683] mb-3">Transcript Form</h3>
                <p className="text-sm text-gray-600">
                  Request official transcripts, learn about processing times, fees, and how to send your academic records to other institutions.
                </p>
              </div>

              {/* Western OneCard */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#4F2683] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#4F2683] mb-3">Western OneCard</h3>
                <p className="text-sm text-gray-600">
                  Find out about your student ID card, meal plans, building access, library services, and how to replace a lost card.
                </p>
              </div>

              {/* Technical Support */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#4F2683] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#4F2683] mb-3">Technical Support</h3>
                <p className="text-sm text-gray-600">
                  Get help with IT services, WiFi access, OWL (online learning), email setup, software downloads, and computer lab resources.
                </p>
              </div>

              {/* Appointments */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#4F2683] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#4F2683] mb-3">Appointments</h3>
                <p className="text-sm text-gray-600">
                  Schedule appointments with academic advisors, counselors, registrar staff, and other student services departments.
                </p>
              </div>

              {/* Special Permission */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#4F2683] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#4F2683] mb-3">Special Permission</h3>
                <p className="text-sm text-gray-600">
                  Request special permission for course overrides, prerequisite waivers, late registration, and other academic exceptions.
                </p>
              </div>
            </div>
          </div>

          {/* Faculty Inquiries Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#4F2683] mb-4">General Faculty Inquiries</h2>
            <p className="text-gray-600 mb-8">
              Get information and support for specific faculties at Western University
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Faculty of Science */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4F2683] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#4F2683] mb-2">Faculty of Science</h3>
                  <p className="text-sm text-gray-600">
                    Programs, research, and academic support
                  </p>
                </div>
              </div>

              {/* Arts & Humanities */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4F2683] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#4F2683] mb-2">Arts & Humanities</h3>
                  <p className="text-sm text-gray-600">
                    Literature, philosophy, history, and languages
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4F2683] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#4F2683] mb-2">Education</h3>
                  <p className="text-sm text-gray-600">
                    Teacher education and educational research
                  </p>
                </div>
              </div>

              {/* Health Sciences */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4F2683] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#4F2683] mb-2">Health Sciences</h3>
                  <p className="text-sm text-gray-600">
                    Medicine, nursing, and health-related programs
                  </p>
                </div>
              </div>

              {/* Social Science */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4F2683] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#4F2683] mb-2">Social Science</h3>
                  <p className="text-sm text-gray-600">
                    Psychology, sociology, economics, and more
                  </p>
                </div>
              </div>

              {/* Information & Media Studies */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4F2683] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#4F2683] mb-2">Information & Media Studies</h3>
                  <p className="text-sm text-gray-600">
                    Digital media, communications, and information science
                  </p>
                </div>
              </div>

              {/* Don Wright Faculty of Music */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4F2683] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#4F2683] mb-2">Don Wright Faculty of Music</h3>
                  <p className="text-sm text-gray-600">
                    Music performance, composition, and theory
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Chat Components */}
      <ChatWindow isOpen={isChatOpen} />
      <ChatButton onClick={() => setIsChatOpen(!isChatOpen)} isOpen={isChatOpen} />
    </div>
  );
}
