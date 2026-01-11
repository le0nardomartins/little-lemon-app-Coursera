import { Link } from 'react-router-dom';
import './not-found.css';

const NotFound = () => {
    return (
        <main className='not-found-page'>
            <div className='not-found-illustration'>
                <div className='emoji'>🍋</div>
                <div className='error-code'>404</div>
            </div>
            <h1 className='not-found-title'>Oops! Page not found</h1>
            <p className='not-found-message'>
                It looks like you got lost! The page you are looking for does not exist or has been moved.
            </p>
            <p className='not-found-suggestion'>
                How about going back to the beginning and exploring our delicious menu?
            </p>
            <Link to='/' className='home-button'>
                Back to Home
            </Link>
        </main>
    );
}

export default NotFound;
