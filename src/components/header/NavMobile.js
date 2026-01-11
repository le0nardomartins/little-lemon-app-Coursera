import { useClickAway } from 'react-use';
import { useState, useRef } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import { getRoutes } from './Routes';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];
  const routes = getRoutes(t);
  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className='mobile-container'>
      <Hamburger toggled={isOpen} size={24} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay de fundo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='mobile-menu-overlay'
              onClick={() => setOpen(false)}
            />
            {/* Menu dropdown */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className='mobile-menu'
            >
              <ul className='mobile-menu-list'>
                {routes.map((route, idx) => {
                  const { Icon } = route;

                  return (
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: idx * 0.05,
                        ease: 'easeOut'
                      }}
                      key={route.title}
                      className='mobile-menu-item'
                    >
                      <a
                        onClick={() => setOpen((prev) => !prev)}
                        className='mobile-menu-link'
                        href={route.href}
                      >
                        <Icon className='mobile-menu-icon' />
                        <span className='mobile-menu-text'>{route.title}</span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};