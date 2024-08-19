import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/input";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const validate = () => {
    let isValid = true;
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleLogin = () => {
    if (validate()) {
      // Handle login logic here
      console.log("Email:", email);
      console.log("Password:", password);
      navigate("/");
    }
  };

  const CancelhandleLogin = () => {
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <div className="mb-3">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          className="mb-2"
        />
      </div>
      <div className="mb-3">
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          className="mb-2"
        />
      </div>
      <div className="row">
        <div className="col-6">
          <Button
            className="btn-secondary float-start"
            text="Cancel"
            onClick={CancelhandleLogin}
          />
        </div>
        <div className="col-6">
          <Button text="Login" className=" float-end" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
