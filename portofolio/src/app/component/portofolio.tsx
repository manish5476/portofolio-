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
} from "lucide-react";
import Image from "next/image";

const languages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "HTML",
  "CSS",
  "SQL",
  "TypeScript",
  "React",
  "Node.js",
];

const blogPosts = [
  {
    id: 1,
    title: "My Journey in Computer Engineering",
    excerpt:
      "Exploring the fascinating world of computer engineering and its challenges...",
  },
  {
    id: 2,
    title: "The Future of AI",
    excerpt:
      "Discussing the potential impacts of artificial intelligence on various industries...",
  },
  {
    id: 3,
    title: "Web Development Best Practices",
    excerpt:
      "Sharing insights on creating efficient and user-friendly web applications...",
  },
];

const galleryImages = [
  { id: 1, src: "/", alt: "Project 1" },
  { id: 2, src: "/", alt: "Project 2" },
  { id: 3, src: "/", alt: "Project 3" },
  { id: 4, src: "/", alt: "Project 4" },
  { id: 5, src: "/", alt: "Project 5" },
  { id: 6, src: "/", alt: "Project 6" },
];

const accounts = [
  { name: "GitHub", icon: Github, url: "https://github.com/manishsingh" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/manishsingh",
  },
  {
    name: "CodeChef",
    icon: Code,
    url: "https://codechef.com/users/manishsingh",
  },
  {
    name: "Coding Ninjas",
    icon: Award,
    url: "https://codingninjas.com/users/manishsingh",
  },
  {
    name: "GeeksforGeeks",
    icon: BookOpen,
    url: "https://geeksforgeeks.org/user/manishsingh",
  },
];

type SectionId =
  | "home"
  | "about"
  | "projects"
  | "blog"
  | "contact"
  | "gallery"
  | "accounts"
  | "code";

export default function Component() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    blog: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
    gallery: useRef<HTMLElement>(null),
    accounts: useRef<HTMLElement>(null),
    code: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      } transition-colors duration-300`}
    >
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          isDarkMode ? "bg-gray-800 bg-opacity-90" : "bg-white bg-opacity-90"
        } backdrop-filter backdrop-blur-sm`}
      >
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <ul className="flex space-x-4">
            {(Object.keys(sectionRefs) as SectionId[]).map((sectionId) => (
              <li key={sectionId}>
                <button
                  onClick={() => scrollToSection(sectionId)}
                  className={`text-sm font-medium hover:text-purple-400 transition-colors ${
                    activeSection === sectionId ? "text-purple-400" : ""
                  }`}
                >
                  {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleDarkMode}
            className="flex items-center space-x-2"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </nav>
      </header>

      <main className="pt-16">
        <section
          ref={sectionRefs.home}
          id="hero"
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10"
          >
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full blur-lg opacity-75"></div>
              {/* <Image
                src="./images/manishprofile.jpg"
                alt="Manish Singh"
                width={200}
                height={200}
                className="rounded-full border-4 border-white shadow-lg mx-auto relative z-10"
              /> */}

              <Image
                src="/images/manishprofile.jpg" // Ensure the path starts with a leading slash
                alt="Manish Singh"
                width={500} // Adjust the width as needed
                height={500} // Adjust the height as needed
                className="rounded-full border-4 border-white shadow-lg mx-auto relative z-10"
              />
            </div>
            <h2 className="text-5xl font-bold mb-4">Manish Singh</h2>
            <p className="text-2xl mb-8">
              A computer engineering student driven by curiosity, exploring the
              transformative power of machine learning to unlock future
              possibilities.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </button>
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-8 h-8 text-purple-500" />
          </motion.div>
          <div className="absolute inset-0 z-0">
            <div
              className={`absolute inset-0 ${
                isDarkMode
                  ? "bg-gradient-to-br from-purple-900 to-blue-900"
                  : "bg-gradient-to-br from-purple-100 to-blue-100"
              } opacity-20`}
            ></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          </div>
        </section>

        <section
          ref={sectionRefs.about}
          id="about"
          className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <motion.img
                  src=""
                  alt="Manish Singh"
                  className="rounded-full w-64 h-64 object-cover mx-auto"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="md:w-1/2">
                <motion.p
                  className="text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  I'm a passionate Computer Engineering student with a keen
                  interest in web development and artificial intelligence. My
                  goal is to create innovative solutions that make a positive
                  impact on people's lives through technology.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        <section id="languages" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Programming Languages
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  className="bg-purple-600 rounded-lg p-4 text-white font-bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {lang}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section ref={sectionRefs.projects} id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <motion.div
                  key={project}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: project * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                >
                  <img
                    src={`/placeholder.svg?height=200&width=400&text=Project+${project}`}
                    alt={`Project ${project}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Project {project}
                    </h3>
                    <p className="text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section ref={sectionRefs.blog} id="blog" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Latest Blog Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-lg perspective"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ rotateY: 180 }}
                >
                  <div className="p-6 backface-hidden">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-400">{post.excerpt}</p>
                  </div>
                  <div
                    className="p-6 backface-hidden absolute inset-0 bg-purple-600 flex items-center justify-center"
                    style={{ transform: "rotateY(180deg)" }}
                  >
                    <a
                      href={`#blog/${post.id}`}
                      className="text-white hover:underline"
                    >
                      Read more
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section ref={sectionRefs.code} id="code" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Code Showcase
            </h2>
            <motion.div
              className="bg-gray-800 rounded-lg p-6 overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <pre className="text-sm overflow-x-auto">
                <code className="language-javascript">
                  {`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`}
                </code>
              </pre>
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0"
                animate={{
                  opacity: [0, 0.2, 0],
                  left: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </div>
        </section>

        <section
          ref={sectionRefs.accounts}
          id="accounts"
          className="py-20 bg-gray-800"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">My Accounts</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {accounts.map((account, index) => (
                <motion.a
                  key={account.name}
                  href={account.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 rounded-lg p-4 flex flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(123, 31, 162, 0.5)",
                  }}
                >
                  <account.icon className="w-12 h-12 mb-2 text-purple-400" />
                  <span className="text-sm font-medium">{account.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={sectionRefs.contact}
          id="contact"
          className="py-20 bg-gray-900"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Get in Touch
            </h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
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
                  className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div className="mb-4">
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
                  className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div className="mb-4">
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
                  className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        <section
          ref={sectionRefs.gallery}
          id="gallery"
          className="py-20 bg-gray-800"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Project Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 3 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white text-lg font-bold">{image.alt}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Manish Singh. All rights reserved.</p>
        </div>
      </footer>

      <AnimatePresence>
        {scrollY > 100 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-4 right-4 p-2 bg-purple-600 rounded-full shadow-lg"
          >
            <button
              onClick={() => scrollToSection("home")}
              className="text-white"
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
  );
}
