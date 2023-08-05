const { render, screen } = require('@testing-library/react');
const { MemoryRouter } = require('react-router-dom');
const { NavBar} = require('./NavBar');

describe('NavBar', () => {
  it('renders correctly with navigation items', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
  });
});
