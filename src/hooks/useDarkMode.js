import { useEffect, useState } from 'react';

function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const value = window.localStorage.getItem('isDark');
      return value ? JSON.parse(value) : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  });

  const changeMode = () => {
    try {
      window.localStorage.setItem('isDark', !isDark);
      setIsDark(!isDark);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [isDark]);

  return [isDark, changeMode];
}

export default useDarkMode;
