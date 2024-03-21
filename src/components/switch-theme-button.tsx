import { useEffect, useState } from 'react';
import moonIcon from '../assets/icons/moon.svg';
import sunIcon from '../assets/icons/sun.svg';

export default function SwitchThemeButton() {
  const [theme, setTheme] = useState<null | string>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={handleThemeSwitch}
      className="h-fit transition p-2 dark:bg-zinc-800 bg-zinc-300 rounded-full dark:hover:bg-orange-500/50 hover:bg-indigo-600/50 "
    >
      <img
        className="dark:invert "
        src={theme === 'dark' ? sunIcon : moonIcon}
        alt=""
      />
    </button>
  );
}
