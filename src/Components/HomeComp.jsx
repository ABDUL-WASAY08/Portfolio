import React from 'react';
import { Github, Linkedin, Mail, FileText, Code2, Coffee, Globe, Zap, PhoneIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function HomeComp() {
    const navigate=useNavigate();
    const phoneNumber = "923315789320"; 
  const message = "Hi Abdul Wasay, I saw your portfolio and wanted to connect!";
  const WhatSapURL=`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center pt-16 bg-gradient-to-b from-gray-80 to-white/10 dark:from-black dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2 pointer-events-none">
              <p className="text-blue-600 dark:text-blue-400 font-medium text-md animate-fade-in">
                👋 Hello, I'm
              </p>
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                Abdul<span className="text-blue-600 dark:text-blue-400">wasay</span>
              </h1>
            </div>
            <div className="flex items-center gap-3 flex-wrap pointer-events-none">
              <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full font-medium inline-flex items-center gap-2">
                <Code2 size={20} />
                Backend Developer
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-4 py-2 rounded-full font-medium inline-flex items-center gap-2">
                <Zap size={20} />
                Available for work
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed pointer  pointer-events-none">
              I build scalable backend systems and APIs while having a cup of coffee 🍵. 
              Specialized in Python, Node.js,react, and cloud architecture with 2+ years of experience 
              turning complex problems into elegant solutions.
            </p>

            {/*Buttons */}
            <div className="flex flex-wrap gap-4 mt-5">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FileText size={20} />
                Download Resume
              </a>
              <p 
                onClick={()=>navigate('/Contact')}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <Mail size={20} />
                Contact Me
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://github.com/ABDUL-WASAY08" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://www.linkedin.com/in/abdul-wasay-0a75283a4/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a 
              href={WhatSapURL}
              target='_blank'
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <PhoneIcon size={22} />
              </a>
            </div>
          </div>
          <div className="space-y-6">
            {/* Profile Card */}
            <div className=" dark:bg-white/1 rounded-2xl shadow-xl p-8  border-gray-900 pointer-events-none">
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Web Developer</h3>
                  <p className="text-gray-600 dark:text-gray-400">Specility: Manage apis</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">1+</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Years</p>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Projects</p>
                </div>
              </div>

              {/* Fun Facts Section */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Coffee size={18} className="text-blue-600" />
                  Fun Facts About Me
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600">
                      ☕
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      I've written over 10,000 lines of code while drinking coffee
                    </p>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600">
                      🌍
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      I've contributed to open-source projects for charity
                    </p>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600">
                      🚀
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      I once debugged a production issue at 4 AM and saved the day
                    </p>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600">
                      ⚡
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      May be my Learning speed is Faster than AI turtle 
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Quick View */}
            <div className=" dark:bg-white/1 rounded-2xl shadow-xl p-6 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Globe size={18} className="text-blue-600" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Node.js', 'React', 'Mongoose', 'GrapgQl', 'Cloudinary', 'AWS', 'Docker','Express'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default HomeComp;