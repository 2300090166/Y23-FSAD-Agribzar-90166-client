import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:9095/auth/login", {
        username,
      });

      console.log("Login response:", response.data);

      if (response.data.token) {
        localStorage.setItem("jwt", response.data.token);
        setMessage("Login successful! Token saved.");
      } else {
        setMessage("Login failed. No token received.");
      }
    } catch (error) {
      console.error("Login failed", error);
      setMessage("Login failed.");
    }
  };

  const validateToken = async () => {
    const storedToken = localStorage.getItem("jwt");

    if (!storedToken) {
      setMessage("No token found. Please log in.");
      return;
    }

    console.log("Stored Token:", storedToken);

    try {
      const response = await axios.get(
        `http://localhost:9095/auth/validate?token=${storedToken}`
      );

      console.log("Server Response:", response.data);

      if (response.data.code === "200") {
        setMessage(`Token valid! Welcome, ${response.data.message}`);
      } else {
        setMessage("Invalid token. Please log in again.");
      }
    } catch (error) {
      console.error("Token validation failed:", error);
      setMessage("Token validation failed.");
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
      <h2 style={{ color: "black" }}>JWT Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ color: "black" }}
      />
      <button onClick={handleLogin} style={{ color: "white", backgroundColor: "black" }}>
        Login
      </button>
      <button
        onClick={validateToken}
        style={{ marginLeft: "10px", color: "white", backgroundColor: "black" }}
      >
        Validate Token
      </button>
      <p style={{ color: "black" }}>{message}</p>
    </div>
  );
};

export default Login;