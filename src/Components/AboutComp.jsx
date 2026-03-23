import React, { useEffect, useRef, useState } from 'react';
import { Gamepad2, Code, GraduationCap, Brain, Rocket, Heart, Target, Zap, Laugh } from 'lucide-react';

function AboutComp() {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);
  const milestoneRefs = useRef([]);

  const milestones = [
    {
      icon: React.createElement(Gamepad2, { className: "w-5 h-5 md:w-6 md:h-6" }),
      title: "PUBG Addict (2017)",
      description: "One night in Class 10, while playing PUBG, a thought struck - 'How is this game made?' That curiosity changed everything!",
      color: "bg-gray-800",
      fun: "🎮 Killed more time than enemies!"
    },
    {
      icon: React.createElement(GraduationCap, { className: "w-5 h-5 md:w-6 md:h-6" }),
      title: "CS Degree",
      description: "That gaming passion led me to a CS degree. Now I realize - making games is way harder than playing them!",
      color: "bg-blue-500",
      fun: "📚 From 10th grade straight to CS - big brain move 😎"
    },
    {
      icon: React.createElement(Code, { className: "w-5 h-5 md:w-6 md:h-6" }),
      title: "API Discovery",
      description: "Heard about APIs in my 2nd semester. Got curious, started searching, found it interesting. Now this is my thing!",
      color: "bg-gray-700",
      fun: "🤯 APIs > PUBG (sometimes)"
    },
    {
      icon: React.createElement(Rocket, { className: "w-5 h-5 md:w-6 md:h-6" }),
      title: "Current Status",
      description: "Been handling APIs for 2 years now. No time to play games anymore because APIs have become my game!",
      color: "bg-blue-800",
      fun: "🚀 Deploying code & chaos since 2 years"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.4, rootMargin: "0px 0px -100px 0px" }
    );

    milestoneRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleItems]);

  const setRef = (el, index) => {
    milestoneRefs.current[index] = el;
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black overflow-x-hidden"
    >
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
          {/* Animated Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full transition-all duration-1000 ease-out"
              style={{ 
                height: `${(visibleItems.length / milestones.length) * 100}%`,
              }}
            />
          </div>
          
          <div className="space-y-8 md:space-y-24">
            {milestones.map((item, index) => (
              <div 
                key={index}
                ref={(el) => setRef(el, index)}
                data-index={index}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-4 md:gap-8 transition-all duration-700 ease-out ${
                  visibleItems.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-24'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Node */}
                <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-20">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-500 ${
                    item.color
                  } ${visibleItems.includes(index) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} 
                  style={{ transitionDelay: `${index * 200 + 100}ms` }}>
                    {item.icon}
                  </div>
                  {/* Pulse effect when visible */}
                  {visibleItems.includes(index) && (
                    <div className={`absolute inset-0 rounded-full animate-ping opacity-75 `} style={{ animationDuration: '1.5s' }} />
                  )}
                </div>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div 
                    className={`bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-5 md:p-6 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl relative group ${
                      visibleItems.includes(index) 
                        ? 'opacity-100 translate-x-0' 
                        : `opacity-0 ${index % 2 === 0 ? '-translate-x-20' : 'translate-x-20'}`
                    }`} 
                    style={{ transitionDelay: `${index * 200 + 300}ms` }}
                  >
                    <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium shadow-lg flex items-center gap-1">
                      <Laugh size={14} className="md:w-4 md:h-4" />
                      <span className="hidden xs:inline">Fun Fact</span>
                    </div>
                    
                    <div className={`inline-block px-3 py-1 md:px-4 md:py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 transition-all duration-300 ${
                      visibleItems.includes(index) ? 'opacity-100' : 'opacity-0'
                    }`}>
                      {item.title}
                    </div>

                    <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 mb-3 md:mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="mt-3 md:mt-4 p-3 md:p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg md:rounded-xl border border-dashed border-purple-300 dark:border-purple-700 transform transition-all duration-500 hover:scale-105">
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
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-16 md:mt-24">
          <div className="bg-gradient-to-br from-gray-500 to-gray-600 dark:from-gray-600 dark:to-black rounded-xl md:rounded-2xl p-5 md:p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-lg md:shadow-xl group animate-fade-in-up">
            <Heart className="w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4 group-hover:animate-pulse" />
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">PUBG to Python</h3>
            <p className="text-sm md:text-base text-orange-50">
              Gaming passion led me to coding. Now I realize - building APIs is more fun than playing games!
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-500 to-gray-600 dark:from-gray-600 dark:to-gray-700 rounded-xl md:rounded-2xl p-5 md:p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-lg md:shadow-xl group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Code className="w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4 group-hover:animate-spin" />
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">API Specialist</h3>
            <p className="text-sm md:text-base text-purple-50">
              2 years, countless APIs, infinite cups of coffee. Now APIs even appear in my dreams!
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-500 to-gray-600 dark:from-gray-600 dark:to-gary-500 rounded-xl md:rounded-2xl p-5 md:p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-lg md:shadow-xl group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Target className="w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4 group-hover:animate-bounce" />
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Life Mantra</h3>
            <p className="text-sm md:text-base text-emerald-50">
              Been debugging for 2 years - sometimes code, sometimes life. Fixing errors everywhere!
            </p>
          </div>
        </div>
      
        <div className="mt-12 md:mt-16 text-center relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center animate-spin-slow shadow-lg">
              <Zap className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
          </div>
          <div className="p-6 md:p-8 bg-gradient-to-r from-blue-10 to-purple-10 dark:from-gray-900 dark:to-gray-900 rounded-xl md:rounded-2xl shadow-lg">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 dark:text-white mb-2">
              "From PUBG to APIs — what a journey! 🚀"
            </p>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
              - Abdulwasay (Ex-PUBG Pro, Current API Addict)
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @media (max-width: 768px) {
          .animate-bounce-slow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

export default AboutComp;