import { useTheme } from '@/context/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-9 h-9 flex items-center justify-center rounded-full border border-slate-400/30 dark:border-slate-600/30 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors duration-200 bg-white/10 dark:bg-black/10 backdrop-blur-sm"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="text-base leading-none"
          >
            ☀️
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="text-base leading-none"
          >
            🌙
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
