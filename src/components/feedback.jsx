import React, { useState } from 'react';
import axios from 'axios';

const Feedback = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9094/feedback', formData);

      alert(response.data?.message || "Feedback submitted successfully!");
      
      setFormData({ customerName: '', email: '', feedback: '' });

    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert(error.response?.data?.message || 'Error submitting feedback. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>We Value Your Feedback 💬</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="customerName"
            placeholder="Your Name"
            value={formData.customerName}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <textarea
            name="feedback"
            placeholder="Your Feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            rows={6}
            style={{ ...styles.input, ...styles.textarea }}
          ></textarea>
          <button type="submit" style={styles.button}>Submit Feedback 🚀</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(to right, #e0f7fa, #f1f8e9)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 20px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '40px 30px',
    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
    maxWidth: '500px',
    width: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    animation: 'fadeIn 0.8s ease-out',
  },
  title: {
    fontSize: '24px',
    marginBottom: '30px',
    color: '#2e7d32',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  input: {
    padding: '14px 16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    transition: 'box-shadow 0.3s ease',
  },
  textarea: {
    resize: 'none',
  },
  button: {
    padding: '14px 20px',
    backgroundColor: '#388e3c',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s ease-in-out',
  }
};

export default Feedback;
