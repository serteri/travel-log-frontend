import { render } from '@testing-library/react';
import Error from './Error'; // Replace with the correct file path

describe('Error', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Error />);
    expect(getByText('Oops! You seem to be lost.')).toBeInTheDocument();
    expect(getByText('Please check your links above')).toBeInTheDocument();
  });
});
