import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  Sparkles,
  Car,
  Shield,
  MessageSquare,
  ArrowUpRight,
  Lightbulb,
  X
} from "lucide-react";

function ProjectsComp() {
  const [active, setActive] = useState("dummy");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "AI Resume Builder",
      description:
        "Smart resume builder powered by AI that analyzes job descriptions and optimizes your resume with personalized suggestions and formatting.",
      fullDescription: "AI Resume Builder is a cutting-edge application that leverages artificial intelligence to help job seekers create professional resumes. The tool analyzes job descriptions and provides personalized suggestions to optimize your resume for specific roles. Features include real-time formatting suggestions, keyword optimization, ATS compatibility checking, and multiple template options. Built with React for the frontend and Node.js with OpenAI API for the backend, this application demonstrates the power of AI in career development.",
      icon: <Sparkles className="w-6 h-6" />,
      tags: ["React", "Node.js", "GrokAPI", "MongoDB"],
      liveLink: "https://resume-builder-frontend-rosy-two.vercel.app/",
      githubLink: "https://github.com/ABDUL-WASAY08/ResumeBuilder_Frontend",
      color: "from-purple-500 to-pink-500",
      gradient: "",
      image: "./resumebuilder.png",
      date: "January 2024"
    },
    {
      id: 2,
      title: "Rent A Car E-commerce",
      description:
        "Full-featured car rental platform with real-time availability, secure payments, GPS tracking, and instant booking confirmation system.",
      fullDescription: "Rent A Car E-commerce is a comprehensive car rental platform that provides users with a seamless booking experience. The system features real-time vehicle availability tracking, secure payment processing with Stripe, GPS integration for vehicle tracking, and instant booking confirmations. Users can browse through various vehicle categories, compare prices, read reviews, and manage their bookings. The platform includes an admin dashboard for managing inventory, pricing, and customer support.",
      icon: <Car className="w-6 h-6" />,
      tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      liveLink: "https://rentacar-demo.com",
      githubLink: "https://github.com/abdulwasay/rentacar",
      color: "from-blue-500 to-cyan-500",
      gradient: "",
      image: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Rent+A+Car",
      tags: ["React", "Node.js", "DSA ", "MongoDB"],
      liveLink: "https://ecomerace-rent-car-frontend.vercel.app/",
      githubLink: "https://github.com/ABDUL-WASAY08/Ecomerace_RentCar_Frontend",
      color: "from-purple-500 to-pink-500",
      gradient: "",
      image: "./carrental.png",
      date: "January 2024"
    },
    {
      id: 3,
      title: "Secure Drive",
      description:
        "Enterprise-grade cloud storage with end-to-end encryption, secure file sharing, and automatic malware scanning for maximum data protection.",
      fullDescription: "Secure Drive is an enterprise-level cloud storage solution prioritizing security and privacy. The platform implements end-to-end encryption for all files, ensuring only authorized users can access data. Features include secure file sharing with expiration links, automatic malware scanning, version history, and role-based access control. Built with Django and Python, the application uses AWS S3 for scalable storage while maintaining strict security protocols for data protection.",
      icon: <Shield className="w-6 h-6" />,
      tags: ["React", "Express", "Vercel", "Supabase"],
      liveLink: "https://secure-drive-frontend.vercel.app/",
      githubLink: "https://github.com/ABDUL-WASAY08/Secure-Drive-Frontend",
      color: "from-green-500 to-emerald-500",
      gradient: "",
      image: "./Securedrive.png",
      date: "March 2024"
    },
    {
      id: 4,
      title: "Social Garam (currently working )",
      description:
        "Vibrant social media platform with real-time chats, stories, reels, and AI-powered content recommendations to keep conversations spicy! 🔥",
      fullDescription: "Social Garam is a dynamic social media platform designed for modern digital interactions. The app features real-time messaging with Socket.io, stories that disappear after 24 hours, short-form video content (reels), and AI-powered content recommendations. Users can create profiles, follow others, like and comment on posts, and participate in community discussions. The platform includes robust moderation tools and analytics for content creators.",
      icon: <MessageSquare className="w-6 h-6" />,
      tags: ["React Native", "Socket.io", "Redis", "Firebase"],
      liveLink: "",
      githubLink: "https://github.com/ABDUL-WASAY08/PersonaMail_Frontend",
      color: "from-orange-500 to-red-500",
      gradient: "",
      image: "./personaMail.png",
      date: "April 2024"
    },
  ];

  const Cprojects = [
    {
      id: 1,
      title: "Routine App",
      description:
        "The app in which user can manage his task and daily life routine",
      fullDescription: "Routine App is a comprehensive task management solution that helps users organize their daily activities effectively. The application allows users to create, edit, and delete tasks, set reminders, categorize activities, and track progress over time. Features include priority settings, recurring tasks, calendar integration, and productivity analytics. The intuitive interface makes it easy to maintain a structured daily routine, improving time management and productivity.",
      icon: <Lightbulb className="w-6 h-6" />,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      color: "from-yellow-500 to-amber-500",
      gradient: "",
      image: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Routine+App",
      date: "May 2024"
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section
        id="projects"
        className="py-20 bg-gradient-to-b from-black via-grau-900 to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Real-world solutions I've built, from AI-powered tools to full-stack
              applications
            </p>
          </div>
          <div className="flex gap-3 mt-10 mb-10 ">
            <button
              className={`px-3 py-2 rounded-xl cursor-pointer transition-all duration-300 ${active === "dummy"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}
              onClick={() => setActive('dummy')}
            >
              Practice Projects
            </button>
            <button
              className={`px-3 py-2 rounded-xl cursor-pointer transition-all duration-300 ${active === "Company"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}
              onClick={() => setActive('Company')}
            >
              Company Projects
            </button>
          </div>
          {active === "dummy" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => openModal(project)}
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer"
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
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-gray-300 hover:text-white"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
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
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group/link"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </div>
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
                  onClick={() => openModal(project)}
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer"
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
                  </div>
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
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
           
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full text-gray-300 hover:text-white transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm text-gray-400 flex items-center gap-2">
                    <span>📅 {selectedProject.date}</span>
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${selectedProject.color} p-0.5`}>
                  <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center text-white">
                    {selectedProject.icon}
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">About the Project</h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Preview</span>
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium transition-all duration-300 border border-gray-700"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default ProjectsComp;