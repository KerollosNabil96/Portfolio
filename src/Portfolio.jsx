import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
  };

  // Portfolio Data
  const portfolioData = {
    name: "Kerollos Nabil Amin Hakim",
    title: "Frontend Developer / UI UX Designer",
    bio: "Front-End Web Developer with strong expertise in client-side technologies. Experienced in building responsive web designs using frameworks like Tailwind CSS, Bootstrap, Vue.js, and React.JS.",
    email: "Kerollosnabil96@gmail.com",
    phone: "+201229271686",
    education: [
      {
        degree: "Bachelor of Science in Biophysics and Chemistry",
        institution: "Alexandria University",
        period: "2016–2020",
        details: "Project: The Effect of Radon | Grade: Excellent"
      },
      {
        degree: "Postgraduate Diploma in UI/UX Development",
        institution: "Information Technology Institute (ITI), Cairo University",
        period: "Nov 2024 – Apr 2025",
        details: "Focus: UI/UX Design, Frontend Development (React, Vue)"
      },
      {
        degree: "Full Stack Development Diploma",
        institution: "Route Academy",
        period: "Sep 2023–Jul 2024",
        details: "Focus: Frontend (React), Backend (.NET)"
      }
    ],
    certificates: [
      "JavaScript Intermediate – HackerRank",
      "React Basic Certificate – HackerRank",
      "Frontend Developer (React) Certificate – HackerRank",
      "CSS Certificate – HackerRank"
    ],
    projects: [
      {
        name: "Reservio – Booking Platform",
        period: "Apr 2025",
        description: "Full-stack web app for booking stadiums, clinics, and learning centers.",
        tech: ["Vue.js", "Node.js", "Firebase", "Stripe"],
        features: ["Dark mode", "EN/AR localization", "Custom wallet", "Admin analytics"],
        demoLink: "https://reservio-two.vercel.app/",
        myWork: "UI/UX Design & Frontend Development"
      },
      {
        name: "UGM Family – Youth Platform",
        period: "July 2025",
        description: "React.js platform for 200+ users to manage events and trips.",
        tech: ["React.js", "Firebase", "QR System"],
        features: ["Role-based access", "Wallet system", "Multilingual", "Dashboards"],
        demoLink: "https://ugm-family.vercel.app/",
        myWork: "UI/UX Design & Frontend Development"
      },
      {
        name: "Fixy Landing Page",
        period: "Under Development",
        description: "Modern landing page for Fixy service",
        tech: ["React", "Tailwind CSS"],
        features: ["Responsive design", "Modern UI"],
        demoLink: "https://fixy-land.vercel.app",
        status: "under-development",
        myWork: "UI/UX Design & Frontend Development"
      },
      {
        name: "Glow Website",
        period: "Under Development",
        description: "Elegant website for Glow brand",
        tech: ["React", "Framer Motion"],
        features: ["Animations", "Modern design"],
        demoLink: "https://glow-sable.vercel.app",
        status: "under-development",
        myWork: "UI/UX Design & Frontend Development"
      }
    ],
    experience: [
      {
        role: "Front-End Developer",
        company: "ArtRewards (Oslo, Norway) – Remote",
        period: "Aug 2025 – present",
        responsibilities: [
          "Designing and implementing user-friendly interfaces",
          "Collaborating with international teams remotely",
          "Enhancing website performance and usability"
        ]
      },
      {
        role: "Chemist",
        company: "Pharmaplast Company",
        period: "2020 – 2024",
        responsibilities: [
          "Led and managed teams across multiple factories",
          "Developed organizational and problem-solving abilities"
        ]
      }
    ],
    skills: {
      frontend: ["React.js", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
      styling: ["Tailwind CSS", "Bootstrap", "Sass", "Styled Components"],
      tools: ["Figma", "Git", "Adobe XD", "Illustrator", "Photoshop"],
      other: ["Node.js", "Firebase", "REST APIs", "Agile", "Jest"]
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
        : 'bg-gradient-to-br from-blue-50 to-gray-100 text-gray-800'
    }`}>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        darkMode 
          ? 'bg-gray-900/90 backdrop-blur-md border-b border-gray-700' 
          : 'bg-white/90 backdrop-blur-md border-b border-gray-200'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className={`w-3 h-3 rounded-full ${
                darkMode ? 'bg-green-400' : 'bg-blue-500'
              }`}></div>
              <span className="font-bold text-lg">Kerollos</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'projects', 'experience', 'skills', 'education'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`transition-all duration-300 font-medium ${
                    activeSection === item 
                      ? darkMode 
                        ? 'text-green-400' 
                        : 'text-blue-600'
                      : 'hover:text-gray-400'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-yellow-300' 
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
                }`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:hidden">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-blue-100'
                }`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              <button 
                onClick={toggleMenu}
                className="p-2 focus:outline-none"
              >
                <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-800'} mb-1.5 transition-all ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></div>
                <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-800'} mb-1.5 transition-all ${
                  menuOpen ? 'opacity-0' : ''
                }`}></div>
                <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-800'} transition-all ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 overflow-hidden"
              >
                <div className="flex flex-col space-y-4 pb-4">
                  {['home', 'projects', 'experience', 'skills', 'education'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`text-left py-2 transition-all duration-300 ${
                        activeSection === item 
                          ? darkMode 
                            ? 'text-green-400' 
                            : 'text-blue-600'
                          : ''
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center relative"
          >
            {/* Floating Elements - Modified for mobile */}
            <motion.div
              variants={floatingAnimation}
              animate="animate"
              className="hidden sm:block absolute top-10 left-4 sm:top-20 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full opacity-60"
            ></motion.div>
            <motion.div
              variants={floatingAnimation}
              animate="animate"
              transition={{ delay: 1 }}
              className="hidden sm:block absolute top-20 right-4 sm:top-40 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 bg-blue-400 rounded-full opacity-40"
            ></motion.div>
            <motion.div
              variants={floatingAnimation}
              animate="animate"
              transition={{ delay: 2 }}
              className="hidden sm:block absolute bottom-20 left-4 sm:bottom-40 sm:left-20 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full opacity-60"
            ></motion.div>

            <motion.div
              variants={itemVariants}
              className={`inline-block px-4 py-2 rounded-full ${
                darkMode 
                  ? 'bg-gray-800 text-green-400' 
                  : 'bg-blue-100 text-blue-600'
              } text-sm font-medium mb-8`}
            >
              👋 Welcome to my portfolio
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
            >
              {portfolioData.name}
            </motion.h1>
            
            <motion.h2
              variants={itemVariants}
              className={`text-xl sm:text-2xl md:text-3xl font-light mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {portfolioData.title}
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {portfolioData.bio}
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 ${
                  darkMode
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                View My Work
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('experience')}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border transition-all duration-300 ${
                  darkMode
                    ? 'border-gray-600 hover:bg-gray-800 text-white'
                    : 'border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600'
                }`}
              >
                My Experience
              </motion.button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className={`mt-12 p-4 sm:p-6 rounded-2xl max-w-md mx-auto ${
                darkMode
                  ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700'
                  : 'bg-white/80 backdrop-blur-md border border-gray-200'
              }`}
            >
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-sm sm:text-base">
                <p className="flex items-center justify-center space-x-2">
                  <span>📧</span>
                  <a href={`mailto:${portfolioData.email}`} className="hover:underline break-all">
                    {portfolioData.email}
                  </a>
                </p>
                <p className="flex items-center justify-center space-x-2">
                  <span>📱</span>
                  <a href={`tel:${portfolioData.phone}`} className="hover:underline">
                    {portfolioData.phone}
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Here are some of my recent works
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:scale-105 ${
                  darkMode
                    ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700'
                    : 'bg-white/80 backdrop-blur-md border border-gray-200'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold">{project.name}</h3>
                  {project.status === 'under-development' && (
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs ${
                      darkMode ? 'bg-yellow-500/20 text-yellow-300' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      Under Development
                    </span>
                  )}
                </div>
                
                <p className={`mb-4 text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <span className={`text-sm font-medium ${
                    darkMode ? 'text-green-400' : 'text-blue-600'
                  }`}>
                    {project.myWork}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
                          darkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6 gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 text-center ${
                      darkMode
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    Live Demo
                  </motion.a>
                  
                  {project.status === 'under-development' && (
                    <span className={`text-xs sm:text-sm text-center ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Currently being modified
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
            <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              My professional journey
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`mb-6 sm:mb-8 p-6 sm:p-8 rounded-2xl transition-all duration-500 ${
                  darkMode
                    ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700'
                    : 'bg-white/80 backdrop-blur-md border border-gray-200'
                }`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{exp.role}</h3>
                    <p className={`text-lg sm:text-xl ${
                      darkMode ? 'text-green-400' : 'text-blue-600'
                    }`}>
                      {exp.company}
                    </p>
                  </div>
                  <span className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium ${
                    darkMode ? 'bg-gray-700 text-gray-300' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start text-sm sm:text-base">
                      <span className={`mr-2 sm:mr-3 mt-1.5 ${
                        darkMode ? 'text-green-400' : 'text-blue-600'
                      }`}>•</span>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
            <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Tools and technologies I work with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {Object.entries(portfolioData.skills).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-4 sm:p-6 rounded-2xl transition-all duration-500 ${
                  darkMode
                    ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700'
                    : 'bg-white/80 backdrop-blur-md border border-gray-200'
                }`}
              >
                <h3 className="text-lg sm:text-xl font-bold mb-4 capitalize">
                  {category}
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-center transition-all duration-300 text-sm sm:text-base ${
                        darkMode
                          ? 'bg-gray-700/50 hover:bg-gray-700'
                          : 'bg-blue-50 hover:bg-blue-100'
                      }`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Education & Certifications</h2>
            <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              My learning journey
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`mb-4 sm:mb-6 p-6 sm:p-8 rounded-2xl transition-all duration-500 ${
                  darkMode
                    ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700'
                    : 'bg-white/80 backdrop-blur-md border border-gray-200'
                }`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{edu.degree}</h3>
                    <p className={`text-lg sm:text-xl mb-2 ${
                      darkMode ? 'text-green-400' : 'text-blue-600'
                    }`}>
                      {edu.institution}
                    </p>
                    {edu.details && (
                      <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {edu.details}
                      </p>
                    )}
                  </div>
                  <span className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium ${
                    darkMode ? 'bg-gray-700 text-gray-300' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
              className={`p-6 sm:p-8 rounded-2xl ${
                darkMode
                  ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700'
                  : 'bg-white/80 backdrop-blur-md border border-gray-200'
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {portfolioData.certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className={`p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
                      darkMode ? 'bg-gray-700/50' : 'bg-blue-50'
                    }`}
                  >
                    {cert}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 sm:py-12 ${
        darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-blue-50 border-t border-blue-200'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Let's Work Together</h3>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <p className="text-base sm:text-lg">
                📧 <a href={`mailto:${portfolioData.email}`} className="hover:underline break-all">
                  {portfolioData.email}
                </a>
              </p>
              <p className="text-base sm:text-lg">
                📱 <a href={`tel:${portfolioData.phone}`} className="hover:underline">
                  {portfolioData.phone}
                </a>
              </p>
            </div>
            <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              © {new Date().getFullYear()} Kerollos Nabil Amin Hakim. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;