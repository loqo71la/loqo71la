import { useEffect, useState } from 'react';

function useDarkMode() {
  const [isDark, setIsDark] = useState(window.localStorage.getItem('isDark') || false);
  const changeMode = () => {
    window.localStorage.setItem('isDark', !isDark);
    setIsDark(!isDark);
  };

  useEffect(()=> {
    const root = window.document.documentElement;
    root.classList.remove('dark');
    if (isDark) root.classList.add('dark');
  }, [isDark]);

  return [isDark, changeMode];
}

export default useDarkMode;
