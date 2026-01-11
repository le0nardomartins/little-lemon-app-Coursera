import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';
import Card from './Card';
import './cardGallery.css';

import CardOne from '../../../assets/restaurant-chef-B.jpg';
import CardTwo from '../../../assets/lemon-dessert.jpg';
import CardThree from '../../../assets/greek-salad.jpg';

export default function CardGallary() {
    const { language } = useLanguage();
    const t = translations[language].highlights.cards;

    const cardData = [
        {
            title: t.gyros.title,
            description: t.gyros.description,
            image: CardOne,
            price: t.gyros.price,
            delivery: t.gyros.delivery,
            altText: t.gyros.title,
         },
        {
            title: t.lemon.title,
            description: t.lemon.description,
            image: CardTwo,
            price: t.lemon.price,
            delivery: t.lemon.delivery,
            altText: t.lemon.title,
         },
        {
            title: t.salad.title,
            description: t.salad.description,
            image: CardThree,
            price: t.salad.price,
            delivery: t.salad.delivery,
            altText: t.salad.title,
         },
    ];

    return (
        <ul className="card-gallery">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    price={card.price}
                    delivery={card.delivery}
                    altText={card.altText}
                />
            ))}
        </ul>
    );
};