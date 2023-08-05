import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { UserPage } from './UserPage'; 

describe('UserPage', () => {
  it('renders correctly and navigates on button click', () => {
    const { getByText, getByRole } = render(
      <MemoryRouter initialEntries={["/user"]}>
        <Routes>
          <Route path="/user" element={<UserPage />} />
          <Route path="/login/userpage/newpost" element={<div>New post page</div>} />
        </Routes>
      </MemoryRouter>
    );
  
    // Check that the locations and title are rendered
    expect(getByText('My Locations')).toBeInTheDocument();
    expect(getByText('Enter a new experience')).toBeInTheDocument();
    expect(getByText('Location 1')).toBeInTheDocument();
    expect(getByText('Location 2')).toBeInTheDocument();
    // add checks for all the locations if needed
  
    // Click on the "New Post" button
    fireEvent.click(getByRole('button', { name: /new post/i }));
  
    // Check that we have navigated to the new post page
    expect(getByText('New post page')).toBeInTheDocument();
  });
});

  