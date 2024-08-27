import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Products from './components/Products'
import { useAuth } from '@clerk/clerk-react'

import { Route, Routes } from 'react-router-dom'


function App() {
  const { isLoaded, isSignedIn } = useAuth();

  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products/*' element={(isLoaded && isSignedIn) ? <Products/> : <Login/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
