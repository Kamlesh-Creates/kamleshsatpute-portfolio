"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const skills = [
    "HTML","JavaScript","python","React", "Next.js", 
    "Node.js", "MongoDB", "Git/GitHub"
  ];

  const education = [
    {
      title: "B.Tech in Computer Engineering",
      institution: "PCCOE Pimpri Chinchwad College of Engineering",
      period: "2024–2028",
      description: "I'm currently Pursuing Computer Engineering at PCCOE"
    },
    {
      title: "Junior Webmaster",
      institution: "CESA SDW ACM",
      period: "2025",
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
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 font-medium mb-3">
                      {item.institution}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
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
