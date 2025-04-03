"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const skills = [
  { name: "JavaScript", level: 90, color: "#F7DF1E" },
  { name: "React", level: 85, color: "#61DAFB" },
  { name: "Node.js", level: 80, color: "#339933" },
  { name: "TypeScript", level: 75, color: "#3178C6" },
  { name: "Next.js", level: 85, color: "#000000" },
  { name: "MongoDB", level: 70, color: "#47A248" },
  { name: "Express", level: 75, color: "#000000" },
  { name: "Tailwind CSS", level: 90, color: "#06B6D4" },
  { name: "GraphQL", level: 65, color: "#E10098" },
  { name: "Docker", level: 60, color: "#2496ED" },
];

export default function TechnicalSkills() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Radial Skills */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground/80">
            Core Technologies
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.slice(0, 4).map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-20 h-20">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke={isDark ? "#2D3748" : "#E2E8F0"}
                      strokeWidth="2"
                    />
                    <motion.circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke={skill.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ strokeDashoffset: 100 }}
                      animate={{ strokeDashoffset: 100 - skill.level }}
                      transition={{ duration: 1, delay: 0.2 }}
                      strokeDasharray="100 100"
                      transform="rotate(-90 18 18)"
                    />
                    <text
                      x="18"
                      y="20"
                      textAnchor="middle"
                      fontSize="10"
                      fill={isDark ? "#EDF2F7" : "#1A202C"}
                      fontWeight="bold"
                    >
                      {skill.level}%
                    </text>
                  </svg>
                </div>
                <span
                  className="text-sm font-medium mt-2"
                  style={{ color: skill.color }}
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bar Skills */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground/80">
            Other Skills
          </h3>
          <div className="space-y-4">
            {skills.slice(4).map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium" style={{ color: skill.color }}>
                    {skill.name}
                  </span>
                  <span className="text-foreground/70">{skill.level}%</span>
                </div>
                <div className="relative h-2.5 w-full rounded-full overflow-hidden bg-foreground/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Tags */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-foreground/80 mb-4">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -2, scale: 1.05 }}
              className="px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                backgroundColor: isDark
                  ? `${skill.color}20`
                  : `${skill.color}15`,
                color: skill.color,
                border: `1px solid ${
                  isDark ? `${skill.color}30` : `${skill.color}20`
                }`,
              }}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
