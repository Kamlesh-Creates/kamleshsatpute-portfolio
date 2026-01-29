"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const skills = [
    "JavaScript","python","C++","React", "Next.js", 
    "Node.js", "MongoDB", "Git/GitHub"
  ];

  const education = [
    {
      title: "Junior College",
      institution: "Fergusson College (Autonomous), Pune",
      period: "2022–2024",
      description: "Completed my Junior College education at Fergusson College, one of the most prestigious institutions in Pune."
    },
    {
      title: "B.Tech in Computer Engineering",
      institution: "PCCOE Pimpri Chinchwad College of Engineering",
      period: "2024–2028",
      description: "I'm currently Pursuing Computer Engineering at PCCOE"
    },
    {
      title: "Junior Webmaster",
      institution: "CESA SDW ACM",
      period: "2025-2026",
      description: "Currently working as Junior Webmaster, managing and developing web solutions for the organization."
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 dark:from-slate-950 dark:via-slate-900/50 dark:to-indigo-950/30">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative w-full px-6 sm:px-8 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent mb-6">
              About Me
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Get to know me better - my journey, skills
            </p>
          </motion.div>

          {/* Section 1: About Me */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Profile Photo */}
              <div className="flex justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                    <Image
                      src="/images/kamleshport.jpg"
                      alt="Kamlesh Satpute"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Subtle shadow effect */}
                  <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.3)]" />
                </motion.div>
              </div>

              {/* Right: Introduction */}
              <div className="space-y-6">
                <motion.h2 
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white"
                >
                  Who I Am
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-400"
                >
                  I am a passionate and dedicated student of Computer Engineering at PCCOE. I am a quick learner and always looking for new challenges and opportunities to grow.
                </motion.p>
                <motion.p 
                  variants={itemVariants}
                  className="text-lg leading-relaxed text-slate-600 dark:text-slate-400"
                >
                  My journey started with curiosity and has evolved into a passion for creating digital solutions that make a difference. I believe in continuous learning and staying updated with the latest technologies and best practices.
                </motion.p>
              </div>
            </motion.div>
          </motion.section>

          {/* Section 2: Skills */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Skills & Technologies
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={skillVariants}
                  whileHover="hover"
                  className="group"
                >
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl px-6 py-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Section 3: Education */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Education & Experience
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                My academic journey and professional milestones that shape my expertise
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="max-w-4xl mx-auto"
            >
              {/* Timeline Container */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-500 dark:from-blue-500 dark:via-indigo-600 dark:to-purple-600" />
                
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative mb-12 last:mb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 shadow-lg ring-4 ring-white dark:ring-slate-900 z-10" />
                    
                    {/* Content Card - Alternating sides on desktop */}
                    <motion.div
                      whileHover={{ scale: 1.02, x: index % 2 === 0 ? -5 : 5 }}
                      transition={{ duration: 0.3 }}
                      className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                        index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                      } group`}
                    >
                      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                          <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {item.title}
                          </h3>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 font-medium mb-3 flex items-center gap-2">
                          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {item.institution}
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and collaborate on interesting projects. Let's discuss how we can bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 dark:text-white bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  View Projects
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
