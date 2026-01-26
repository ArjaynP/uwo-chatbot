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
          <div className="bg-[#4F2683] text-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Need Help?</h3>
            <p className="text-lg mb-4">
              Our chatbot is here to assist you with information about Western University.
            </p>
            <p className="text-sm opacity-90">
              Click the purple chat button in the bottom right corner to start a conversation.
            </p>
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
