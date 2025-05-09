'use client';

import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a saved theme preference in localStorage
    const savedMode = localStorage.getItem('darkMode');
    // Check if user's system/browser prefers dark mode
    const systemDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    // Use saved preference if exists, otherwise use system preference
    const initialMode = savedMode !== null ? savedMode === 'true' : systemDark;

    setDarkMode(initialMode);
    document.documentElement.classList.toggle('dark', initialMode);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('darkMode', String(newMode));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors"
      aria-label={darkMode ? 'Light mode' : 'Dark mode'}>
      {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};