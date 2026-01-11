import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../context/LanguageContext';
import App from '../App';

test('renders text on home page', async () => {
  render(
    <MemoryRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </MemoryRouter>
  );
  
  // Wait for lazy loaded content to appear
  await waitFor(() => {
    // The text can be "This week's specials!" (English) or "Especiais da Semana!" (Portuguese)
    const h2Element = screen.getByText(/This week's specials!|Especiais da Semana!/i);
    expect(h2Element).toBeInTheDocument();
  }, { timeout: 3000 });
});