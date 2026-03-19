import React from 'react';
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
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "from-blue-800 to-blue-900",
      skills: [
        { name: "Python", level: 90, icon: "" },
        { name: "Node.js", level: 85, icon: "" },
        { name: "FastAPI", level: 85, icon: "" },
        { name: "Express.js", level: 80, icon: "" },
        { name: "REST APIs", level: 95, icon: "" },
        { name: "GraphQL", level: 75, icon: "" },
        { name: "React", level: 80, icon: "" }
      ]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-800 to-blue-900",
      skills: [
        { name: "MongoDB", level: 85, icon: "" },
        { name: "MySQL", level: 85, icon: "" },
        { name: "Supabase", level: 70, icon: "" }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
     color: "from-blue-800 to-blue-900",
      skills: [
        { name: "AWS", level: 85, icon: "" },
        { name: "Docker", level: 90, icon: "" },
        { name: "GitHub Actions", level: 80, icon: "" },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-blue-800 to-blue-900",
      skills: [
        { name: "Git", level: 95, icon: "" },
        { name: "Docker", level: 90, icon: "" },
        { name: "Postman", level: 95, icon: "" },
        { name: "VS Code", level: 90, icon: "" },
        { name: "Figma", level: 70, icon: "" },
        { name: "Swagger", level: 85, icon: "" },
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
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies I work with and tools I use to build scalable solutions
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group"
            >
              <div className={`${area.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {area.icon}
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">{area.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 lg:p-8 transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-7 h-7 rounded-xl p-0.5`}>
                  <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-md  text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300  text-sm ">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-600 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transform origin-left transition-transform duration-1000 ease-out group-hover:scale-x-105`}
                        style={{ 
                          width: `${skill.level}%`,
                          transform: 'scaleX(0)',
                          animation: `growWidth 1.5s ease-out forwards ${index * 0.1 + skillIndex * 0.05}s`,
                          hover:{
                            animation: `growWidth 1.5s ease-out forwards ${index * 0.1 + skillIndex * 0.05}s`,
                          }
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-700/50 flex justify-between text-sm">
                <span className="text-gray-400">Expertise Level</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                  Advanced
                </span>
              </div>
            </div>
          ))}
        </div>

   </div>

      {/* Animation Keyframes - Add to your global CSS or style tag */}
      <style jsx>{`
        @keyframes growWidth {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}

export default SkillsComp;