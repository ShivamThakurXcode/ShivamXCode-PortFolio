"use client"

import { useTheme } from "./theme-provider"

export function BackgroundGlow() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className={`absolute -inset-[10px] opacity-30 ${theme === "dark" ? "opacity-30" : "opacity-10"}`}
        style={{
          background: `
            radial-gradient(circle at 15% 50%, hsl(var(--primary), 0.3), transparent 25%),
            radial-gradient(circle at 85% 30%, hsl(var(--primary), 0.3), transparent 25%)
          `,
          filter: "blur(40px)",
        }}
      />
    </div>
  )
}

