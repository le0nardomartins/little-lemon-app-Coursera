import { useLanguage } from '../../context/LanguageContext';
import './language-selector.css';

const LanguageSelector = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className='language-selector'
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
      title={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
    >
      <span className='language-flag'>{language === 'en' ? '🇺🇸' : '🇧🇷'}</span>
      <span className='language-code'>{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSelector;
