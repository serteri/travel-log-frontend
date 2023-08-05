import { render, fireEvent } from '@testing-library/react';
import { PostTravel } from './PostTravel';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), 
  useParams: jest.fn(),
}));

describe('PostTravel', () => {
  it('renders correctly and inputs change correctly', () => {
    useParams.mockReturnValue({ id: "1" });

    const { getByPlaceholderText, getByRole } = render(
      <MemoryRouter initialEntries={["/post/1"]}>
        <Routes>
          <Route path="/post/:id" element={<PostTravel />} />
        </Routes>
      </MemoryRouter>
    );

    // Check form renders correctly
    const locationInput = getByPlaceholderText('Add Location');
    const dateInput = getByPlaceholderText('Add date of visit');
    const costInput = getByPlaceholderText('cost of visit');
    const postInput = getByPlaceholderText('Post something');
    const postButton = getByRole('button', { name: /post it/i });

    // Fire events to simulate user typing into inputs
    fireEvent.change(locationInput, { target: { value: 'Test Location' } });
    fireEvent.change(dateInput, { target: { value: '2023-08-03' } });
    fireEvent.change(costInput, { target: { value: '100' } });
    fireEvent.change(postInput, { target: { value: 'Test Post' } });

    // Check inputs values have changed
    expect(locationInput.value).toBe('Test Location');
    expect(dateInput.value).toBe('2023-08-03');
    expect(costInput.value).toBe('100');
    expect(postInput.value).toBe('Test Post');
  });
});

