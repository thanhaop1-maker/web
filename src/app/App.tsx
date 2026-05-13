import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[#121212] text-[#F4F4F4] overflow-x-hidden">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <BentoGrid />
      <Projects />
      <Timeline />
      <Contact />
    </div>
  );
}
