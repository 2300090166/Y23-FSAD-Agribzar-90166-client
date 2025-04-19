import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import ab1 from '../components/images/ab1.jpg';

const Home = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      background: 'linear-gradient(135deg, #eef2f3, #d4e2d4)',
      fontFamily: "'Roboto', sans-serif"
    }}>
      {/* Hero Section */}
      <div style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        marginBottom: '30px',
        width: '100%',
        maxWidth: '800px'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#2d6a4f',
          marginBottom: '20px'
        }}>Welcome to AgriWorld!</h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#5a5a5a',
          marginBottom: '30px'
        }}>
          Explore the best of agriculture and agricultural products with exciting offers tailored for you.
        </p>
        <img src={ab1} alt="Agri Banner" style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
        }} />
      </div>

      {/* Background Design with Description Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'linear-gradient(90deg, #cde0c9, #eef2f3)',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '800px',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2rem',
          color: '#2d6a4f',
          marginBottom: '15px'
        }}>Our Vision</h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#4f4f4f',
          marginBottom: '20px',
          lineHeight: '1.6'
        }}>
          At AgriWorld, we are committed to revolutionizing agriculture by providing top-quality products, sustainable solutions, and innovative farming tools. Join us in cultivating a greener future.
        </p>
      </div>

      {/* Description Section */}
      <div style={{
        textAlign: 'left',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '800px'
      }}>
        <h2 style={{
          fontSize: '2rem',
          color: '#2d6a4f',
          marginBottom: '15px'
        }}>About AgriWorld</h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#4f4f4f',
          marginBottom: '10px',
          lineHeight: '1.6'
        }}>
          At AgriWorld, we strive to connect people to the roots of nature with quality agricultural products. From fresh produce to organic fertilizers, we offer a diverse range of items designed to promote sustainable living.
        </p>
        <p style={{
          fontSize: '1.1rem',
          color: '#4f4f4f',
          marginBottom: '20px',
          lineHeight: '1.6'
        }}>
          Discover exclusive offers on seeds, tools, and farming essentials that make agriculture more accessible and rewarding.
        </p>
        <button style={{
          backgroundColor: '#2d6a4f',
          color: '#fff',
          padding: '10px 20px',
          fontSize: '1rem',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)'
        }} onClick={() => navigate('/products')}>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;