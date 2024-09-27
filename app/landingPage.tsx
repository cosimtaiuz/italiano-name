"use client";

import React, { useState } from "react";

const LandingPage: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleGenerate = () => {
    alert(`Your Italian alter ego is: ${firstName} ${lastName}!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-white to-red-200 flex flex-col items-center justify-center">
      <nav className="bg-white-200 w-full fixed top-0 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-green-500 text-3xl">🍕</div>
            <a href="#" className="text-red-500 text-3xl font-bold">
              Italiano Name-o-Matic
            </a>
          </div>
          {/* <div>
            <a href="#" className="text-black mx-4">
              About
            </a>
            <a href="#" className="text-black mx-4">
              Contact
            </a>
          </div> */}
        </div>
      </nav>
      <div className="text-center mt-20 space-y-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Discover Your Italian Alter Ego!
        </h1>
        <p className="text-2xl text-gray-600 mb-8">
          Enter your name and let the magic of Italy transform you!
        </p>
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border-2 border-green-500 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-300 placeholder-gray-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border-2 border-green-500 rounded-lg p-3 w-full focus:ring-2 focus:ring-green-300 placeholder-gray-500"
            />
          </div>
          <button
            onClick={handleGenerate}
            className="w-full py-3 bg-gradient-to-r from-red-500 to-green-500 text-white text-lg font-bold rounded-lg hover:from-red-600 hover:to-green-600 transition-colors flex items-center justify-center"
          >
            <span className="mr-2">🇮🇹</span>
            Generate Italian Name
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
