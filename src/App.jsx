import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar'
import Home from './components/Home'
import User from './components/User'
import CredentialsSignInPage from './components/CredentialsSignInPage'
import Products from './components/Productsl'
import Button from'./components/Button'
import RecipeReviewCard from './components/RecipeReviewCard'
import MockDataProducts from './components/MockDataProducts'
import Feedback from './components/feedback'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <Home/>
      <CredentialsSignInPage/>
      <Products/>
      <Button/>
      <RecipeReviewCard />
      <MockDataProducts/>
      <Feedback/>
    </>
  )
}
export default App 
