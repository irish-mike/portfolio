import create from 'zustand';

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => {
  // Get the initial theme from localStorage
  const initialTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  
  // Set the theme attribute on the document element on initial load
  document.documentElement.setAttribute('data-bs-theme', initialTheme);

  return {
    theme: initialTheme,
    toggleTheme: () =>
      set((state) => {
        const newTheme = state.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        return { theme: newTheme };
      }),
  };
});

export default useThemeStore;
