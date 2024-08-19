// src/pages/Login/Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";

interface LoginState {
  email: string;
  password: string;
  error: string | null;
}

const Login: React.FC = () => {
  const navigate = useNavigate();

  // Single useState for all form fields and error
  const [state, setState] = useState<LoginState>({
    email: "",
    password: "",
    error: null,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { email, password } = state;
    navigate("/");
    // Simple validation check
    if (email === "test@example.com" && password === "password") {
      // Navigate to the home page on successful login
      navigate("/");
    } else {
      setState((prevState) => ({
        ...prevState,
        error: "Invalid email or password",
      }));
    }
  };

  return (
    <Container className="mt-4">
      <h2>Login</h2>
      {state.error && <Alert variant="danger">{state.error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="Enter email"
            value={state.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
