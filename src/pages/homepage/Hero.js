import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import HeroImage from '../../assets/restaurant-food.jpg';
import Button from '../../components/ui/button/Button';

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language].hero;

    const handleClick = () => {
        console.log('Button was clicked!');
      };

    return (
        <section className='hero-section'>
            <div className='col-1'>
                <h2 className='hero-title'>Little Lemon</h2>
                <p className='hero-location'>{t.location}</p>
                <p className='hero-descr'>{t.description}</p>
                <Link to='/reservation'>
                    <Button color='ctaButtonColor' text={t.reservations} onClick={handleClick} />
                </Link>
            </div>
            <div className='col-2'>
                <img className='hero-image' src={HeroImage} alt='restaurant food' />
            </div>
        </section>
    );
};

export default Hero;
