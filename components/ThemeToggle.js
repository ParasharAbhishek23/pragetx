"use client";

import { useState } from "react";
import Image from "next/image";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mt-18
    ">
      <div className="flex justify-center">
        <button
          onClick={toggleTheme}
          className="focus:outline-none"
          aria-label="Toggle theme"
        >
          <Image
            src={
              isDark
                ? "/assets/dark-theme-slider.png"
                : "/assets/light-theme-slider.png"
            }
            alt={isDark ? "Dark theme" : "Light theme"}
            width={110}
            height={55}
            className="object-contain"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML = `
        <div class="w-28 h-12 flex items-center justify-center bg-gradient-to-r ${
          isDark ? "from-gray-800 to-gray-900" : "from-gray-100 to-gray-300"
        } rounded-full">
          <span class="text-3xl">${isDark ? "🌙" : "☀️"}</span>
        </div>
      `;
            }}
          />
        </button>
      </div>
    </div>
  );
}
