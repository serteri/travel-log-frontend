import React from 'react';
import { render } from '@testing-library/react';
import PostCard from './PostCard';

describe('PostCard', () => {
  const mockPost = {
    location: 'New York',
    date: '2023-08-05T12:34:56Z',
    cost: '$100',
    post: 'This is a test post.',
  };

  it('renders the PostCard component with correct data', () => {
    const { getByText } = render(<PostCard post={mockPost} />);

    // Ensure the location, date, cost, and post are displayed correctly
    expect(getByText(`Location: ${mockPost.location}`)).toBeInTheDocument();
    expect(getByText('Date: August 5, 2023')).toBeInTheDocument();
    expect(getByText(`Cost : ${mockPost.cost}`)).toBeInTheDocument();
    expect(getByText(`Comments: ${mockPost.post}`)).toBeInTheDocument();
  });
});
