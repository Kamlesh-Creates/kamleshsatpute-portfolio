"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function HomePage() {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Web Designer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 dark:from-slate-950 dark:via-slate-900/50 dark:to-indigo-950/30" />
        
        {/* Animated background elements - Made responsive */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" />

        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left side - Content */}
              <div className="order-2 lg:order-1">
                {/* Greeting text */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="mb-6 sm:mb-8"
                >
                  <span className="inline-flex items-center px-4 sm:px-6 py-2 rounded-full text-sm font-medium bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50">
                    👋 Welcome to my portfolio
                  </span>
                </motion.div>

                {/* Main heading with enhanced typography */}
                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent mb-4 sm:mb-6"
                >
                  Kamlesh Satpute
                </motion.h1>

                {/* Role with enhanced styling */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="mb-6 sm:mb-8"
                >
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    <span>{text}</span>
                    <Cursor cursorColor="#3b82f6" />
                  </h2>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for opportunities</span>
                  </div>
                </motion.div>

                {/* Enhanced description */}
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-600 dark:text-slate-400 mb-8 sm:mb-12 max-w-2xl"
                >
                 I am currently working as a Junior Webmaster at CESA SDW ACM.I am passionate about web design and continuously enhancing my skills to create engaging, user-friendly, and impactful digital experiences. My focus is on learning, experimenting, and improving as I grow in the field of web development and design.
                </motion.p>

                {/* Enhanced CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4"
                >
                  <Link
                    href="/about"
                    className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="relative z-10">About Me</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
                  </Link>
                  
                  <Link
                    href="/projects"
                    className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-slate-700 dark:text-white bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                  >
                    <span className="relative z-10">View Projects</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-slate-700 dark:text-white bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                  >
                    <span className="relative z-10">Contact Me</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
                  </Link>
                </motion.div>
              </div>

              {/* Right side - Photo */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, x: 30, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  className="relative"
                >
                  {/* Enhanced photo container with modern styling */}
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px]">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 rounded-full p-1 blur-sm opacity-30" />
                    
                    {/* Main photo container */}
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                      {/* Static gradient border */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full p-1">
                        <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full overflow-hidden">
                          {/* Profile image */}
                          <Image
                            src="/images/kamleshport.jpg"
                            alt="Kamlesh Satpute"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-110"
                            priority
                          />
                          
                          {/* Subtle overlay for depth */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>
                      </div>
                    </div>

                    {/* Enhanced floating elements with better positioning and effects - Made mobile responsive */}
                    <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-80 animate-bounce shadow-lg">
                      <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-white text-sm sm:text-lg">💻</span>
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-80 animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }}>
                      <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-white text-xs sm:text-sm">⚡</span>
                      </div>
                    </div>
                    
                    <div className="absolute top-1/2 -right-6 sm:-right-12 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full opacity-80 animate-bounce shadow-lg" style={{ animationDelay: '1s' }}>
                      <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-white text-xs">🚀</span>
                      </div>
                    </div>

                    {/* Additional decorative elements - Made mobile responsive */}
                    <div className="absolute top-1/4 -left-4 sm:-left-8 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-60 animate-pulse shadow-md" />
                    <div className="absolute bottom-1/4 -right-4 sm:-right-8 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-60 animate-pulse shadow-md" style={{ animationDelay: '0.7s' }} />
                    
                    {/* Subtle background glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl animate-pulse" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500">
              <span className="text-xs sm:text-sm font-medium">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center"
              >
                <div className="w-1 h-2 sm:h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/10 dark:from-slate-950 dark:via-slate-900/30 dark:to-indigo-950/20">
        {/* Background elements - Made responsive */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent mb-4 sm:mb-6">
                Explore My Portfolio
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4">
                Discover more about my journey, projects, and get in touch
              </p>
            </motion.div>

            {/* Summary Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* About Summary Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href="/about" className="block h-full">
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full group-hover:border-blue-300 dark:group-hover:border-blue-600">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl sm:text-2xl">👨‍💻</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        About Me
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-center leading-relaxed mb-6 text-sm sm:text-base">
                      Learn about my journey, skills, and passion for web development. Discover my educational background and current role as a Junior Webmaster.
                    </p>
                    <div className="flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base">
                      <span>Learn More</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Projects Summary Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href="/projects" className="block h-full">
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full group-hover:border-purple-300 dark:group-hover:border-purple-600">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl sm:text-2xl">🚀</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        My Projects
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-center leading-relaxed mb-6 text-sm sm:text-base">
                      Explore my portfolio of projects including Food Delivery Platform, Online Voting System, Hotel Booking System, and more.
                    </p>
                    <div className="flex items-center justify-center text-purple-600 dark:text-purple-400 font-semibold group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300 text-sm sm:text-base">
                      <span>View Projects</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Contact Summary Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href="/contact" className="block h-full">
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full group-hover:border-green-300 dark:group-hover:border-green-600">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl sm:text-2xl">📧</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                        Get In Touch
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-center leading-relaxed mb-6 text-sm sm:text-base">
                      Ready to collaborate? Send me a message or connect with me on social media. I'm always open to new opportunities and discussions.
                    </p>
                    <div className="flex items-center justify-center text-green-600 dark:text-green-400 font-semibold group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-300 text-sm sm:text-base">
                      <span>Contact Me</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


