import React, { useEffect, useState } from "react";

const Offer = () => {
  const [offers, setOffers] = useState([]);
  const [formData, setFormData] = useState({
    offerId: "",
    name: "",
    description: "",
    availableQuantity: "",
    percentage: "",
    offerValidity: "",
    imageUrl: "", // Add imageUrl field here
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = () => {
    fetch("http://localhost:9098/api/offers")
      .then((res) => res.json())
      .then((data) => setOffers(data))
      .catch((err) => console.error("Error fetching offers:", err));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = editing
      ? `http://localhost:9098/api/offers/${formData.offerId}`
      : "http://localhost:9098/api/offers";
    const method = editing ? "PUT" : "POST";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        fetchOffers();
        setEditing(false);
        resetForm();
      })
      .catch((err) => console.error("Error saving offer:", err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this offer?")) {
      fetch(`http://localhost:9098/api/offers/${id}`, { method: "DELETE" })
        .then(() => fetchOffers())
        .catch((err) => console.error("Error deleting offer:", err));
    }
  };

  const handleEdit = (offer) => {
    setFormData(offer);
    setEditing(true);
    window.scrollTo(0, 0);
  };

  const resetForm = () => {
    setFormData({
      offerId: "",
      name: "",
      description: "",
      availableQuantity: "",
      percentage: "",
      offerValidity: "",
      imageUrl: "", // Reset imageUrl field
    });
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    marginBottom: "15px",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
  };

  return (
    <div
      style={{
        padding: "20px",
        background: "linear-gradient(to right, #f0f4f7, #dfe9f3)",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Centered Form */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            maxWidth: "500px",
            backgroundColor: "#ffffff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: editing ? "#FF9800" : "#4CAF50",
              marginBottom: "20px",
            }}
          >
            {editing ? "Edit Offer" : "Create Offer"}
          </h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Offer Name"
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
            style={inputStyle}
          />
          <input
            type="number"
            name="availableQuantity"
            value={formData.availableQuantity}
            onChange={handleChange}
            placeholder="Available Quantity"
            required
            style={inputStyle}
          />
          <input
            type="number"
            name="percentage"
            value={formData.percentage}
            onChange={handleChange}
            placeholder="Discount Percentage"
            required
            style={inputStyle}
          />
          <input
            type="date"
            name="offerValidity"
            value={formData.offerValidity}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            style={inputStyle}
          />
          <button
            type="submit"
            style={{
              padding: "12px 20px",
              backgroundColor: editing ? "#FF9800" : "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              width: "100%",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            {editing ? "Update Offer" : "Create Offer"}
          </button>
        </form>
      </div>

      {/* Offer List */}
      <h3 style={{ textAlign: "center", color: "#4CAF50", marginTop: "40px" }}>
        Available Offers
      </h3>
      {offers.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {offers.map((offer) => (
            <div
              key={offer.offerId}
              style={{
                backgroundColor: "#ffffff",
                padding: "20px",
                borderRadius: "20px 5px",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {offer.imageUrl && (
                <img
                  src={offer.imageUrl}
                  alt={`${offer.name}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                />
              )}
              <h4 style={{ color: "#333", marginBottom: "10px" }}>
                {offer.name}
              </h4>
              <p style={{ color: "#666", marginBottom: "10px" }}>
                {offer.description}
              </p>
              <p style={{ color: "#666", marginBottom: "10px" }}>
                <strong>Available Quantity:</strong> {offer.availableQuantity}
              </p>
              <p style={{ color: "#666", marginBottom: "10px" }}>
                <strong>Discount:</strong> {offer.percentage}%
              </p>
              <p style={{ color: "#666", marginBottom: "20px" }}>
                <strong>Valid Till:</strong> {offer.offerValidity}
              </p>
              <button
                onClick={() => handleEdit(offer)}
                style={{
                  marginRight: "10px",
                  padding: "10px",
                  backgroundColor: "#FF9800",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(offer.offerId)}
                style={{
                  padding: "10px",
                  backgroundColor: "#F44336",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", color: "#666" }}>No offers available</p>
      )}
    </div>
  );
};

export default Offer;