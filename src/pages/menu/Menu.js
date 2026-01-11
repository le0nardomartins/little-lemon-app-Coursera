import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import './menu.css';

function Menu() {
    const { language } = useLanguage();
    const t = translations[language].menu;

    const formatPrice = (price) => {
        return language === 'pt' 
            ? `R$ ${price.toFixed(2).replace('.', ',')}` 
            : `$${price.toFixed(2)}`;
    };

    return (
        <main className='menu-page'>
            <section className='menu-hero'>
                <div className='menu-hero-content'>
                    <h1>{t.title}</h1>
                    <p className='menu-subtitle'>{t.subtitle}</p>
                </div>
            </section>

            <section className='menu-content'>
                <div className='menu-container'>
                    <article className='menu-section'>
                        <h2>{t.appetizers}</h2>
                        <div className='menu-items'>
                            <div className='menu-item'>
                                <div className='menu-item-header'>
                                    <h3>{t.items.bruschetta}</h3>
                                    <span className='menu-price'>{formatPrice(12)}</span>
                                </div>
                                <p className='menu-description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div className='menu-item'>
                                <div className='menu-item-header'>
                                    <h3>{t.items.greekSalad}</h3>
                                    <span className='menu-price'>{formatPrice(14)}</span>
                                </div>
                                <p className='menu-description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div className='menu-item'>
                                <div className='menu-item-header'>
                                    <h3>{t.items.hummus}</h3>
                                    <span className='menu-price'>{formatPrice(10)}</span>
                                </div>
                                <p className='menu-description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </article>

                    <article className='menu-section'>
                        <h2>{t.mainCourses}</h2>
                        <div className='menu-items'>
                            <div className='menu-item'>
                                <div className='menu-item-header'>
                                    <h3>{t.items.salmon}</h3>
                                    <span className='menu-price'>{formatPrice(28)}</span>
                                </div>
                                <p className='menu-description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation.
                                </p>
                            </div>
                            <div className='menu-item'>
                                <div className='menu-item-header'>
                                    <h3>{t.items.lamb}</h3>
                                    <span className='menu-price'>{formatPrice(32)}</span>
                                </div>
                                <p className='menu-description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation.
                                </p>
                            </div>
                            <div className='menu-item'>
                                <div className='menu-item-header'>
                                    <h3>{t.items.pasta}</h3>
                                    <span className='menu-price'>{formatPrice(22)}</span>
                                </div>
                                <p className='menu-description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation.
                                </p>
                            </div>
                            <div className='menu-item'>
                                <div className='menu-item-header'>
                                    <h3>{t.items.chicken}</h3>
                                    <span className='menu-price'>{formatPrice(24)}</span>
                                </div>
                                <p className='menu-description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation.
                                </p>
                            </div>
                        </div>
                    </article>

                    <article className='menu-section'>
                        <h2>{t.desserts}</h2>
                        <div className='menu-items'>
                            <div className='menu-item'>
                                <div className='menu-item-header'>
                                    <h3>{t.items.baklava}</h3>
                                    <span className='menu-price'>{formatPrice(8)}</span>
                                </div>
                                <p className='menu-description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div className='menu-item'>
                                <div className='menu-item-header'>
                                    <h3>{t.items.lemonTart}</h3>
                                    <span className='menu-price'>{formatPrice(9)}</span>
                                </div>
                                <p className='menu-description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div className='menu-item'>
                                <div className='menu-item-header'>
                                    <h3>{t.items.tiramisu}</h3>
                                    <span className='menu-price'>{formatPrice(10)}</span>
                                </div>
                                <p className='menu-description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </article>

                    <article className='menu-section'>
                        <h2>{t.beverages}</h2>
                        <div className='menu-items'>
                            <div className='menu-item'>
                                <div className='menu-item-header'>
                                    <h3>{t.items.wine}</h3>
                                    <span className='menu-price'>{language === 'pt' ? 'R$ 8-15' : '$8-15'}</span>
                                </div>
                                <p className='menu-description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div className='menu-item'>
                                <div className='menu-item-header'>
                                    <h3>{t.items.cocktail}</h3>
                                    <span className='menu-price'>{formatPrice(12)}</span>
                                </div>
                                <p className='menu-description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div className='menu-item'>
                                <div className='menu-item-header'>
                                    <h3>{t.items.juice}</h3>
                                    <span className='menu-price'>{formatPrice(6)}</span>
                                </div>
                                <p className='menu-description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default Menu;
