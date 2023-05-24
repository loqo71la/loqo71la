
type ThemeType = 'dark' | 'light';
const key = 'theme-preference';

export const themeListener = (onChange: (isDark: boolean) => void) => {
  const listener = ({ matches }: MediaQueryListEvent) => onChange(matches);
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);
  return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener);
};

export const setTheme = (theme: 'dark' | 'light') => {
  localStorage.setItem(key, theme);
  if (theme === 'dark') document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
};

export const getTheme = () => {
  if (localStorage.getItem(key)) return localStorage.getItem(key) as ThemeType;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};