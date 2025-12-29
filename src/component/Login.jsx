import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!email || !password) {
      setError("Please Enter Your Email and Password are Both");
      // Email aur password dono chahiye
      return;
    }

    // Yahan apna login logic likho, jaise API call ya localStorage check
    console.log("Login kar rahe hain:", { email, password });

    // Agar login successful ho to redirect kar do
    navigate("/");
  };

  return (
     
        // <img src="img/hero-bg.jpg" alt="" />
       
    <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password "
            required
          />
        </div>
        {error && (
          <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>
        )}
        <button type="submit">Login</button>
      </form>
    </div>
    
  
  );
};

export default Login;
 

