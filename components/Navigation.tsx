import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, SectionType } from '../types';
import { I18N } from '../constants';

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setSection: (section: SectionType) => void;
  lang: Language;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, setIsOpen, setSection, lang }) => {
  
  const menuItems: { key: string; target: SectionType }[] = [
    { key: "menu-about", target: "about" },
    { key: "menu-team", target: "team" },
    { key: "menu-activity", target: "activity" },
    { key: "menu-archive", target: "archive" },
    { key: "menu-press", target: "press" }
  ];

  const handleNavClick = (target: SectionType) => {
    setIsOpen(false);
    // Allow curtain to start closing before switching context visually
    setTimeout(() => {
        setSection(target);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex flex-col justify-center items-center pointer-events-auto">
          {/* Left Curtain */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-background z-[151]"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
          />
          {/* Right Curtain */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-background z-[151]"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
          />

          {/* Menu Items */}
          <motion.div
            className="relative z-[160] w-full px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <ul className="flex flex-col items-center">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.key}
                  className="relative group overflow-hidden py-1 cursor-none cursor-hover"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.8, ease: "easeOut" }}
                  onClick={() => handleNavClick(item.target)}
                >
                  <div className="nav-item-content text-[12vw] sm:text-6xl md:text-8xl font-black uppercase leading-none text-text transition-transform duration-300 group-hover:-translate-y-full group-hover:skew-y-3 group-hover:opacity-0">
                    {I18N[item.key][lang]}
                  </div>
                  
                  {/* Marquee Effect on Hover */}
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full hidden group-hover:flex whitespace-nowrap opacity-0 group-hover:opacity-100 text-accent text-[12vw] sm:text-6xl md:text-8xl font-black uppercase leading-none pointer-events-none">
                     <div className="flex animate-[marquee_4s_linear_infinite] gap-10">
                        <span>{I18N[item.key][lang]}</span>
                        <span>{I18N[item.key][lang]}</span>
                        <span>{I18N[item.key][lang]}</span>
                        <span>{I18N[item.key][lang]}</span>
                     </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Navigation;