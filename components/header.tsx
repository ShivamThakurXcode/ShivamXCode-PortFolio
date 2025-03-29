"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

interface HeaderProps {
  showContactInfo?: boolean;
}

export default function Header({ showContactInfo = false }: HeaderProps) {
  const [showContacts, setShowContacts] = useState(showContactInfo);
  const { theme } = useTheme();

  // Theme-aware colors
  const glassBg =
    theme === "dark" ? "rgba(16, 18, 27, 0.7)" : "rgba(255, 255, 255, 0.7)";

  const borderColor =
    theme === "dark" ? "rgba(16, 185, 129, 0.2)" : "rgba(5, 150, 105, 0.15)";

  const textGradient =
    theme === "dark"
      ? "bg-gradient-to-r from-primary to-emerald-400"
      : "bg-gradient-to-r from-emerald-600 to-teal-600";

  const buttonBg =
    theme === "dark"
      ? "linear-gradient(90deg, rgba(16, 185, 129, 0.8) 0%, rgba(5, 150, 105, 0.6) 100%)"
      : "linear-gradient(90deg, rgba(5, 150, 105, 0.8) 0%, rgba(16, 185, 129, 0.6) 100%)";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl p-6 mb-6 relative shadow-2xl overflow-hidden transition-all duration-300"
      style={{
        backdropFilter: "blur(16px)",
        background: glassBg,
        border: `1px solid ${borderColor}`,
        boxShadow:
          theme === "dark"
            ? "0 8px 32px 0 rgba(31, 38, 135, 0.1)"
            : "0 8px 32px 0 rgba(16, 185, 129, 0.1)",
      }}
    >
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
        <div
          className={`absolute inset-0 border transition-all duration-500 rounded-xl ${
            theme === "dark"
              ? "border-primary/20 group-hover:border-primary/30"
              : "border-emerald-200/30 group-hover:border-emerald-300/40"
          }`}
        />
        <div
          className="absolute inset-0 opacity-20 rounded-xl"
          style={{
            background:
              theme === "dark"
                ? `linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(5, 150, 105, 0.4) 50%, transparent 100%)`
                : `linear-gradient(135deg, rgba(16, 185, 129, 0.6) 0%, rgba(167, 243, 208, 0.3) 50%, transparent 100%)`,
            filter: "blur(8px)",
            boxShadow:
              theme === "dark"
                ? "inset 0 0 12px rgba(16, 185, 129, 0.2)"
                : "inset 0 0 12px rgba(16, 185, 129, 0.1)",
          }}
        />
      </div>

      <div className="flex items-center gap-4 relative z-10">
        {/* Avatar with floating animation */}
        <motion.div
          className="relative w-20 h-20 rounded-xl overflow-hidden shadow-lg"
          style={{
            border:
              theme === "dark"
                ? "1px solid rgba(16, 185, 129, 0.3)"
                : "1px solid rgba(5, 150, 105, 0.2)",
          }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-29%20222110-ZUBRBe8aH7wEHd5zd7vySFwM9OkFZM.png"
            alt="Shivam"
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-tr from-primary/20 to-transparent"
                : "bg-gradient-to-tr from-emerald-400/15 to-transparent"
            }`}
          />
        </motion.div>

        <div>
          <h1
            className={`text-2xl font-bold bg-clip-text text-transparent ${textGradient}`}
          >
            Shivam
          </h1>
          <motion.div
            className="inline-block rounded-full px-3 py-1 text-sm mt-1 transition-all"
            style={{
              backdropFilter: "blur(8px)",
              background:
                theme === "dark"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.05)",
              border:
                theme === "dark"
                  ? "1px solid rgba(16, 185, 129, 0.2)"
                  : "1px solid rgba(5, 150, 105, 0.15)",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <span
              className={`bg-clip-text text-transparent ${
                theme === "dark"
                  ? "bg-gradient-to-r from-primary to-teal-300"
                  : "bg-gradient-to-r from-emerald-600 to-teal-500"
              }`}
            >
              MERN Developer | JavaScript Programmer
            </span>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showContacts && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6"
            style={{
              borderTop:
                theme === "dark"
                  ? "1px solid rgba(255, 255, 255, 0.1)"
                  : "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <div>
              <div className="mb-4">
                <h3
                  className={`text-xs mb-1 ${
                    theme === "dark"
                      ? "text-emerald-300/70"
                      : "text-emerald-700/70"
                  }`}
                >
                  EMAIL
                </h3>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  shivam.1337@gmail.com
                </p>
              </div>
              <div>
                <h3
                  className={`text-xs mb-1 ${
                    theme === "dark"
                      ? "text-emerald-300/70"
                      : "text-emerald-700/70"
                  }`}
                >
                  BIRTHDAY
                </h3>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  November 13, 1995
                </p>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <h3
                  className={`text-xs mb-1 ${
                    theme === "dark"
                      ? "text-emerald-300/70"
                      : "text-emerald-700/70"
                  }`}
                >
                  PHONE
                </h3>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  +91 99999-51172
                </p>
              </div>
              <div>
                <h3
                  className={`text-xs mb-1 ${
                    theme === "dark"
                      ? "text-emerald-300/70"
                      : "text-emerald-700/70"
                  }`}
                >
                  LOCATION
                </h3>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  Agra, Uttar Pradesh/India
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        <ThemeToggle />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowContacts(!showContacts)}
          className="relative px-3 py-1.5 rounded-lg text-xs font-medium overflow-hidden text-white"
          style={{
            background: buttonBg,
            boxShadow:
              theme === "dark"
                ? "0 4px 15px rgba(16, 185, 129, 0.3)"
                : "0 4px 15px rgba(5, 150, 105, 0.3)",
          }}
        >
          <span className="relative z-10">
            {showContacts ? "Hide Contacts" : "Show Contacts"}
          </span>
          <motion.span
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
            style={{
              background:
                theme === "dark"
                  ? "radial-gradient(circle at center, rgba(16, 185, 129, 0.6) 0%, transparent 70%)"
                  : "radial-gradient(circle at center, rgba(5, 150, 105, 0.6) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
            animate={{
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      </div>
    </motion.div>
  );
}
