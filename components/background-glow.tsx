"use client";

import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";

export function BackgroundGlow() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Premium gradient backdrop */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          theme === "dark"
            ? "bg-gradient-to-br from-[#07190f] via-[#0d3a2c] to-[#07190f]"
            : "bg-gradient-to-br from-[#f0fdf4] via-[#ecfdf5] to-[#f0fdf4]"
        }`}
      />

      {/* Animated organic glow */}
      <div
        className={`absolute -inset-20 transition-all duration-1000 ${
          theme === "dark" ? "opacity-60" : "opacity-30"
        }`}
        style={{
          background: `
            radial-gradient(circle at 15% 50%, ${
              theme === "dark"
                ? "rgba(5, 150, 105, 0.5)" // emerald-600
                : "rgba(167, 243, 208, 0.4)" // emerald-200
            }, transparent 35%),
            radial-gradient(circle at 85% 30%, ${
              theme === "dark"
                ? "rgba(15, 118, 110, 0.4)" // teal-700
                : "rgba(153, 246, 228, 0.3)" // teal-200
            }, transparent 35%)
          `,
          filter: "blur(72px)",
        }}
      />

      {/* Subtle organic texture */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, 
                ${theme === "dark" ? "#10b981" : "#a7f3d0"} 0.5px, 
                transparent 0.5px
              )`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Floating organic particles */}
      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 8 + 4;
        const delay = Math.random() * 8;
        const duration = Math.random() * 15 + 15;
        const color =
          theme === "dark"
            ? `rgba(16, 185, 129, ${Math.random() * 0.15 + 0.05})`
            : `rgba(110, 231, 183, ${Math.random() * 0.1 + 0.03})`;

        return (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: color,
              filter: "blur(1px)",
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}

      {/* Dynamic ambient glow */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          theme === "dark" ? "opacity-15" : "opacity-10"
        }`}
        style={{
          background: `radial-gradient(circle at 50% 50%, ${
            theme === "dark"
              ? "rgba(5, 150, 105, 0.6)"
              : "rgba(167, 243, 208, 0.4)"
          }, transparent 80%)`,
          filter: "blur(100px)",
          animation: "pulse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      />

      {/* Interactive glow on hover */}
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${
          theme === "dark" ? "group-hover:opacity-25" : "group-hover:opacity-15"
        }`}
        style={{
          background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), ${
            theme === "dark"
              ? "rgba(16, 185, 129, 0.4)"
              : "rgba(110, 231, 183, 0.3)"
          }, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
