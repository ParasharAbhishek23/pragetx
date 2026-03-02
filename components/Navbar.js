'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <header className="w-full mx-auto px-4 md:px-8 lg:px-12 py-6 bg-white">
      <nav className="flex items-center justify-between">
        <div className="flex-1 flex items-center md:hidden">
          {/* Mobile menu button */}
          <button className="p-2 rounded-md text-black hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8 w-full">
          <a href="#" className="text-black text-base lg:text-lg font-semibold hover:text-primary-600 transition-colors" style={{letterSpacing: '1px'}}>Services</a>
          <a href="#" className="text-black text-base lg:text-lg font-semibold hover:text-primary-600 transition-colors" style={{letterSpacing: '1px'}}>Stylists</a>
          <a href="#" className="text-black text-base lg:text-lg font-semibold hover:text-primary-600 transition-colors" style={{letterSpacing: '1px'}}>Join Our Team</a>
          <a href="#" className="text-black text-base lg:text-lg font-semibold hover:text-primary-600 transition-colors" style={{letterSpacing: '1px'}}>Contacts</a>
        </div>
        
        {/* Mobile Navigation - Hidden by default */}
        <div className="md:hidden flex items-center space-x-4">
          <a href="#" className="text-black text-sm font-semibold">Services</a>
          <a href="#" className="text-black text-sm font-semibold">Contacts</a>
        </div>
        
        <div className="flex-1 flex justify-end">
        </div>
      </nav>
    </header>
  );
}
