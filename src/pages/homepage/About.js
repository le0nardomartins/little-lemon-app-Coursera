import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import PictureOne from '../../assets/storefront.png';
import PictureTwo from '../../assets/dining-in.png';

export default function About() {
    const { language } = useLanguage();
    const t = translations[language].hero;

    return (
        <section className='about-section'>
            <div className='about-info'>
                <h2 className='about-title'>{language === 'pt' ? 'História do Little Lemon' : 'Little Lemon Story'}</h2>
                <p className='hero-location'>{t.location}</p>
                <p className='hero-descr'>{t.description} {t.description} {t.description}</p>
            </div>
            <div className='about-images'>
                <img className='overlap-1' src={PictureOne} alt={language === 'pt' ? 'Nossa primeira localização.' : 'Our first location.'} />
                <img className='overlap-2' src={PictureTwo} alt={language === 'pt' ? 'Uma mulher aproveitando nossa experiência de jantar.' : 'A woman enjoying our dine-in experience.'} />
            </div>
        </section>
    );
}
