"use client";

import Header from "@/components/header";
import Navigation from "@/components/navigation";
import SectionTitle from "@/components/section-title";
import { useState, useEffect } from "react";
import { X, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMapLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }, 1000);
  };

  const socialLinks = [
    { icon: <X />, href: "https://twitter.com/shivam", label: "Twitter" },
  ];

  return (
    <>
      <Header />
      <Navigation />

      <>
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card rounded-lg p-6 mb-6 border-primary/30 shadow-lg"
        >
          <SectionTitle title="Connect With Me" />
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">
            Let's create something extraordinary together!
          </p>

          {/* Main Content Grid */}
          <div className="grid mt-12 grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.input
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ borderColor: "rgb(34, 197, 94)" }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl border border-primary/20 bg-white/10 dark:bg-black/10 backdrop-blur-md focus:ring-2 focus:ring-primary/50 outline-none transition-all duration-300 text-foreground placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  required
                />
                <motion.input
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ borderColor: "rgb(34, 197, 94)" }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full p-4 rounded-xl border border-primary/20 bg-white/10 dark:bg-black/10 backdrop-blur-md focus:ring-2 focus:ring-primary/50 outline-none transition-all duration-300 text-foreground placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  required
                />
                <motion.textarea
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ borderColor: "rgb(34, 197, 94)" }}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-4 rounded-xl border border-primary/20 bg-white/10 dark:bg-black/10 backdrop-blur-md focus:ring-2 focus:ring-primary/50 outline-none transition-all duration-300 text-foreground placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  required
                />
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(34, 197, 94, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-xl border border-primary/30 backdrop-blur-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Map and Social Section */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              {/* Social Links */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-4">
                  Find Me Online
                </h3>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="glass-card p-4 rounded-full border border-primary/20 bg-white/10 dark:bg-black/10 backdrop-blur-md text-foreground hover:text-primary hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 relative group"
                    >
                      {link.icon}
                      <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-3 py-1 text-sm text-white bg-gray-900/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                        {link.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Interactive Map */}
              <div className="relative h-64 rounded-xl overflow-hidden glass-card border border-primary/20">
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200/20 dark:bg-gray-800/20">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"
                    />
                  </div>
                )}
                {mapLoaded && (
                  <motion.iframe
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113579.66905029092!2d77.89812527009742!3d27.176309458305462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1648126417475!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="hover:scale-[1.03] transition-transform duration-500"
                  />
                )}
              </div>
            </motion.div>
          </div>

          {/* Quick Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 text-center border-t border-primary/20 pt-6"
          >
            <div className="flex justify-center gap-8 text-gray-600 dark:text-gray-300">
              <motion.div
                whileHover={{ y: -5, color: "rgb(34, 197, 94)" }}
                className="flex items-center gap-2"
              >
                <Mail className="w-6 h-6 text-primary" />
                <span>shivam@example.com</span>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, color: "rgb(34, 197, 94)" }}
                className="flex items-center gap-2"
              >
                <Phone className="w-6 h-6 text-primary" />
                <span>+91 123-456-7890</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </>

      <style jsx global>{`
        .animate-pulse-slow {
          animation: pulse 4s infinite ease-in-out;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </>
  );
}
