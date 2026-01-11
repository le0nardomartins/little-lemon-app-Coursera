import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import FormField from '../../components/ui/formField/FormField';

export default function ReservationForm( {
    availableTimes,
    submitData
}) {
    const { language } = useLanguage();
    const t = translations[language].reservation;

    const minimumDate = new Date().toISOString().split('T')[0];
    const defaultDate = availableTimes[0];
    const minimumGuests = 1;
    const maximumGuests = 10;

    const invalidDateErrorMessage = t.invalidDate;
    const invalidTimeErrorMessage = t.invalidTime;
    const invalidOccasionErrorMessage = t.invalidOccasion;
    const invalidNumberOfGuestsErrorMessage = t.invalidGuests.replace('{min}', minimumGuests).replace('{max}', maximumGuests);

    const guestHint = t.guestHint.replace('{min}', minimumGuests).replace('{max}', maximumGuests);

    const [date, setDate] = useState(minimumDate);
    const [time, setTime] = useState(defaultDate);
    const [guests, setGuests] = useState(minimumGuests);
    const [occasion, setOccasion] = useState(language === 'pt' ? 'Aniversário' : 'Birthday');

    const isDateValid = () => date !== '';
    const isTimeValid = () => time !== '';
    const isGuestsValid = () => guests !== '';
    const isOccasionValid = () => occasion !== '';
    const hasHint = () => guests < minimumGuests || guests > maximumGuests;

    function handleSumbit(e) {
        e.preventDefault();
        // console.log('Date:', date);
        // console.log('Time:', time);
        // console.log('Guests:', guests);
        // console.log('Occasion:', occasion);
        submitData({ date, time, guests, occasion });
        ClearForm();
    }

    const ClearForm = () => {
        setDate(minimumDate);
        setTime('17:00');
        setGuests(1);
        setOccasion(language === 'pt' ? 'Aniversário' : 'Birthday');
    }

    return (
        <form
            className='reservation-form'
            onSubmit={handleSumbit}
        >
            <FormField
                label={t.date}
                htmlFor='reservation-date'
                hasError={!isDateValid()}
                errorMessage={invalidDateErrorMessage}
            >
                <input
                type='date'
                id='reservation-date'
                name='reservation-date'
                min={minimumDate}
                value={date}
                required={true}
                onChange={e => setDate(e.target.value)}
                />
            </FormField>
            <FormField
                label={t.time}
                htmlFor='reservation-time'
                hasError={!isTimeValid()}
                errorMessage={invalidTimeErrorMessage}
            >
                <select
                    id='reservation-time'
                    className='reservation-time'
                    name='reservation-time'
                    value={time}
                    required={true}
                    onChange={e => setTime(e.target.value)}
                >
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>
                        {time}
                        </option>
                    ))}
                </select>
            </FormField>
            <FormField
                label={t.guests}
                htmlFor='guests'
                hasError={!isGuestsValid()}
                errorMessage={invalidNumberOfGuestsErrorMessage}
                hasHint={!hasHint()}
                hintMessage={guestHint}
            >
                <input
                    type='number'
                    id='guests'
                    className='guests'
                    name='guests'
                    min={minimumGuests}
                    max={maximumGuests}
                    value={guests}
                    required={true}
                    onChange={(e) => setGuests(e.target.value)}
                />
            </FormField>
            <FormField
                label={t.occasion}
                htmlFor='occasion'
                hasError={!isOccasionValid()}
                errorMessage={invalidOccasionErrorMessage}
            >
                <select
                    id='occasion'
                    className='occasion'
                    name='occasion'
                    value={occasion}
                    required={true}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option value={language === 'pt' ? 'Aniversário' : 'Birthday'}>{t.birthday}</option>
                    <option value={language === 'pt' ? 'Aniversário de Casamento' : 'Anniversary'}>{t.anniversary}</option>
                </select>
            </FormField>
            <input
                className='btn'
                type='submit'
                value={t.submit}
                aria-label={t.submit}
            />
        </form>
    );
}