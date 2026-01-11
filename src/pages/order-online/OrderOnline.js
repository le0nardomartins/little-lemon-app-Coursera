import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import './order-online.css';

function OrderOnline() {
    const { language } = useLanguage();
    const t = translations[language].orderOnline;
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: t.all },
        { id: 'appetizers', name: t.appetizers },
        { id: 'mains', name: t.mains },
        { id: 'desserts', name: t.desserts },
        { id: 'drinks', name: t.drinks }
    ];

    const menuItems = [
        { id: 1, nameKey: 'bruschetta', category: 'appetizers', price: 24.90, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, nameKey: 'greekSalad', category: 'appetizers', price: 28.90, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 3, nameKey: 'hummus', category: 'appetizers', price: 19.90, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 4, nameKey: 'salmon', category: 'mains', price: 56.90, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 5, nameKey: 'lamb', category: 'mains', price: 64.90, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 6, nameKey: 'pasta', category: 'mains', price: 44.90, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 7, nameKey: 'chicken', category: 'mains', price: 48.90, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 8, nameKey: 'baklava', category: 'desserts', price: 16.90, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 9, nameKey: 'lemonTart', category: 'desserts', price: 18.90, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 10, nameKey: 'tiramisu', category: 'desserts', price: 19.90, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 11, nameKey: 'wine', category: 'drinks', price: 45.00, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 12, nameKey: 'cocktail', category: 'drinks', price: 24.90, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 13, nameKey: 'juice', category: 'drinks', price: 12.90, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
    ];

    const filteredItems = selectedCategory === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === selectedCategory);

    const formatPrice = (price) => {
        return language === 'pt' 
            ? `R$ ${price.toFixed(2).replace('.', ',')}` 
            : `$${price.toFixed(2)}`;
    };

    return (
        <main className='order-online-page'>
            <section className='order-hero'>
                <div className='order-hero-content'>
                    <h1>{t.title}</h1>
                    <p className='order-subtitle'>{t.subtitle}</p>
                </div>
            </section>

            <section className='order-content'>
                <div className='order-container'>
                    <div className='order-categories'>
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    <div className='menu-grid'>
                        {filteredItems.map(item => (
                            <div key={item.id} className='menu-card'>
                                <div className='menu-card-content'>
                                    <h3>{t.items[item.nameKey]}</h3>
                                    <p className='menu-description'>{item.description}</p>
                                    <div className='menu-card-footer'>
                                        <span className='menu-price'>{formatPrice(item.price)}</span>
                                        <button className='add-to-cart-btn' disabled>
                                            {t.add}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='order-notice'>
                        <p>
                            <strong>{language === 'pt' ? 'Nota:' : 'Note:'}</strong> {t.notice}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default OrderOnline;
