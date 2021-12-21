import { render, screen } from '@testing-library/react';

import Title from './Title';
import App from './App';
test('There should be selling title with neat copy', () => {
  render(<App />);
  const title = screen.getByText(/Really great watches/i);
  expect(title).toBeInTheDocument();
});
