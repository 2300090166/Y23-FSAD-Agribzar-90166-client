import React, { useState } from "react";
function Products() {
  // Declare a state variable named "isAvailable" with an initial value of true
  const [isAvailable, setIsAvailable] = useState(true);

  // Toggle the availability state
  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  return (
    <div>
      {/* Apply inline style to set text color to white */}
      <p style={{ color: "white" }}>Product Status:</p>
      <button
        onClick={toggleAvailability}
        style={{
          backgroundColor: isAvailable ? "green" : "red", // Background color
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isAvailable ? "Available" : "Not Available"}
      </button>
    </div>
  );
}
export default Products;