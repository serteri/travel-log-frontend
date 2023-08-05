import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from './AboutUs';

describe('About', () => {
  test('renders Travel Log heading', () => {
    render(<About />);
    const heading = screen.getByText(/Travel Log/i);
    expect(heading).toBeInTheDocument();
  });
});

describe('About', () => {
  test('renders Travel Log heading', () => {
    render(<About />);
    const heading = screen.getByText(/Travel Log/i);
    expect(heading).toBeInTheDocument();
  });
});
