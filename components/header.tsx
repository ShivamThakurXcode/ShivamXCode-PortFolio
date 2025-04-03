"use client";

import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

interface HeaderProps {
  showContactInfo?: boolean;
}

export default function Header({ showContactInfo = false }: HeaderProps) {
  const [showContacts, setShowContacts] = useState(showContactInfo);
  const { theme } = useTheme();

  // Enhanced gradient styles
  const textGradient =
    "bg-gradient-to-r from-primary via-emerald-500 to-teal-500";
  const buttonGradient =
    "bg-gradient-to-r from-primary via-emerald-600 to-teal-600";

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="glass-card relative rounded-lg p-8 mb-6 border border-primary/30 shadow-2xl backdrop-blur-xl bg-white/5 dark:bg-black/5 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-between">
        {/* Avatar and Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-6"
        >
          <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-primary/30 group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-29%20222110-ZUBRBe8aH7wEHd5zd7vySFwM9OkFZM.png"
              alt="Shivam"
              width={96}
              height={96}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className={`text-3xl font-bold bg-clip-text text-transparent ${textGradient}`}
            >
              Shivam
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-block mt-2 px-4 py-1.5 rounded-lg bg-white/10 dark:bg-black/10 border border-primary/30 backdrop-blur-md"
            >
              <span
                className={`text-sm font-medium bg-clip-text text-transparent ${textGradient}`}
              >
                MERN Developer | JavaScript Wizard
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <ThemeToggle />
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 15px rgba(34, 197, 94, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowContacts(!showContacts)}
            className={`relative px-5 py-2 rounded-lg ${buttonGradient} text-white font-semibold text-sm shadow-lg backdrop-blur-sm overflow-hidden`}
          >
            <span className="relative w-15 z-10">
              {showContacts ? "Hide Info" : "Show Info"}
            </span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 2, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Contact Info */}
      <AnimatePresence>
        {showContacts && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-8 pt-6 border-t border-primary/30 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: <Mail className="w-5 h-5" />,
                label: "EMAIL",
                value: "shivam.1337@gmail.com",
              },
              {
                icon: <Phone className="w-5 h-5" />,
                label: "PHONE",
                value: "+91 99999-51172",
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                label: "LOCATION",
                value: "Agra, Uttar Pradesh/India",
              },
              {
                icon: <Calendar className="w-5 h-5" />,
                label: "BIRTHDAY",
                value: "November 13, 1995",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-white/5 dark:bg-black/5 border border-primary/30 backdrop-blur-md hover:bg-primary/10 transition-colors duration-300"
              >
                <div className="p-2 rounded-full bg-primary/20 text-primary">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xs text-primary/70 uppercase tracking-wide">
                    {item.label}
                  </h3>
                  <p className="text-sm text-foreground/90 font-medium">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
