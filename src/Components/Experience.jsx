import React from 'react';
import { Briefcase, Calendar, MapPin, Code, Smartphone } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "EliteTech.pk",
      location: "Pakistan",
      period: "January 2026 - March 2026",
      startDate: "January 2026",
      endDate: "March 2026",
      duration: "3 months",
      description: [
        "Developed and maintained full-stack web applications using modern JavaScript frameworks",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented responsive designs and optimized application performance",
        "Participated in code reviews and agile development processes"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      icon: Code
    },
    {
      id: 2,
      title: "App Developer (React Native)",
      company: "GrowStep",
      location: "Pakistan",
      period: "February 2026 - Present",
      startDate: "February 2026",
      endDate: "Present",
      duration: "2+ months",
      description: [
        "Built cross-platform mobile applications using React Native",
        "Implemented native-like features and smooth animations for enhanced user experience",
        "Integrated RESTful APIs and managed application state",
        "Collaborated with designers to implement pixel-perfect UI components"
      ],
      technologies: ["React Native", "JavaScript", "Redux"],
      icon: Smartphone
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 via-black/5 to-gray-900 py-16 px-4 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Work Experience
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional journey and hands-on experience in software development
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={exp.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >                
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-400 font-medium">
                          <span>{exp.company}</span>
                          {exp.location && (
                            <>
                              <span className="text-gray-500">•</span>
                              <div className="flex items-center gap-1 text-gray-400 text-sm">
                                <MapPin className="w-3 h-3" />
                                <span>{exp.location}</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/20">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-sm text-gray-300">{exp.period}</span>
                        <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded-full">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-blue-400 mt-1">•</span>
                          <span className="text-sm md:text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full border border-white/10 hover:bg-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx={true}>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;