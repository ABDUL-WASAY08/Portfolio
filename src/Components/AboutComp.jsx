import React from 'react';
import { Gamepad2, Code, GraduationCap, Brain, Rocket, Coffee, Heart, Target, Zap, Laugh } from 'lucide-react';

function AboutComp() {
  const milestones = [
    {
      icon: <Gamepad2 className="w-5 h-5 md:w-6 md:h-6" />,
      title: "PUBG Addict (2017)",
      description: "One night in Class 10, while playing PUBG, a thought struck - 'How is this game made?' That curiosity changed everything!",
      color: "bg-orange-500",
      fun: "🎮 Killed more time than enemies!"
    },
    {
      icon: <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />,
      title: "CS Degree",
      description: "That gaming passion led me to a CS degree. Now I realize - making games is way harder than playing them!",
      color: "bg-blue-500",
      fun: "📚 From 10th grade straight to CS - big brain move 😎"
    },
    {
      icon: <Code className="w-5 h-5 md:w-6 md:h-6" />,
      title: "API Discovery",
      description: "Heard about APIs in my 2nd semester. Got curious, started searching, found it interesting. Now this is my thing!",
      color: "bg-purple-500",
      fun: "🤯 APIs > PUBG (sometimes)"
    },
    {
      icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Current Status",
      description: "Been handling APIs for 2 years now. No time to play games anymore because APIs have become my game!",
      color: "bg-green-500",
      fun: "🚀 Deploying code & chaos since 2 years"
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black/1 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How I Got <span className="text-blue-600 dark:text-blue-400">Here</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light px-4">
            From PUBG addict to backend developer — a funny journey!
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-green-500 rounded-full"></div>
          <div className="space-y-8 md:space-y-24">
            {milestones.map((item, index) => (
              <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-4 md:gap-8`}>
                <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 md:w-12 md:h-12 ${item.color} rounded-full flex items-center justify-center text-white shadow-lg z-10 md:animate-bounce-slow mb-2 md:mb-0">
                  {item.icon}
                </div>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-5 md:p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl relative group">
                    <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-gradient-to-r from-black to-black text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium shadow-lg flex items-center gap-1 animate-shake">
                      <Laugh size={14} className="md:w-4 md:h-4" />
                      <span className="hidden xs:inline">Fun Fact</span>
                    </div>
                    <div className="inline-block px-3 py-1 md:px-4 md:py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
                      {item.title}
                    </div>

                    <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 mb-3 md:mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-3 md:mt-4 p-3 md:p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg md:rounded-xl border border-dashed border-purple-300 dark:border-purple-700">
                      <p className="text-sm md:text-base text-purple-700 dark:text-purple-300 font-medium flex items-center gap-2">
                        <Brain size={16} className="md:w-5 md:h-5 text-purple-500 flex-shrink-0" />
                        <span>{item.fun}</span>
                      </p>
                    </div>
                    <div className="hidden md:block absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">
                      {index === 0 && '🎯'}
                      {index === 1 && '📚'}
                      {index === 2 && '🔍'}
                      {index === 3 && '🚀'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:grid mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

          <div className="bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-700 dark:to-gray-800 rounded-xl md:rounded-2xl p-5 md:p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-lg md:shadow-xl group">
            <Heart className="w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4 group-hover:animate-ping" />
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">PUBG to Python</h3>
            <p className="text-sm md:text-base text-indigo-50">
              Gaming passion led me to coding. Now I realize - building APIs is more fun than playing games!
            </p>
          </div>
          <div className="bg-gradient-to-br from-gary-400 to-gray-600 dark:from-gary-500 dark:to-gray-700 rounded-xl md:rounded-2xl p-5 md:p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-lg md:shadow-xl group">
            <Code className="w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4 group-hover:animate-spin" />
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">API Specialist</h3>
            <p className="text-sm md:text-base text-purple-50">
              2 years, countless APIs, infinite cups of coffee. Now APIs even appear in my dreams!
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-700 dark:to-black/60 rounded-xl md:rounded-2xl p-5 md:p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-lg md:shadow-xl group sm:col-span-2 md:col-span-1">
            <Target className="w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4 group-hover:animate-bounce" />
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Life Mantra</h3>
            <p className="text-sm md:text-base text-emerald-50">
              Been debugging for 2 years - sometimes code, sometimes life. Fixing errors everywhere!
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-16 text-center relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 md:w-10 md:h-10 l flex items-center justify-center animate-spin-slow">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-md md:text-xl lg:text-xl font-bold text-gray-800 dark:text-white mb-2">
              "From PUBG to APIs — what a journey! 🚀"
            </p>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
              - Abdulwasay (Ex-PUBG Pro, Current API Addict)
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .animate-bounce-slow {
            animation: none;
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out infinite;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default AboutComp;