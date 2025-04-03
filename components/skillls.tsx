"use client";

import React from "react";
import { motion } from "framer-motion";
import { Paintbrush, Server, Database, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Paintbrush className="w-5 h-5" />,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "GraphQL", level: 75 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    title: "Database",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 70 },
      { name: "Firebase", level: 75 },
      { name: "Prisma", level: 85 },
    ],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-5 h-5" />,
    skills: [
      { name: "React Native", level: 75 },
      { name: "Flutter", level: 60 },
      { name: "Android", level: 70 },
      { name: "iOS", level: 65 },
    ],
  },
];

export default function TechnicalSkills() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
        >
          Technical Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-gray-600 dark:text-gray-300"
        >
          My skills across different technology domains
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card rounded-xl p-6 backdrop-blur-md bg-transparent border border-primary/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg backdrop-blur-sm bg-primary/10">
                {React.cloneElement(category.icon, {
                  className: "w-5 h-5 text-primary",
                })}
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {category.title}
              </h3>
            </div>

            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-800 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="font-mono text-primary dark:text-primary">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-gray-200/50 dark:bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.05 }}
                      className="h-full rounded-full bg-primary dark:bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="glass-card rounded-xl p-6 backdrop-blur-md bg-transparent border border-primary/30"
      >
        <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          Additional Technologies
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Docker",
            "Kubernetes",
            "AWS",
            "Git",
            "CI/CD",
            "Jest",
            "Webpack",
            "Redux",
          ].map((tech) => (
            <motion.div
              key={tech}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm bg-primary/10 text-primary dark:text-primary"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
