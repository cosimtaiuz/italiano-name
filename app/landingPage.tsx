"use client";

import React, { useState } from "react";
import { generateNameTranslation } from "./actions";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

const LandingPage: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [italianName, setItalianName] = useState("");
  const [italianSurname, setItalianSurname] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleGenerate = async () => {
    const result = await generateNameTranslation(
      firstName,
      lastName,
      "Italian"
    );
    setItalianName(result.translatedName);
    setItalianSurname(result.translatedSurname);
    setShowResult(true);
  };

  const shareOnTwitter = () => {
    const text = `Check out my Italian alter ego: ${italianName} ${italianSurname}! Get yours at Italian Name-o-Matic`;
    const url = "https://your-website-url.com"; // Replace with your actual URL
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    const url = "https://your-website-url.com"; // Replace with your actual URL
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 via-white to-red-300 flex flex-col items-center justify-center font-nunito">
      <nav className="bg-white/90 w-full fixed top-0 shadow-md z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="text-blue-500 text-2xl sm:text-3xl">🦅</div>
            <a href="#" className="text-red-500 text-xl sm:text-3xl font-bold">
              <span className="hidden sm:inline">Italian Name-o-Matic</span>
              <span className="sm:hidden">Italian Name-o-Matic</span>
            </a>
          </div>
          <Link
            href="/usa"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-2 sm:px-4 rounded transition-colors"
          >
            <span className="sm:hidden">🇺🇸</span>
            <span className="hidden sm:inline">🇺🇸 Switch to American</span>
          </Link>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center text-center pt-28 space-y-8 px-4 sm:px-0">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 ">
          Discover Your Italian Alter Ego!
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-6 sm:mb-8">
          Enter your name to find your Italian alter ego!
        </p>
        {!showResult ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleGenerate();
              sendGAEvent("event", "generate-italian-name", {
                value: "G-GY75ZHZ7GF",
              });
            }}
            className="bg-white rounded-lg shadow-md p-8 w-full max-w-md mx-auto"
          >
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
              type="submit"
              className="w-full py-3 bg-gradient-to-br from-red-500 to-green-500 text-white text-lg font-bold rounded-lg hover:from-red-600 hover:to-green-600 transition-colors flex items-center justify-center"
            >
              <span className="mr-2">✨</span>
              Generate Italian Name
            </button>
          </form>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md mx-auto transform transition-all duration-500 hover:scale-105 ">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your Italian Alter Ego:
            </h2>
            <div className="text-5xl font-bold mb-6">
              {italianName} {italianSurname}
            </div>
            <p className="text-xl text-gray-600 mb-4">
              Congratulations! You&apos;ve been transformed into a true Italian!
            </p>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-lg font-semibold text-gray-700">Share on:</p>
              <div className="flex space-x-4">
                <button
                  onClick={shareOnTwitter}
                  className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full flex items-center transition-colors duration-300 shadow-md"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Twitter
                </button>
                <button
                  onClick={shareOnLinkedIn}
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full flex items-center transition-colors duration-300 shadow-md"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      clipRule="evenodd"
                    />
                  </svg>
                  LinkedIn
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                setShowResult(false);
                sendGAEvent("event", "try-another-name-italian", {
                  value: "G-GY75ZHZ7GF",
                });
              }}
              className="w-full py-3 bg-gradient-to-br from-green-500 to-blue-500 text-white text-lg font-bold rounded-lg hover:from-green-600 hover:to-blue-600 transition-colors flex items-center justify-center mt-6"
            >
              <span className="mr-2">🔄</span>
              Try Another Name
            </button>
          </div>
        )}
      </div>

      {/* New contact section */}
      <footer className="mt-16 mb-8 text-center px-4 sm:px-0">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Created in 2 hrs by{" "}
          <a
            href="https://www.cosimotaiuti.com/"
            className="underline hover:text-blue-600 transition-colors"
          >
            Cosimo Taiuti
          </a>
        </h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://x.com/cosimo_taiuti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700 transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://github.com/cosimtaiuz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/cosimotaiuti/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
