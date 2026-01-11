import { useEffect, useRef } from 'react';
import { getRoutes } from './Routes';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';

export const NavDesktop = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const routes = getRoutes(t);

  return (
    <ul className='navbar'>
      {routes.map((route) => {
          const { Icon, href, title } = route;
          return (
          <NavItem
              key={route.title}
              Icon={Icon}
              href={href}
              title={title}
          />
          );
      })}
    </ul>
  );
};

const NavItem = ({ Icon, href, title }) => {
  const linkRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current && linkRef.current) {
      const contentWidth = contentRef.current.offsetWidth;
      linkRef.current.style.setProperty('--content-width', `${contentWidth}px`);
    }
  }, []);

  return (
    <li className='nav-item'>
      <a
        ref={linkRef}
        href={href}
        className='nav-link'
      >
        <span ref={contentRef} className='nav-content'>
          <Icon className='menu-icon'/>
          <span className='nav-text'>{title}</span>
        </span>
        <span className='nav-underline'></span>
      </a>
    </li>
  );
};