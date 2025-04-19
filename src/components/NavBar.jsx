import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* Centered Links */}
      <div style={styles.centerLinks}>
        <NavLink to="/" label="Home" />
        <NavLink to="/products" label="Products" />
        <NavLink to="/offer" label="Offer" />
        <NavLink to="/login" label="Login" />
      </div>

      {/* Right Side Links */}
      <div style={styles.rightLinks}>
        <NavLink to="/signin" label="Sign In" />
        <NavLink to="/feedback" label="Feedback" />
      </div>
    </nav>
  );
}

function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      style={styles.link}
      onMouseEnter={e => e.target.style.color = '#fff'}
      onMouseLeave={e => e.target.style.color = '#f5f5f5'}
    >
      {label}
    </Link>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 40px',
    background: 'linear-gradient(90deg, #4CAF50, #2196F3)',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderRadius: '10px',
  },
  centerLinks: {
    display: 'flex',
    gap: '35px',
    justifyContent: 'center',
    flex: 1,
  },
  rightLinks: {
    display: 'flex',
    gap: '25px',
  },
  link: {
    color: '#f5f5f5',
    textDecoration: 'none',
    padding: '10px 16px',
    borderRadius: '8px',
    transition: 'color 0.3s ease, background-color 0.3s ease',
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
};

export default Navbar;