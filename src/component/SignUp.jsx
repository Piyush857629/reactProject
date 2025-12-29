import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !password) {
      setError("Saare fields bharna zaroori hai");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password aur Confirm Password match nahi kar rahe");
      return;
    }

    // Yahan apna signup logic likhen, jaise API call ya localStorage mein user store karna
    console.log("Signup kar rahe hain:", { name, email, password });

    // Signup ke baad login page ya dashboard pe le jao
    navigate("/");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem" }}>
      <h2
        style={{
          font: "30px",
          fontFamily: "Raleway, Sans-serif",
          // backgroundColor: "#5fcf80",
          color: "#5fcf80",
          fontWeight: "bold",
        }}
      >
        Signup
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email  "
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
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Confirm Password:</label>
          <br />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        </div>
        {error && (
          <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>
        )}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
