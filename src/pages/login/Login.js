import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import './login.css';

function Login() {
    const { language } = useLanguage();
    const t = translations[language].login;
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted:', formData);
        // Aqui você adicionaria a lógica de autenticação
    };

    return (
        <main className='login-page'>
            <section className='login-hero'>
                <div className='login-hero-content'>
                    <h1>{t.title}</h1>
                    <p className='login-subtitle'>{t.subtitle}</p>
                </div>
            </section>

            <section className='login-content'>
                <div className='login-container'>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <h2>{language === 'pt' ? 'Login' : 'Login'}</h2>
                        <div className='form-group'>
                            <label htmlFor='email'>{t.email}</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={language === 'pt' ? 'seu@email.com' : 'your@email.com'}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>{t.password}</label>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                placeholder={language === 'pt' ? 'Digite sua senha' : 'Enter your password'}
                                required
                            />
                        </div>
                        <div className='form-options'>
                            <label className='remember-me'>
                                <input type='checkbox' />
                                <span>{t.remember}</span>
                            </label>
                            <button type='button' className='forgot-password' onClick={() => alert(language === 'pt' ? 'Funcionalidade de recuperação de senha em breve!' : 'Forgot password functionality coming soon!')}>
                                {t.forgot}
                            </button>
                        </div>
                        <button type='submit' className='ctaButtonColor login-submit-btn'>
                            {t.signIn}
                        </button>
                        <p className='signup-link'>
                            {t.signUp} <button type='button' className='signup-link-btn' onClick={() => alert(language === 'pt' ? 'Funcionalidade de cadastro em breve!' : 'Sign up functionality coming soon!')}>{t.signUpLink}</button>
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Login;
