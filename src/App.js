import './App.css';
import { lazy, Suspense } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';

// Lazy loading de todas as páginas para melhor performance
const Home = lazy(() => import('./pages/homepage/Home'));
const About = lazy(() => import('./pages/about/About'));
const Menu = lazy(() => import('./pages/menu/Menu'));
const Reservation = lazy(() => import('./pages/reservation/Reservation'));
const ConfirmReservation = lazy(() => import('./pages/reservation/ConfirmReservation'));
const OrderOnline = lazy(() => import('./pages/order-online/OrderOnline'));
const Login = lazy(() => import('./pages/login/Login'));
const NotFound = lazy(() => import('./pages/not-found/NotFound'));

const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '50vh',
    fontSize: '1.2rem',
    color: '#495E57'
  }}>
    Loading...
  </div>
);

function App({ content }) {
  return (
    <>
      <Header />
      {content}
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/confirmation" element={<ConfirmReservation />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
