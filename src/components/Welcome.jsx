import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Welcome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { role } = location.state || {};

  if (!role) {
    // Redirect to login if no role is found
    navigate("/");
    return null;
  }

  return (
    <div className="welcome-container">
      <h1>Welcome!</h1>
      <p>Your role is: <strong>{role}</strong></p>
    </div>
  );
};

export default Welcome;
