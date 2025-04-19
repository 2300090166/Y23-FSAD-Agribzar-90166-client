import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import CredentialsSignInPage from './components/CredentialsSignInPage';
import Products from './components/Products';
import Home from './components/Home';
import Button from './components/Button';
import RecipeReviewCard from './components/RecipeReviewCard';
import Feedback from './components/feedback';
import Login from './components/userlogin';
import ProductList from "./components/ProductList";
import Offer from './components/Offer';
function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar stays on all pages */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/products" 
          element={
            <>
         
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                 {/* Button centered */}
                <ProductList/>
              </div>
            </>
          } 
        />
        <Route path="/signin" element={<CredentialsSignInPage />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Offer" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
