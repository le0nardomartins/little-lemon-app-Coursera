import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import Button from '../../components/ui/button/Button';
import CardGallary from '../../components/ui/card/CardGallery';

export default function Highlights() {
    const { language } = useLanguage();
    const t = translations[language].highlights;

    return (
        <section className='highlights-section'>
            <div className='announcement'>
                <h2>{t.title}</h2>
                <Button color='orderButtonColor' text={t.orderButton} />  
            </div>
            <CardGallary />
        </section>
    );
}
