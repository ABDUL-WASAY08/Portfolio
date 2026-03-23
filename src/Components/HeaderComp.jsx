import React from 'react';
import { useState } from 'react';

function HeaderComp() {

  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <p className="text-md font-bold text-gray-900 dark:text-white pointer-events-none">
              <span className="text-blue-600 dark:text-blue-400">ABDUL</span>WASAY
            </p>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8 ">
            <button 
              onClick={() => scrollToSection('home')}
              className={`cursor-pointer relative px-3 py-2 text-sm font-medium transition-colors duration-300 group ${
                activeSection === 'home' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                activeSection === 'home' ? 'scale-x-100' : ''
              }`}></span>
            </button>
            
            <button 
              onClick={() => scrollToSection('about')}
              className={`cursor-pointer relative px-3 py-2 text-sm font-medium transition-colors duration-300 group ${
                activeSection === 'about' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              About
              <span className={`cursor-pointer absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                activeSection === 'about' ? 'scale-x-100' : ''
              }`}></span>
            </button>
            
            <button 
              onClick={() => scrollToSection('projects')}
              className={`cursor-pointer relative px-3 py-2 text-sm font-medium transition-colors duration-300 group ${
                activeSection === 'projects' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Projects
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                activeSection === 'projects' ? 'scale-x-100' : ''
              }`}></span>
            </button>
             <button 
              onClick={() => scrollToSection('Experience')}
              className={`cursor-pointer relative px-3 py-2 text-sm font-medium transition-colors duration-300 group ${
                activeSection === 'Experience' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Experience
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                activeSection === 'Experience' ? 'scale-x-100' : ''
              }`}></span>
            </button>
            
            <button 
              onClick={() => scrollToSection('skills')}
              className={`cursor-pointer relative px-3 py-2 text-sm font-medium transition-colors duration-300 group ${
                activeSection === 'skills' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Skills
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                activeSection === 'skills' ? 'scale-x-100' : ''
              }`}></span>
            </button>
          </div>
          <div className="hidden md:block">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComp;