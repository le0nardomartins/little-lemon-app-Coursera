import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import { getRoutes } from '../header/Routes';
import Logo from '../../assets/Logo.svg';

import './footer.css';

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language].footer;
    const navT = translations[language];
    const routes = getRoutes(navT);

    return (
        <footer className='footer-section'>
            <div className='footer-container'>
            <article className='footer-grid'>
                <h2 className='sr-only'>Site Footer</h2>
                    <section className='footer-logo-section'>
                        <Link to='/'>
                            <img src={Logo} alt='Little Lemon logo' className='footer-logo' />
                        </Link>
                        <p className='footer-description'>
                            {t.description}
                        </p>
                </section>
                    <section className='footer-menu-section'>
                        <h3 className='footer-titles'>{t.navigation}</h3>
                    <ul>
                            {routes.map(route => (
                                <li key={route.href}>
                                    <Link to={route.href}>{route.title}</Link>
                                </li>
                            ))}
                    </ul>
                </section>
                    <section className='footer-contact-section'>
                    <h3 className='footer-titles'>{t.contact}</h3>
                    <address>
                            <p className='contact-item'>
                                <strong>{t.address}</strong><br />
                                {t.addressLine1}<br />
                                {t.addressLine2}
                            </p>
                            <p className='contact-item'>
                                <a href="mailto:info@littlelemon.com.br">info@littlelemon.com.br</a>
                            </p>
                            <p className='contact-item'>
                                <a href="tel:+5511987654321">(11) 98765-4321</a>
                            </p>
                    </address>
                </section>
                    <section className='footer-social-section'>
                        <h3 className='footer-titles'>{t.followUs}</h3>
                        <ul className='social-links'>
                        <li>
                                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' aria-label='Visit our Facebook page'>
                                    <FaFacebookSquare className='social-icon' />
                            </a>
                        </li>
                        <li>
                                <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' aria-label='Visit our Twitter page'>
                                    <FaTwitterSquare className='social-icon' />
                            </a>
                        </li>
                        <li>
                                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' aria-label='Visit our Instagram page'>
                                    <FaInstagramSquare className='social-icon' />
                            </a>
                        </li>
                    </ul>
                </section>
            </article>
                <div className='footer-bottom'>
                    <p>&copy; {new Date().getFullYear()} Little Lemon. {t.rights}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
