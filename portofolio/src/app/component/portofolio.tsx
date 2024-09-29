"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Moon,
  Sun,
  Github,
  Linkedin,
  Code,
  Award,
  BookOpen,
  Server,
  Database,
  Download,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
// import Link from "next/link";

const skills = [
  {
    name: "React",
    icon: <Code className="w-6 h-6" />,
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    name: "Angular",
    icon: <Code className="w-6 h-6" />,
    color: "text-red-500",
    bg: "bg-red-100",
  },
  {
    name: "Node.js",
    icon: <Server className="w-6 h-6" />,
    color: "text-green-500",
    bg: "bg-green-100",
  },
  {
    name: "TypeScript",
    icon: <Code className="w-6 h-6" />,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    name: "Python",
    icon: <Code className="w-6 h-6" />,
    color: "text-yellow-500",
    bg: "bg-yellow-100",
  },
  {
    name: "SQL",
    icon: <Database className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-100",
  },
  {
    name: "SQL Server",
    icon: <Code className="w-6 h-6" />,
    color: "text-pink-500",
    bg: "bg-pink-100",
  },
];

const accounts = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/manishsingh",
    bg: "bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/manishsingh",
    bg: "bg-blue-700",
  },
  {
    name: "CodeChef",
    icon: Code,
    url: "https://codechef.com/users/manishsingh",
    bg: "bg-gray-600",
  },
  {
    name: "Coding Ninjas",
    icon: Award,
    url: "https://codingninjas.com/users/manishsingh",
    bg: "bg-orange-600",
  },
  {
    name: "GeeksforGeeks",
    icon: BookOpen,
    url: "https://geeksforgeeks.org/user/manishsingh",
    bg: "bg-green-700",
  },
];

const projects = [
  {
    title: "AI-Powered Chat Application",
    description:
      "A real-time chat app with AI-driven conversation suggestions and sentiment analysis.",
    image: "/images/image.png",
    link: "https://linkedin.com/in/manishsingh",
  },
  {
    title: "Blockchain Voting System",
    description:
      "A secure and transparent voting system built on blockchain technology for organizational elections.",
    image: "/images/image.png",
    link: "https://linkedin.com/in/manishsingh",
  },
  {
    title: "IoT Smart Home Hub",
    description:
      "A centralized IoT platform for managing and automating various smart home devices and sensors.",
    image: "/images/image.png",
    link: "https://linkedin.com/in/manishsingh",
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Neoverce It solutions",
    logo: "/images/neoverce.png",
    period: "June 2023 - August 2023",
    duration: "3 months",
    location: "Surat",
    description: [
      "Work on a Employee management project where owner can view the  Employe activeSection in the Employee Management Project and the task management",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "SRKay Consulting Group",
    logo: "/images/srkay.png",
    period: "december 2023 - April 2024",
    duration: "5 Months",
    location: "Surat",
    description: [
      " developed a dynamic and responsive website utilizing Angular for the front-end framework and Node.js for the back-end server-side logic. Additionally, I integrated SQL Server as the database management system, ensuring efficient data handling and storage. This project involved implementing RESTful APIs for seamless communication between the client and server, enhancing the overall user experience",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "SRKay Consulting Group",
    logo: "/images/srkay.png",
    period: "April 2024 - Current",
    duration: "",
    location: "Surat",
    description: [
      "I am currently working on developing a dynamic and responsive website using Angular for the front-end framework. This experience allows me to explore various features and functionalities of Angular while enhancing my skills in building efficient web applications. Additionally, I am utilizing Node.js for the back-end server-side logic and integrating SQL Server as the database management system, ensuring effective data handling and storage.",
    ],
  },
];

type SectionId =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "resume"
  | "contact";

export default function StylishPortfolio() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    resume: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = (
        Object.entries(sectionRefs) as [
          SectionId,
          React.RefObject<HTMLElement>
        ][]
      ).find(([_, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection[0]);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: SectionId) => {
    const section = sectionRefs[sectionId];
    if (section && section.current) {
      section.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [isDarkMode]);

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div
        className={`min-h-screen ${
          isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
        } transition-colors duration-300`}
      >
        <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-sm">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.h1
                className="text-2xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Manish Singh
              </motion.h1>
              <div className="flex items-center space-x-6">
                <ul className="hidden md:flex space-x-6">
                  {(Object.keys(sectionRefs) as SectionId[]).map(
                    (sectionId) => (
                      <li key={sectionId}>
                        <button
                          onClick={() => scrollToSection(sectionId)}
                          className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                            activeSection === sectionId ? "text-blue-500" : ""
                          }`}
                        >
                          {sectionId.charAt(0).toUpperCase() +
                            sectionId.slice(1)}
                        </button>
                      </li>
                    )
                  )}
                </ul>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main className="pt-20">
          <section
            ref={sectionRefs.home}
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center z-10"
            >
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-75"></div>
                <Image
                  src="/images/profile.jpg"
                  alt="Manish Singh"
                  width={600}
                  height={600}
                  className="rounded-full border-4 border-white shadow-lg mx-auto relative z-10"
                />
              </div>
              <h2 className="text-5xl font-bold mb-4">Manish Singh</h2>
              <p className="text-2xl mb-8 text-black-600 dark:text-black-300">
                Innovating at the intersection of AI and Web Technologies
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get in Touch
              </motion.button>
            </motion.div>
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-8 h-8 text-blue-500" />
            </motion.div>
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 opacity-20"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10"></div>
            </div>
          </section>

          <section
            ref={sectionRefs.about}
            id="about"
            // className="py-20 bg-gray-50 dark:bg-gray-800"
            className={`py-20 ${
              isDarkMode
                ? "bg-gray-900 text-white-800"
                : "bg-gray-100 text-gray-900"
            } transition-colors duration-300`}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div className="mb-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-75"></div>
                    <motion.img
                      src="/images/manish.jpg"
                      alt="Manish Singh"
                      width={300}
                      height={300}
                      className="rounded-full border-4 border-white shadow-lg mx-auto relative z-10"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-10">
                  <motion.p
                    className="text-lg leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    As a passionate Computer Engineering student, I'm on a
                    mission to push the boundaries of technology. My journey in
                    the world of coding began with a simple "Hello, World!" and
                    has evolved into a relentless pursuit of innovation in AI
                    and web technologies.
                  </motion.p>
                  <motion.p
                    className="text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    When I'm not immersed in lines of code, you can find me
                    exploring the latest tech trends, contributing to
                    open-source projects, or mentoring aspiring developers. My
                    goal is to create solutions that not only solve complex
                    problems but also inspire and empower others in the tech
                    community.
                  </motion.p>
                </div>
              </div>
            </div>
          </section>

          <section ref={sectionRefs.skills} id="skills" className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-12 text-center">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`${skill.bg} rounded-xl p-6 shadow-lg`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className={`${skill.color} flex flex-col items-center`}
                    >
                      {skill.icon}
                      <span className="mt-2 font-semibold">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section
            className={`py-20 ${
              isDarkMode
                ? "bg-gray-900 text-white-800"
                : "bg-gray-100 text-gray-900"
            } transition-colors duration-300`}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-12 text-center">
                Connect With Me
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                {accounts.map((account, index) => (
                  <motion.a
                    key={account.name}
                    href={account.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${account.bg} text-white rounded-lg p-4 flex items-center space-x-3 shadow-lg`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <account.icon className="w-6 h-6" />
                    <span className="font-medium">{account.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>

          <section ref={sectionRefs.projects} id="projects" className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-12 text-center">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center"
                      >
                        Learn More <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section
            ref={sectionRefs.experience}
            id="experience"
            className={`py-20 ${
              isDarkMode
                ? "bg-gray-900 text-white-800"
                : "bg-gray-100 text-gray-900"
            } transition-colors duration-300`}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-12 text-center">
                Professional Experience
              </h2>
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={104}
                          height={104}
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-blue-500 dark:text-blue-300 mb-1">
                          {exp.company}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          {exp.period} · {exp.duration}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {exp.location}
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                          {exp.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section ref={sectionRefs.resume} id="resume" className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-12 text-center">
                Digital Resume
              </h2>
              <div className="max-w-4xl mx-auto">
                <motion.div
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-20"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-3xl font-bold">Manish Singh</h3>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                          Computer Engineering Student
                        </p>
                      </div>
                      <Image
                        src="/images/manish.jpg"
                        alt="Manish Singh"
                        width={100}
                        height={100}
                        className="rounded-full border-4 border-white shadow-lg"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-2">
                          Education
                        </h4>
                        <p>B.Tech in Computer Engineering</p>
                        <p>XYZ University (2020-2024)</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Contact</h4>
                        <p>Email: manish@example.com</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Location: New York, NY</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <span
                              key={skill.name}
                              className={`${skill.bg} ${skill.color} px-2 py-1 rounded-full text-sm`}
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">
                          Experience
                        </h4>
                        {experiences.slice(0, 2).map((exp) => (
                          <div key={exp.title} className="mb-2">
                            <p className="font-medium">
                              {exp.title} - {exp.company}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {exp.period}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div className="mt-8 text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center shadow-lg"
                    onClick={() => {
                      // Implement PDF download logic here
                      console.log("Downloading resume as PDF");
                    }}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Full Resume (PDF)
                  </motion.button>
                </div>
              </div>
            </div>
          </section>

          <section
            ref={sectionRefs.contact}
            id="contact"
            className={`py-20 ${
              isDarkMode
                ? "bg-gray-900 text-white-800"
                : "bg-gray-100 text-gray-900"
            } transition-colors duration-300`}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-12 text-center">
                Get in Touch
              </h2>
              <form className="max-w-lg mx-auto">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md shadow-lg transition-colors duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2023 Manish Singh. All rights reserved.</p>
          </div>
        </footer>

        <AnimatePresence>
          {activeSection !== "home" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed bottom-4 right-4 p-2 bg-blue-500 rounded-full shadow-lg"
            >
              <button
                onClick={() => scrollToSection("home")}
                className="text-white"
                aria-label="Scroll to top"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
