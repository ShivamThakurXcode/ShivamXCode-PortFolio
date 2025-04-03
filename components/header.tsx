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

  const textGradient =
    theme === "dark"
      ? "bg-gradient-to-r from-primary to-emerald-400"
      : "bg-gradient-to-r from-emerald-600 to-teal-600";

  const buttonBg =
    theme === "dark"
      ? "bg-gradient-to-r from-primary/90 to-emerald-600/90"
      : "bg-gradient-to-r from-emerald-600/90 to-teal-600/90";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card border rounded-lg p-6 mb-6 border-primary/30 shadow-lg relative"
    >
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-primary/30">
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
        </div>

        <div>
          <h1
            className={`text-2xl font-bold bg-clip-text text-transparent ${textGradient}`}
          >
            Shivam
          </h1>
          <div className="inline-block rounded-full px-3 py-1 text-sm mt-1 bg-foreground/5 border border-primary/20">
            <span
              className={`bg-clip-text text-transparent ${
                theme === "dark"
                  ? "bg-gradient-to-r from-primary to-teal-300"
                  : "bg-gradient-to-r from-emerald-600 to-teal-500"
              }`}
            >
              MERN Developer | JavaScript Programmer
            </span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showContacts && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-foreground/10"
          >
            <div>
              <div className="mb-4">
                <h3 className="text-xs mb-1 text-primary/70">EMAIL</h3>
                <p className="text-sm text-foreground/90">
                  shivam.1337@gmail.com
                </p>
              </div>
              <div>
                <h3 className="text-xs mb-1 text-primary/70">BIRTHDAY</h3>
                <p className="text-sm text-foreground/90">November 13, 1995</p>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <h3 className="text-xs mb-1 text-primary/70">PHONE</h3>
                <p className="text-sm text-foreground/90">+91 99999-51172</p>
              </div>
              <div>
                <h3 className="text-xs mb-1 text-primary/70">LOCATION</h3>
                <p className="text-sm text-foreground/90">
                  Agra, Uttar Pradesh/India
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-4 right-4 flex items-center gap-2">
        <ThemeToggle />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowContacts(!showContacts)}
          className={`relative px-3 py-1.5 rounded-lg text-xs font-medium text-white ${buttonBg} shadow-md`}
        >
          {showContacts ? "Hide Contacts" : "Show Contacts"}
        </motion.button>
      </div>
    </motion.div>
  );
}
