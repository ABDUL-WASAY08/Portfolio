import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  Sparkles,
  Car,
  Shield,
  MessageSquare,
  ArrowUpRight,
  Lightbulb
  
} from "lucide-react";

function ProjectsComp() {
  const [active, setActive] = useState("dummy");
  const projects = [
    {
      id: 1,
      title: "AI Resume Builder",
      description:
        "Smart resume builder powered by AI that analyzes job descriptions and optimizes your resume with personalized suggestions and formatting.",
      icon: <Sparkles className="w-6 h-6" />,
      tags: ["React", "Node.js", "OpenAI", "MongoDB"],
      liveLink: "https://ai-resume-builder.com",
      githubLink: "https://github.com/abdulwasay/ai-resume",
      color: "",
      gradient: "",
    },
    {
      id: 2,
      title: "Rent A Car E-commerce",
      description:
        "Full-featured car rental platform with real-time availability, secure payments, GPS tracking, and instant booking confirmation system.",
      icon: <Car className="w-6 h-6" />,
      tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      liveLink: "https://rentacar-demo.com",
      githubLink: "https://github.com/abdulwasay/rentacar",
      color: "",
      gradient: "",
    },
    {
      id: 3,
      title: "Secure Drive",
      description:
        "Enterprise-grade cloud storage with end-to-end encryption, secure file sharing, and automatic malware scanning for maximum data protection.",
      icon: <Shield className="w-6 h-6" />,
      tags: ["Python", "Django", "AWS S3", "Encryption"],
      liveLink: "https://securedrive-demo.com",
      githubLink: "https://github.com/abdulwasay/secure-drive",
      color: "",
      gradient: "",
    },
    {
      id: 4,
      title: "Social Garam",
      description:
        "Vibrant social media platform with real-time chats, stories, reels, and AI-powered content recommendations to keep conversations spicy! 🔥",
      icon: <MessageSquare className="w-6 h-6" />,
      tags: ["React Native", "Socket.io", "Redis", "Firebase"],
      liveLink: "https://socialgaram.com",
      githubLink: "https://github.com/abdulwasay/social-garam",
      color: "",
      gradient: "",
    },
  ];
  const Cprojects = [
    {
      id: 1,
      title: "Routine App",
      description:
        "The app in wich use can mange his task and daily life routine",
      icon: <Lightbulb className="w-6 h-6" />,
      tags: ["React", "Node.js", "OpenAI", "MongoDB"],
      liveLink: "https://ai-resume-builder.com",
      githubLink: "https://github.com/abdulwasay/ai-resume",
      color: "",
      gradient: "",
    },
  ];
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-black/5 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real-world solutions I've built, from AI-powered tools to full-stack
            applications
          </p>
        </div>
        <div className="flex gap-3 mt-10 mb-10 ">
          <button className="bg-gray-800 px-3 py-2 rounded rounded-xl hover:bg-gray-900 cursor-pointer" onClick={()=>setActive('dummy')}>Practice Projects</button>
           <button  className="bg-gray-800 px-3 py-2 rounded rounded-xl hover:bg-gray-900 cursor-pointer" onClick={()=>setActive('Company')}>Company Projects</button>
        </div>
        {active === "dummy" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <div className="relative p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-7 h-7 rounded-2xl bg-gradient-to-br ${project.color} p-0.4`}
                    >
                      <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center text-white">
                        {project.icon}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-gray-300 hover:text-white"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-gray-300 hover:text-white"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-md font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium border border-gray-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Live Demo Link */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group/link"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>

                {/* Bottom Glow Effect */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            ))}
          </div>
        )}
        {active === "Company" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {Cprojects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <div className="relative p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-7 h-7 rounded-2xl bg-gradient-to-br ${project.color} p-0.4`}
                    >
                      <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center text-white">
                        {project.icon}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-gray-300 hover:text-white"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-gray-300 hover:text-white"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-md font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium border border-gray-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Live Demo Link */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group/link"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>

                {/* Bottom Glow Effect */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://github.com/ABDUL-WASAY08"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-medium transition-all duration-300 border border-gray-700 hover:border-gray-600 group"
          >
            <span>View All Projects on GitHub</span>
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsComp;
