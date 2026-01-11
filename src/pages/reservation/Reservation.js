import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import { generateDateOptions, submitAPI } from '../../utils/fakeAPI';
import './reservation.css';
import ReservationForm from './ReservationForm';
import { ReservationProvider } from './ReservationProvider';

const initialAvailableTimes =  [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00',
];

function initializeTimes() {
  return initialAvailableTimes;
};

function updateTimes(date) {
  const response = generateDateOptions(new Date(date));
  return (response.length > 0) ? [...response] : initializeTimes();
}

function Reservation() {
  const { language } = useLanguage();
  const t = translations[language].reservation;
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    []
  );

  const navigate = useNavigate();

  useState(() => {
    const initialTimes = initializeTimes();
    dispatch(initialTimes);
  }, []);

  function submitData(data) {
    const response = submitAPI(data);
    if (response) {
      navigate('/confirmation');
    }
  }

  return (
    <main className='reservation-page'>
      <section className='reservation-hero'>
        <div className='reservation-hero-content'>
          <h1>{t.title}</h1>
          <p className='reservation-subtitle'>{t.subtitle}</p>
        </div>
      </section>
      <section className='reservation-content'>
        <div className='reservation-container'>
          <ReservationProvider>
            <ReservationForm
              availableTimes={availableTimes}
              dispatchOnDateChange={dispatch}
              submitData={submitData}
            />
          </ReservationProvider>
        </div>
      </section>
    </main>
  );
}

export default Reservation;
