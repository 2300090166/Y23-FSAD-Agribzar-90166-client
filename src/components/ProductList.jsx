import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    productId: "",
    name: "",
    description: "",
    availableQuantity: "",
    percentage: "",
    productValidity: "",
    image: "", // Field for image added
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("http://localhost:9099/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
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
      ? `http://localhost:9099/api/products/${formData.productId}`
      : "http://localhost:9099/api/products";
    const method = editing ? "PUT" : "POST";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to save product");
        return res.json();
      })
      .then(() => {
        fetchProducts();
        resetForm();
        setEditing(false);
      })
      .catch((err) => console.error("Error saving product:", err));
  };

  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      fetch(`http://localhost:9099/api/products/${productId}`, {
        method: "DELETE",
      })
        .then(() => fetchProducts())
        .catch((err) => console.error("Error deleting product:", err));
    }
  };

  const handleEdit = (product) => {
    setFormData({
      productId: product.productId,
      name: product.name,
      description: product.description,
      availableQuantity: product.availableQuantity,
      percentage: product.percentage,
      productValidity: product.productValidity,
      image: product.image, // Set the image field for editing
    });
    setEditing(true);
    window.scrollTo(0, 0);
  };

  const resetForm = () => {
    setFormData({
      productId: "",
      name: "",
      description: "",
      availableQuantity: "",
      percentage: "",
      productValidity: "",
      image: "", // Reset the image field
    });
  };

  return (
    <div style={{
      padding: "40px",
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(135deg, #e0f7fa, #f1f8e9)",
      minHeight: "100vh"
    }}>
      <h2 style={{
        textAlign: "center",
        marginBottom: "30px",
        color: "#2e7d32",
        borderBottom: "3px solid #388e3c",
        paddingBottom: "10px"
      }}>
        {editing ? "Edit Product" : "Add Product"}
      </h2>

      <form onSubmit={handleSubmit} style={{
        marginBottom: "40px",
        backgroundColor: "#ffffff",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
        margin: "auto"
      }}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
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
          style={inputStyle}
        />
        <input
          type="date"
          name="productValidity"
          value={formData.productValidity}
          onChange={handleChange}
          placeholder="Valid Till"
          style={inputStyle}
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          style={inputStyle}
        />
        <button type="submit" style={{
          padding: "14px 20px",
          backgroundColor: editing ? "#ffa000" : "#43a047",
          color: "white",
          border: "none",
          borderRadius: "8px",
          width: "100%",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background-color 0.3s"
        }}>
          {editing ? "Update Product" : "Add Product"}
        </button>
      </form>

      <h2 style={{
        textAlign: "center",
        marginBottom: "30px",
        color: "#2e7d32",
        borderBottom: "3px solid #388e3c",
        paddingBottom: "10px"
      }}>
        Product List
      </h2>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "25px"
      }}>
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.productId}
              style={{
                background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
                padding: "20px",
                borderRadius: "20px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                maxWidth: "300px",
                width: "100%",
                textAlign: "left"
              }}
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={`${product.name}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    marginBottom: "15px"
                  }}
                />
              )}
              <h3 style={{ color: "#000000", marginBottom: "10px" }}>{product.name}</h3>
              <p style={{ color: "#000000" }}><strong>Description:</strong> {product.description}</p>
              <p style={{ color: "#000000" }}><strong>Available Quantity:</strong> {product.availableQuantity}</p>
              {product.percentage && <p style={{ color: "#000000" }}><strong>Discount:</strong> {product.percentage}%</p>}
              <p style={{ color: "#000000" }}><strong>Valid Till:</strong> {product.productValidity || "N/A"}</p>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                <button onClick={() => handleEdit(product)} style={buttonStyle("#fb8c00")}>Edit</button>
                <button onClick={() => handleDelete(product.productId)} style={buttonStyle("#e53935")}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#333", fontSize: "18px", fontWeight: "bold" }}>
            No products available
          </p>
        )}
      </div>
    </div>
  );
};

const inputStyle = {
  display: "block",
  marginBottom: "15px",
  padding: "12px",
  width: "100%",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box"
};

const buttonStyle = (color) => ({
  padding: "10px 15px",
  backgroundColor: color,
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background-color 0.3s"
});

export default ProductList;