import { useState, useEffect, useRef, useCallback } from "react";
import { useForm } from "@formspree/react";

// ── Data ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "COMSATS University Islamabad, Abbottabad Campus",
    period: "2022 – 2026",
    gpa: "3.7 / 4.0",
    description: "Comprehensive computer science program covering software engineering, algorithms, data structures, databases, and modern web technologies. Completed multiple full-stack projects and participated in coding competitions.",
    courses: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Database Systems", "Software Engineering", "Web Development"],
    accent: "#7c6af7",
  },
];

const CERTIFICATIONS = [
  {
    title: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co.",
    platform: "Forage",
    year: "2024",
    icon: "💹",
    accent: "#60a5fa",
    credential: "#",
  },
  {
    title: "Web Development / ML / DevOps Intern",
    issuer: "CodeAlpha",
    platform: "CodeAlpha",
    year: "2024",
    icon: "💻",
    accent: "#a78bfa",
    credential: "#",
  },
  {
    title: "Full Stack Web Developer",
    issuer: "Web Stack Academy",
    platform: "Web Stack Academy",
    year: "2024",
    icon: "🌐",
    accent: "#34d399",
    credential: "#",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    platform: "freeCodeCamp",
    year: "2023",
    icon: "🎨",
    accent: "#fb923c",
    credential: "#",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    platform: "freeCodeCamp",
    year: "2023",
    icon: "⚡",
    accent: "#f59e0b",
    credential: "#",
  },
  {
    title: "Back End Development & APIs",
    issuer: "freeCodeCamp",
    platform: "freeCodeCamp",
    year: "2023",
    icon: "🔧",
    accent: "#f472b6",
    credential: "#",
  },
];

const SKILL_METERS = [
  { name: "React / Next.js", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "Node.js / Express", level: 85 },
  { name: "Python", level: 80 },
  { name: "PostgreSQL / MongoDB", level: 78 },
  { name: "Docker / DevOps", level: 70 },
  { name: "UI/UX Design", level: 75 },
];

const STATS = [
  { number: 5, suffix: "+", label: "Projects Shipped" },
  { number: 3, suffix: "", label: "Internships" },
  { number: 6, suffix: "", label: "Certifications" },
  { number: 5, suffix: "+", label: "Tech Stacks" },
];

const SKILLS = {
  "Frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "Vue.js"],
  "Backend": ["Node.js", "Express.js", "Python", "Django", "REST APIs", "GraphQL"],
  "Database": ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase"],
  "DevOps & Tools": ["Git", "Docker", "Linux", "AWS", "Vercel", "CI/CD"],
};

const PROJECTS = [
  {
    title: "Train Optimal Model",
    subtitle: "GitHub-Powered AI Training Platform",
    description: "A platform that enhances your ability to train new AI models using your own GitHub repository. Connect your repo, configure training parameters, and deploy custom models with ease.",
    tech: ["React", "Python", "AI/ML", "GitHub API", "Docker"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop&auto=format",
    link: "#",
    github: "https://github.com/ABDUL-WASAY08",
    accent: "#7c6af7",
  },
  {
    title: "AI Resume Builder",
    subtitle: "Intelligent Resume Creation Tool",
    description: "An AI-powered resume builder that crafts professional, ATS-optimized resumes. Get smart suggestions, template matching, and real-time formatting to land your dream job.",
    tech: ["React", "Node.js", "AI/LLM", "PDF Generation", "Tailwind"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop&auto=format",
    link: "#",
    github: "https://github.com/ABDUL-WASAY08",
    accent: "#a78bfa",
  },
  {
    title: "Car Rental System",
    subtitle: "Full-Stack Vehicle Rental Platform",
    description: "A complete car rental management system with vehicle listings, booking workflows, user authentication, and admin dashboard for fleet management and reservations.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
    image: "/carrental.png",
    link: "#",
    github: "https://github.com/ABDUL-WASAY08",
    accent: "#34d399",
  },
  {
    title: "Order Your Services",
    subtitle: "Professional Services Marketplace",
    description: "A platform that helps you hire professionals for daily life work like electricians, plumbers, and more. Or register yourself as a professional expert with your own pricing.",
    tech: ["React", "Node.js", "PostgreSQL", "REST API", "Stripe"],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop&auto=format",
    link: "#",
    github: "https://github.com/ABDUL-WASAY08",
    accent: "#f59e0b",
  },
  {
    title: "Secure Drive",
    subtitle: "Encrypted File Storage System",
    description: "A secure cloud storage solution with end-to-end encryption, file sharing with access controls, and real-time sync. Your files, your keys, your privacy.",
    tech: ["React", "Node.js", "Encryption", "WebSockets", "Cloud Storage"],
    image: "/Securedrive.png",
    link: "#",
    github: "https://github.com/ABDUL-WASAY08",
    accent: "#60a5fa",
  },
];

const EXPERIENCE = [
  {
    company: "Forage",
    role: "Software Engineering / Cloud / Tech Intern Simulation",
    period: "2024 – Present",
    type: "Virtual Experience",
    description: "Completed practical, self-paced modules mirroring day-to-day tasks given to junior and mid-level engineers — including setting up development environments, pushing code via Git/GitHub, handling backend logic, and configuring basic cloud infrastructure with partners like Skyscanner, Accenture, and JPMorgan.",
    highlights: ["Dev environment setup", "Git/GitHub workflows", "Backend logic development", "Cloud infrastructure configuration"],
    accent: "#7c6af7",
  },
  {
    company: "CodeAlpha",
    role: "Web Development / ML / DevOps Intern",
    period: "2024",
    type: "Virtual Internship",
    description: "Worked on structured, assignment-based milestones across multiple disciplines — building responsive interfaces and client-server apps for Web Dev, implementing models using Python libraries for AI/ML, and practicing containerization and pipeline workflows using Git, Docker, and AWS fundamentals.",
    highlights: ["Responsive web development", "Python ML model implementation", "Docker containerization", "CI/CD pipeline workflows"],
    accent: "#a78bfa",
  },
  {
    company: "Web Stack Academy",
    role: "Full Stack Web Developer Intern",
    period: "2024",
    type: "Training Program",
    description: "Completed a guided software development lifecycle (SDLC) setup — designing databases, building REST APIs using Node/Express, crafting responsive React user interfaces, and deploying applications, culminating in a verifiable certificate upon completion.",
    highlights: ["Database design & modeling", "Node/Express REST APIs", "React UI development", "Application deployment"],
    accent: "#34d399",
  },
];

// ── Utility hooks ─────────────────────────────────────────────────────────────

function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, { threshold: 0.1, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function useTypewriter(words, speed = 90, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx(c => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setCharIdx(0);
          setWordIdx(i => (i + 1) % words.length);
        } else {
          setCharIdx(c => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

// ── Components ────────────────────────────────────────────────────────────────

function AnimatedSection({ children, className = "", delay = 0 }) {
  const { ref, visible } = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={`fade-in-section ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function StaggerSection({ children, className = "" }) {
  const { ref, visible } = useIntersectionObserver();
  return (
    <div ref={ref} className={`stagger-children ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

// ── Nav ───────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (section) => {
    setMenuOpen(false);
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(8,8,16,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(124,106,247,0.1)" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-mono text-sm text-purple-400 tracking-wider hover:text-purple-300 transition-colors"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            aw<span className="text-purple-300">.</span>dev
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <li key={link}>
                <button onClick={() => scrollTo(link)} className="nav-link">
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/923315789320?text=Hello%20Abdul%20Wasay%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20hiring%20you%20for%20a%20project.%20Are%20you%20available%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex btn-primary text-xs py-2 px-5"
          >
            Hire Me
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            <span className={`block h-px w-6 bg-slate-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-px w-6 bg-slate-300 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-slate-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map(link => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="text-2xl font-display text-slate-200 hover:text-purple-400 transition-colors"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            {link}
          </button>
        ))}
        <a href="https://wa.me/923315789320?text=Hello%20Abdul%20Wasay%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20hiring%20you%20for%20a%20project.%20Are%20you%20available%3F" target="_blank" rel="noopener noreferrer" className="btn-primary mt-4">
          Hire Me
        </a>
      </div>
    </>
  );
}

// ── Animated code line ────────────────────────────────────────────────────────

const CODE_LINES = [
  { text: 'import { skills } from "@abdul-wasay/toolkit";', color: "#c4b5fd" },
  { text: "", color: "" },
  { text: "const developer = {", color: "#e8e6f0" },
  { text: '  name: "Abdul Wasay",', color: "#a78bfa" },
  { text: '  role: "Full-Stack Developer",', color: "#34d399" },
  { text: "  skills: [\"React\", \"Node.js\", \"Python\"],", color: "#60a5fa" },
  { text: '  passion: "Building elegant solutions",', color: "#f59e0b" },
  { text: "};", color: "#e8e6f0" },
  { text: "", color: "" },
  { text: "export default function createApp() {", color: "#c4b5fd" },
  { text: "  return <Developer {...developer} />;", color: "#a78bfa" },
  { text: "}", color: "#e8e6f0" },
];

function CodeLine({ index }) {
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState("");
  const line = CODE_LINES[index];
  const delay = index * 0.3;

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), delay * 1000);
    return () => clearTimeout(showTimer);
  }, [delay]);

  useEffect(() => {
    if (!visible || !line.text) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(line.text.slice(0, i));
      if (i >= line.text.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, [visible, line.text]);

  if (!line.text) return <div className="h-3" />;

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}>
      <span style={{ color: line.color }}>{typed}</span>
      {visible && typed.length < line.text.length && <span className="typewriter-cursor" />}
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  const titles = ["Full-Stack Developer", "Creative Developer", "UI/UX Craftsman", "Problem Solver"];
  const current = useTypewriter(titles);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124,106,247,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,106,247,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at 40% 50%, black 30%, transparent 75%)",
        }}
      />

      {/* Radial glow behind image */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,106,247,0.45) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Left — Text */}
        <div>
          <div className="section-label mb-8 fade-in-section visible" style={{ transitionDelay: "100ms" }}>
            Hello, world — I'm
          </div>

          <h1
            className="fade-in-section visible text-6xl sm:text-7xl md:text-8xl font-light leading-none tracking-tight mb-6"
            style={{ fontFamily: "'Fraunces', serif", transitionDelay: "200ms" }}
          >
            Abdul{" "}
            <span className="text-gradient italic">Wasay</span>
          </h1>

          <div
            className="fade-in-section visible text-xl sm:text-2xl mb-8 h-9"
            style={{ transitionDelay: "350ms", color: "#a09ec0", fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem" }}
          >
            <span className="text-purple-400">&gt;</span> {current}<span className="typewriter-cursor" />
          </div>

          <p
            className="fade-in-section visible text-base sm:text-lg leading-relaxed max-w-xl mb-12"
            style={{ color: "#6b6890", transitionDelay: "500ms" }}
          >
            I build elegant, performant web experiences — from crisp interfaces to robust
            server-side architectures. Passionate about clean code and creative solutions.
          </p>

          <div className="fade-in-section visible flex flex-wrap gap-4" style={{ transitionDelay: "650ms" }}>
            <button className="btn-primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View Projects
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a href="/resume.pdf" className="btn-outline" download>
              Download CV
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right — Animated code block */}
        <div className="fade-in-section visible flex justify-center md:justify-end" style={{ transitionDelay: "400ms" }}>
          <div className="relative w-full max-w-md">
            {/* Code content */}
            <div className="p-5 font-mono text-xs leading-relaxed" style={{ fontFamily: "'JetBrains Mono', monospace", filter: "blur(0.3px)", opacity: 0.5 }}>
              <CodeLine index={0} />
              <CodeLine index={1} />
              <CodeLine index={2} />
              <CodeLine index={3} />
              <CodeLine index={4} />
              <CodeLine index={5} />
              <CodeLine index={6} />
              <CodeLine index={7} />
              <CodeLine index={8} />
              <CodeLine index={9} />
              <CodeLine index={10} />
              <CodeLine index={11} />
            </div>

            {/* Floating tech badges */}
            <div className="absolute -top-4 -right-4 flex flex-col gap-2" style={{ animation: "fadeInBadge 2s ease 1.5s forwards", opacity: 0 }}>
              {["React", "Node.js", "Python"].map((tech, i) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    background: "rgba(124,106,247,0.1)",
                    border: "1px solid rgba(124,106,247,0.25)",
                    color: "#a78bfa",
                    fontFamily: "'JetBrains Mono', monospace",
                    animation: `floatBadge 3s ease-in-out ${i * 0.5}s infinite`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="fade-in-section visible absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ transitionDelay: "900ms" }}
      >
        <span className="section-label text-xs">scroll</span>
        <div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, rgba(124,106,247,0.6), transparent)" }}
        />
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="section-label mb-4">01 — About</div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-12">
          <AnimatedSection>
            <h2
              className="text-4xl sm:text-5xl font-light leading-tight mb-8"
              style={{ fontFamily: "'Fraunces', serif", color: "#e8e6f0" }}
            >
              Crafting digital
              <br />
              <span className="text-gradient italic">experiences</span>
              <br />
              with purpose
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#6b6890" }}>
              I'm a full-stack developer with a passion for building things that are both
              beautifully designed and technically sound. I thrive at the intersection of
              engineering precision and creative problem-solving.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#6b6890" }}>
              My background spans frontend artistry, backend architecture, and modern web technologies —
              giving me a holistic perspective that helps me build software that's not only
              functional but delightful to use.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/ABDUL-WASAY08" target="_blank" rel="noopener noreferrer" className="btn-outline py-2.5 px-5 text-xs">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/abdul-wasay-0a75283a4/" target="_blank" rel="noopener noreferrer" className="btn-outline py-2.5 px-5 text-xs">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </AnimatedSection>

          {/* Animated stats grid */}
          <AnimatedSection delay={200}>
            <StatGrid />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ── Animated stat counter card ────────────────────────────────────────────────

function StatCard({ stat, started }) {
  const count = useCounter(stat.number, 1800, started);
  return (
    <div className="card-glow rounded-xl p-7">
      <div className="text-4xl font-light mb-1 text-gradient" style={{ fontFamily: "'Fraunces', serif" }}>
        {count}{stat.suffix}
      </div>
      <div className="text-sm" style={{ color: "#6b6890" }}>{stat.label}</div>
    </div>
  );
}

function StatGrid() {
  const { ref, visible } = useIntersectionObserver();
  return (
    <div ref={ref} className="grid grid-cols-2 gap-4">
      {STATS.map(s => <StatCard key={s.label} stat={s} started={visible} />)}
    </div>
  );
}

// ── Skill meters ──────────────────────────────────────────────────────────────

function SkillBar({ name, level, started, delay }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm" style={{ color: "#c4b5fd", fontFamily: "'Inter', sans-serif" }}>{name}</span>
        <span className="text-xs" style={{ color: "#6b6890", fontFamily: "'JetBrains Mono', monospace" }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(124,106,247,0.12)" }}>
        <div
          className="h-full rounded-full"
          style={{
            width: started ? `${level}%` : "0%",
            background: "linear-gradient(90deg, #7c6af7, #a78bfa)",
            transition: `width 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
            boxShadow: started ? "0 0 12px rgba(124,106,247,0.5)" : "none",
          }}
        />
      </div>
    </div>
  );
}

// ── Skills ────────────────────────────────────────────────────────────────────

function Skills() {
  const { ref, visible } = useIntersectionObserver();

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="section-label mb-4">02 — Skills</div>
          <h2
            className="text-4xl sm:text-5xl font-light leading-tight mt-4 mb-16"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Tools of the <span className="text-gradient italic">trade</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Tag clouds */}
          <div>
            <AnimatedSection>
              <p className="section-label mb-6">Technology Stack</p>
            </AnimatedSection>
            <StaggerSection className="grid sm:grid-cols-2 gap-4">
              {Object.entries(SKILLS).map(([category, items]) => (
                <div key={category} className="card-glow rounded-2xl p-6">
                  <div className="section-label mb-4">{category}</div>
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </StaggerSection>
          </div>

          {/* Skill meters */}
          <div ref={ref}>
            <AnimatedSection>
              <p className="section-label mb-6">Proficiency</p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="card-glow rounded-2xl p-8 space-y-6">
                {SKILL_METERS.map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} started={visible} delay={i * 80} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Projects ──────────────────────────────────────────────────────────────────

function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="section-label mb-4">03 — Projects</div>
          <h2
            className="text-4xl sm:text-5xl font-light leading-tight mt-4 mb-4"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Selected <span className="text-gradient italic">work</span>
          </h2>
          <p className="text-sm mb-16" style={{ color: "#6b6890" }}>
            A collection of projects spanning full-stack development, AI/ML, and cloud platforms.
          </p>
        </AnimatedSection>

        <StaggerSection className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className="card-glow rounded-2xl overflow-hidden group cursor-pointer"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                boxShadow: active === i ? `0 0 60px ${p.accent}18, 0 20px 60px rgba(0,0,0,0.5)` : undefined,
                borderColor: active === i ? `${p.accent}55` : undefined,
              }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="project-img-overlay" />
                <div
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-mono border"
                  style={{
                    background: `${p.accent}15`,
                    borderColor: `${p.accent}40`,
                    color: p.accent,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                  }}
                >
                  {p.tech[0]}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="section-label mb-1" style={{ color: p.accent }}>{p.subtitle}</div>
                <h3
                  className="text-lg font-medium mb-3"
                  style={{ fontFamily: "'Fraunces', serif", color: "#e8e6f0" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b6890" }}>
                  {p.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.slice(1).map(t => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(124,106,247,0.06)",
                        border: "1px solid rgba(124,106,247,0.15)",
                        color: "#a09ec0",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.65rem",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={p.github}
                    className="flex items-center gap-1.5 text-xs transition-colors hover:text-purple-400"
                    style={{ color: "#6b6890", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={p.link}
                    className="flex items-center gap-1.5 text-xs transition-colors hover:text-purple-400"
                    style={{ color: "#6b6890", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </StaggerSection>
      </div>
    </section>
  );
}

// ── Experience ────────────────────────────────────────────────────────────────

function Experience() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="section-label mb-4">04 — Experience</div>
          <h2
            className="text-4xl sm:text-5xl font-light leading-tight mt-4 mb-16"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Where I've <span className="text-gradient italic">grown</span>
          </h2>
        </AnimatedSection>

        <div className="relative pl-8">
          <div className="timeline-line" />

          <AnimatedSection>
            <div className="space-y-4">
              {EXPERIENCE.map((exp, i) => (
                <div
                  key={exp.company}
                  className="card-glow rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  style={{
                    borderColor: expanded === i ? `${exp.accent}40` : undefined,
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 w-3 h-3 rounded-full border-2 mt-7 -translate-x-1/2"
                    style={{ background: exp.accent, borderColor: "#080810" }}
                  />

                  {/* Header */}
                  <div className="flex items-start justify-between p-7 gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <span
                          className="text-xs px-2.5 py-0.5 rounded-full"
                          style={{
                            background: `${exp.accent}15`,
                            border: `1px solid ${exp.accent}40`,
                            color: exp.accent,
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "0.65rem",
                          }}
                        >
                          {exp.type}
                        </span>
                        <span className="section-label">{exp.period}</span>
                      </div>
                      <h3
                        className="text-lg font-medium mb-0.5"
                        style={{ fontFamily: "'Fraunces', serif", color: "#e8e6f0" }}
                      >
                        {exp.company}
                      </h3>
                      <div className="text-sm" style={{ color: exp.accent }}>{exp.role}</div>
                    </div>

                    <div
                      className="text-xl transition-transform duration-300 flex-shrink-0 mt-1"
                      style={{
                        color: "#6b6890",
                        transform: expanded === i ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      ↓
                    </div>
                  </div>

                  {/* Expanded */}
                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{ maxHeight: expanded === i ? "400px" : "0px" }}
                  >
                    <div className="px-7 pb-7 border-t" style={{ borderColor: "rgba(124,106,247,0.1)" }}>
                      <p className="text-sm leading-relaxed mt-5 mb-5" style={{ color: "#6b6890" }}>
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map(h => (
                          <span key={h} className="skill-tag">{h}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ── Education ─────────────────────────────────────────────────────────────────

function Education() {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="section-label mb-4">05 — Education</div>
          <h2
            className="text-4xl sm:text-5xl font-light leading-tight mt-4 mb-16"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Academic <span className="text-gradient italic">foundation</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Degree card */}
          <AnimatedSection>
            {EDUCATION.map(edu => (
              <div key={edu.degree} className="card-glow rounded-2xl p-8" style={{ borderColor: `${edu.accent}30` }}>
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${edu.accent}15`, border: `1px solid ${edu.accent}30` }}
                  >
                    🎓
                  </div>
                  <div>
                    <div className="section-label mb-1" style={{ color: edu.accent }}>{edu.period}</div>
                    <h3 className="text-lg font-medium leading-snug" style={{ fontFamily: "'Fraunces', serif", color: "#e8e6f0" }}>
                      {edu.degree}
                    </h3>
                    <p className="text-sm mt-0.5" style={{ color: "#a09ec0" }}>{edu.institution}</p>
                  </div>
                </div>

                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs mb-5"
                  style={{ background: `${edu.accent}12`, border: `1px solid ${edu.accent}30`, color: edu.accent, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  GPA: {edu.gpa}
                </div>

                <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b6890" }}>{edu.description}</p>

                <div>
                  <div className="section-label mb-3">Key Courses</div>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map(c => (
                      <span key={c} className="skill-tag">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection delay={150}>
            <div className="section-label mb-5">Certifications</div>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, i) => (
                <div
                  key={cert.title}
                  className="card-glow rounded-xl p-5 flex items-center gap-4 group transition-all duration-300"
                  style={{
                    animationDelay: `${i * 60}ms`,
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${cert.accent}15`, border: `1px solid ${cert.accent}30` }}
                  >
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate" style={{ color: "#e8e6f0" }}>{cert.title}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#6b6890" }}>{cert.issuer} · {cert.year}</div>
                  </div>
                  <div
                    className="text-xs px-2.5 py-1 rounded-full flex-shrink-0"
                    style={{
                      background: `${cert.accent}12`,
                      border: `1px solid ${cert.accent}30`,
                      color: cert.accent,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                    }}
                  >
                    {cert.platform}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────

function Contact() {
  const [state, handleSubmit] = useForm("mqeyrpzk");

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <div className="section-label mb-4">06 — Contact</div>
          <h2
            className="text-4xl sm:text-5xl font-light leading-tight mt-4 mb-6"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Let's build something
            <br />
            <span className="text-gradient italic">remarkable</span> together
          </h2>
          <p className="text-base mb-16 max-w-md mx-auto" style={{ color: "#6b6890" }}>
            I'm open to freelance projects, full-time roles, and interesting collaborations. Drop me a line.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <form onSubmit={handleSubmit} className="card-glow rounded-2xl p-8 sm:p-10 text-left max-w-2xl mx-auto">
            <input type="hidden" name="_subject" value="New message from portfolio" />
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="section-label block mb-2">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-purple-500/40"
                  style={{
                    background: "rgba(124,106,247,0.05)",
                    border: "1px solid rgba(124,106,247,0.2)",
                    color: "#e8e6f0",
                  }}
                />
              </div>
              <div>
                <label className="section-label block mb-2">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-purple-500/40"
                  style={{
                    background: "rgba(124,106,247,0.05)",
                    border: "1px solid rgba(124,106,247,0.2)",
                    color: "#e8e6f0",
                  }}
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="section-label block mb-2">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none focus:ring-2 focus:ring-purple-500/40"
                style={{
                  background: "rgba(124,106,247,0.05)",
                  border: "1px solid rgba(124,106,247,0.2)",
                  color: "#e8e6f0",
                }}
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full justify-center"
              disabled={state.submitting}
            >
              {!state.succeeded && !state.submitting && "Send Message"}
              {state.submitting && "Sending…"}
              {state.succeeded && "Message Sent ✓"}
            </button>
            {state.errors && state.errors.length > 0 && (
              <p className="text-xs mt-3 text-center" style={{ color: "#f87171" }}>
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </AnimatedSection>

        {/* Social links */}
        <AnimatedSection delay={400}>
          <div className="flex justify-center gap-6 mt-16">
            {[
              { href: "https://github.com/ABDUL-WASAY08", label: "GitHub", icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg> },
              { href: "https://www.linkedin.com/in/abdul-wasay-0a75283a4/", label: "LinkedIn", icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
              { href: "mailto:tahawasay1@gmail.com", label: "Email", icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(124,106,247,0.08)",
                  border: "1px solid rgba(124,106,247,0.2)",
                  color: "#a09ec0",
                }}
                aria-label={s.label}
                onMouseEnter={e => { e.currentTarget.style.color = "#7c6af7"; e.currentTarget.style.borderColor = "rgba(124,106,247,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#a09ec0"; e.currentTarget.style.borderColor = "rgba(124,106,247,0.2)"; }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center"
      style={{ borderTop: "1px solid rgba(124,106,247,0.1)" }}
    >
      <p className="text-xs" style={{ color: "#4a476a", fontFamily: "'JetBrains Mono', monospace" }}>
        © 2025 Abdul Wasay — Built with React & ♥
      </p>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });

  const onMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <div className="relative min-h-full" onMouseMove={onMouseMove}>
      {/* Ambient orbs */}
      <div className="orb" style={{ width: 600, height: 600, top: "-10%", left: "-15%", background: "rgba(124,106,247,0.12)" }} />
      <div className="orb" style={{ width: 500, height: 500, top: "40%", right: "-10%", background: "rgba(167,139,250,0.08)", animationDelay: "7s" }} />
      <div className="orb" style={{ width: 400, height: 400, bottom: "10%", left: "20%", background: "rgba(52,211,153,0.06)", animationDelay: "14s" }} />

      {/* Cursor glow */}
      <div
        className="cursor-glow hidden lg:block"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
