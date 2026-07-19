import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi, I'm Prem Basnet/i);
  expect(linkElement).toBeInTheDocument();
});
