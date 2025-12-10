'use client';
import React from "react";
import { motion } from "motion/react";
import { experiences } from '@/assets/assets'
import Image from "next/image";

const WorkDetail = ({ isDarkMode }) => {
  return (
    <div className="flex  flex-col items-center justify-center px-8 py-16 text-gray-800 dark:text-gray-200">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="self-start fixed bottom-6 left-6 z-50"
        >
      <a 
        href="/"
        className="flex items-center gap-2 px-6 py-2   dark:border-white/50 rounded-full font-Ovo text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
      >
        <span className="text-lg">←</span>
        Back to Home
      </a>
    </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold mb-10 text-center"
      >
        Professional Experience
      </motion.h1>

      {experiences.map((exp, index) => (
        <div key={index} className="w-full max-w-4xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl font-semibold mb-2 text-center"
          >
            {exp.title}
          </motion.h2>

          <p className="text-center text-lg mb-4 font-medium">{exp.role}</p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="rounded-2xl shadow-md w-full max-w-lg mx-auto object-cover mb-6 overflow-hidden"
            style={{height: '200px', maxWidth: 'none'}}
          >
            <Image
              src={isDarkMode ? exp.image : exp.image}
              alt={exp.title}
              onClick={() => window.open(exp.url, '_blank')}
              className="w-full h-auto rounded-2xl cursor-pointer"
              style={{height: '200px'}}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-3xl mx-auto text-center leading-relaxed mb-8"
          >
            {exp.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 text-sm font-medium"
          >
            {exp.techs.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-full"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Ligne fine séparatrice */}
          {index < experiences.length - 1 && (
            <div className="border-t border-gray-300 dark:border-gray-700 mt-14"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkDetail;
