import React, { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Database, 
  Cloud, 
  Wrench, 
  Terminal, 
  Server, 
  Globe, 
  Layers,
  Zap,
  Shield,
  Cpu,
  GitBranch
} from 'lucide-react';

function SkillsComp() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const skillCardsRef = useRef([]);
  const expertiseRefs = useRef([]);
  const [animatedBars, setAnimatedBars] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate expertise cards with stagger
      expertiseRefs.current.forEach((card, index) => {
        if (card) {
          card.style.animation = `slideUp 0.5s ease-out forwards ${index * 0.1}s`;
        }
      });

      // Animate skill cards with stagger
      skillCardsRef.current.forEach((card, index) => {
        if (card) {
          card.style.animation = `fadeInUp 0.6s ease-out forwards ${index * 0.15}s`;
        }
      });

      // Trigger bar animations
      const bars = {};
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          const key = `${categoryIndex}-${skillIndex}`;
          bars[key] = true;
        });
      });
      setAnimatedBars(bars);
    }
  }, [isVisible]);

  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "from-blue-800 to-blue-900",
      skills: [
        { name: "Python", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "FastAPI", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "REST APIs", level: 95 },
        { name: "GraphQL", level: 75 },
        { name: "React", level: 80 }
      ]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-800 to-blue-900",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "Supabase", level: 70 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-blue-800 to-blue-900",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 90 },
        { name: "GitHub Actions", level: 80 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-blue-800 to-blue-900",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 90 },
        { name: "Postman", level: 95 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 70 },
        { name: "Swagger", level: 85 },
      ]
    }
  ];

  const expertiseAreas = [
    {
      title: "System Design",
      description: "Scalable architecture, load balancing, caching strategies",
      icon: <Layers className="w-5 h-5" />,
      color: "text-blue-400"
    },
    {
      title: "API Security",
      description: "JWT, OAuth, rate limiting, input validation",
      icon: <Shield className="w-5 h-5" />,
      color: "text-green-400"
    },
    {
      title: "Performance",
      description: "Query optimization, caching, load testing",
      icon: <Zap className="w-5 h-5" />,
      color: "text-yellow-400"
    },
    {
      title: "Code Quality",
      description: "Clean code, design patterns, testing, documentation",
      icon: <Code2 className="w-5 h-5" />,
      color: "text-purple-400"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div 
            className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6 transition-all duration-1000 ${
              isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'
            }`}
          ></div>
          <p className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Technologies I work with and tools I use to build scalable solutions
          </p>
        </div>

        {/* Expertise Areas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              ref={(el) => (expertiseRefs.current[index] = el)}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 opacity-0"
              style={{ opacity: 0 }}
            >
              <div className={`${area.color} mb-2 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3`}>
                {area.icon}
              </div>
              <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {area.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-all duration-300">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={(el) => (skillCardsRef.current[categoryIndex] = el)}
              className="p-6 lg:p-8 transition-all duration-500 group hover:transform hover:-translate-y-2 opacity-0"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-7 rounded-xl p-0.5 transition-all duration-300 group-hover:scale-110">
                  <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center text-white group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-md text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const barKey = `${categoryIndex}-${skillIndex}`;
                  const shouldAnimate = animatedBars[barKey];
                  
                  return (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transform origin-left transition-all duration-1000 ease-out`}
                          style={{ 
                            width: shouldAnimate ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700/50 flex justify-between text-sm">
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Expertise Level</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold relative">
                  Advanced
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes growWidth {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        /* Hover animations for skill bars */
        .group:hover .h-full {
          filter: brightness(1.2);
          transition: filter 0.3s ease;
        }

        /* Smooth transitions for all elements */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
}

export default SkillsComp;