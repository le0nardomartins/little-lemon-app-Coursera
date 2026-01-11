import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import './about.css';

function About() {
    const { language } = useLanguage();
    const t = translations[language].about;

    return (
        <main className='about-page'>
            <section className='about-hero'>
                <div className='about-hero-content'>
                    <h1>{t.title}</h1>
                    <p className='about-subtitle'>{t.subtitle}</p>
                </div>
            </section>

            <section className='about-content'>
                <div className='about-container'>
                    <article className='about-story'>
                        <h2>{t.story}</h2>
                        <p>
                            {t.storyText1}
                        </p>
                        <p>
                            {t.storyText2}
                        </p>
                        <p>
                            {t.storyText3}
                        </p>
                    </article>

                    <article className='about-values'>
                        <h2>{t.values}</h2>
                        <div className='values-grid'>
                            <div className='value-item'>
                                <h3>{t.quality}</h3>
                                <p>
                                    {t.qualityText}
                                </p>
                            </div>
                            <div className='value-item'>
                                <h3>{t.tradition}</h3>
                                <p>
                                    {t.traditionText}
                                </p>
                            </div>
                            <div className='value-item'>
                                <h3>{t.community}</h3>
                                <p>
                                    {t.communityText}
                                </p>
                            </div>
                        </div>
                    </article>

                    <article className='about-team'>
                        <h2>{t.team}</h2>
                        <p>
                            {t.teamText1}
                        </p>
                        <p>
                            {t.teamText2}
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default About;
