import { Moon, Sun, Download } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export function Header({ isDark, setIsDark }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-[#121212]/70 border-b border-white/10"
      style={{
        background: 'rgba(18, 18, 18, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold tracking-tight"
        >
          Phú Thành<span className="text-[#00FFCC]">.</span>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#projects"
            className="text-[#F4F4F4]/70 hover:text-[#00FFCC] transition-colors duration-300"
          >
            Dự án
          </a>
          <a
            href="#skills"
            className="text-[#F4F4F4]/70 hover:text-[#00FFCC] transition-colors duration-300"
          >
            Kỹ năng
          </a>
          <a
            href="#contact"
            className="text-[#F4F4F4]/70 hover:text-[#00FFCC] transition-colors duration-300"
          >
            Liên hệ
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg hover:bg-white/5 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-[#F4F4F4]" />
            ) : (
              <Moon className="w-5 h-5 text-[#F4F4F4]" />
            )}
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 border border-[#00FFCC] text-[#00FFCC] rounded-lg hover:bg-[#00FFCC]/10 transition-all duration-300 flex items-center gap-2 group"
          >
            <Download className="w-4 h-4 group-hover:animate-bounce" />
            <span className="hidden sm:inline">Tải CV</span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
