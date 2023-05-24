export const themeStorageKey = 'theme-preference';

export const ThemeScript = () => {
  const themeScript = `
        document.documentElement
            .classList
            .add(localStorage.getItem('${themeStorageKey}') ?? 'light')`;
  return <script dangerouslySetInnerHTML={themeScript} />;
};
