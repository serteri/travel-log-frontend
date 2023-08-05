import { render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { RegisterPage } from './Register';

jest.mock('axios');

describe('RegisterPage', () => {
    test('renders RegisterPage component', () => {
        render(<Router><RegisterPage /></Router>);
    });

    test('allows the user to fill their first name correctly', async () => {
        const { getByPlaceholderText } = render(<Router><RegisterPage /></Router>);
        
        // Find the input by its placeholder text
        const input = getByPlaceholderText('First Name');
        
        // Type 'John' into the firstName input
        fireEvent.change(input, { target: { value: 'John' } });
        
        await waitFor(() => {
            // It should keep 'John' in the input field
            expect(input.value).toBe('John');
        });
    });

    test('successful registration', async () => {
        const response = {
            data: 'Successfully Registered!'
        };
    
        axios.post.mockResolvedValue(response);
    
        const { getByRole, getByText } = render(<Router><RegisterPage /></Router>);
    
        // Find the button by its role and name and click it
        const button = getByRole('button', { name: /register/i });
        fireEvent.click(button);
    
        await waitFor(() => {
            // It should render "Registration Successful"
            expect(getByText('Registration Successful')).toBeInTheDocument();
        });
    });
});
