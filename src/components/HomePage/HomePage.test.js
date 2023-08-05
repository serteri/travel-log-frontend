import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage'; 

describe('HomePage', () => {
  it('renders correctly and navigates to login on button click', () => {
    const { getByText, getByRole } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>
    );
  
    // Check that the title and text are rendered
    expect(getByText('TravelLog')).toBeInTheDocument();
    expect(getByText('Journey Beyond Boundaries: Connect, Inspire, Explore')).toBeInTheDocument();
  
    // Click on the "Log In" button
    fireEvent.click(getByRole('button', { name: /log in/i }));
  
    // Check that we have navigated to the login page
    expect(getByText('Login Page')).toBeInTheDocument();
  });
});
