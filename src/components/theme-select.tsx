'use client';

import { useEffect, useState } from 'react';
import { Laptop2, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const themes = {
  light: {
    label: 'Light Mode',
    icon: Sun,
  },
  dark: {
    label: 'Dark Mode',
    icon: Moon,
  },
  system: {
    label: 'System Default',
    icon: Laptop2,
  },
};

export default function ThemeSelect() {
  const [mounted, setMounted] = useState(false);
  const { theme = 'system', setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  function toggle() {
    const themeKeys = Object.keys(themes);
    const themeIndex = themeKeys.indexOf(theme);
    setTheme(themeKeys[(themeIndex + 1) % themeKeys.length]);
  }

  const Icon = themes[theme].icon;

  return (
    <>
      <button
        type="button"
        className="hover:text-brand flex h-8 w-8 items-center justify-center gap-1 px-1 py-0 font-semibold transition"
        onClick={toggle}
        title={themes[theme].label}
      >
        <Icon />
      </button>
    </>
  );
}
