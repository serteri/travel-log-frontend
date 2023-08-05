import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
    it('renders the current year', () => {
        render(<Footer/>);
        
        const date = new Date().getFullYear();
        const regex = new RegExp(date.toString());
        
        expect(screen.getByText(regex)).toBeInTheDocument();
    });
});




