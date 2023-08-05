import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import LoginForm from "./LoginForm";
import axios from "axios";

// Mocking the post function of axios
jest.mock("axios");

describe("LoginForm component", () => {

  test("renders LoginForm component correctly", () => {
    render(<Router><LoginForm /></Router>);
    expect(screen.getByText(/Log In Form/i)).toBeInTheDocument();
  });

  test("email and password inputs change value on typing", async () => {
    render(<Router><LoginForm /></Router>);

    fireEvent.change(screen.getByLabelText(/Email address:/i), {
      target: { value: 'test@mail.com' },
    });
    fireEvent.change(screen.getByLabelText(/Password:/i), {
      target: { value: 'password123' },
    });

    expect(screen.getByLabelText(/Email address:/i).value).toBe('test@mail.com');
    expect(screen.getByLabelText(/Password:/i).value).toBe('password123');
  });

  test("submitForm function calls axios post", async () => {
    axios.post.mockResolvedValue({ data: {} }); // Mocking a successful post request
    render(<Router><LoginForm /></Router>);

    fireEvent.change(screen.getByLabelText(/Email address:/i), {
      target: { value: 'test@mail.com' },
    });
    fireEvent.change(screen.getByLabelText(/Password:/i), {
      target: { value: 'password123' },
    });
    
    fireEvent.click(screen.getByRole('button', { name: /Log In/i }));
    
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalled();
    });
  });

  
});

// Will try to add similar tests for the remaining functionalities if time permits.


