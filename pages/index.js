import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-4">Dark Mode App Simulation</h1>
      <p className="mb-4">Current Theme: {theme}</p>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded"
      >
        Change Theme
      </button>
    </div>
  );
}
