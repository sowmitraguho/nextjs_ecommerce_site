'use client';

import React, { useState, useEffect } from 'react';
import { ShieldAlert, Sun, Moon, ArrowLeft, Home } from 'lucide-react';

/**
 * MOCK DATA / INPUT
 * In a real application, these values would come from query parameters 
 * (e.g., router.query) or be passed as props if rendered via a wrapper.
 */
const mockErrorDetails = {
  type: 'Authentication Required',
  message: 'You must be logged in to access the /dashboard route. Please sign in below.',
  // In a real scenario, this would be retrieved from the URL query params
  // const error = new URLSearchParams(window.location.search).get('error')
  // const returnTo = new URLSearchParams(window.location.search).get('callbackUrl')
};

// --- AUTH ERROR COMPONENT ---
export default function AuthErrorPage() {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  // Effect to apply the dark class to HTML root for theme switching
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(current => (current === 'light' ? 'dark' : 'light'));
  };
  
  // Data required for the page
  const { type, message } = mockErrorDetails;

  return (
    <div 
      className="
        min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 
        bg-gray-50 dark:bg-gray-900 
        text-gray-900 dark:text-gray-100 
        transition-colors duration-300
      "
    >
      {/* Theme Switcher in the corner */}
      <div className="absolute top-4 right-4">
        <button 
          onClick={toggleTheme} 
          className="p-2 rounded-full text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-gray-700 hover:scale-105 transition-transform"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
        </button>
      </div>

      {/* Error Card */}
      <div 
        className="
          w-full max-w-lg p-8 space-y-6 rounded-xl border shadow-2xl
          bg-white dark:bg-gray-800 border-pink-200 dark:border-gray-700
          text-center
        "
      >
        <ShieldAlert className="w-16 h-16 mx-auto text-pink-500 dark:text-pink-400" />
        
        <h1 className="text-4xl font-extrabold text-pink-700 dark:text-pink-300">
          Oops!
        </h1>
        
        {/* Error Type/Title */}
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {type}
        </h2>
        
        {/* Error Message/Description */}
        <p className="text-gray-600 dark:text-gray-400">
          {message}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
          
          {/* Go to Login/Sign In Button - Now using standard <a> tag */}
          <a 
            href="/login"
            className="
              flex items-center justify-center gap-2 px-6 py-3 
              rounded-lg font-semibold transition-all duration-200 
              bg-pink-600 text-white shadow-md hover:bg-pink-700 
              dark:bg-pink-500 dark:hover:bg-pink-600 dark:text-gray-900
              w-full sm:w-auto
            "
          >
            <ArrowLeft className="w-5 h-5" />
            Go to Login Page
          </a>

          {/* Go Home Button - Now using standard <a> tag */}
          <a 
            href="/"
            className="
              flex items-center justify-center gap-2 px-6 py-3 
              rounded-lg font-semibold transition-all duration-200 
              border border-gray-300 dark:border-gray-600
              bg-gray-100 text-gray-700 hover:bg-gray-200 
              dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600
              w-full sm:w-auto
            "
          >
            <Home className="w-5 h-5" />
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}
