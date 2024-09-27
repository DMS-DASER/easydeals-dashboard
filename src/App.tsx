import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import ViewOrders from './components/ViewOrders'
import Products from './components/Products'
import InvoicePage from './components/InvoicePage'
import Brand from './components/Brand'
import { useAuth } from '@clerk/clerk-react'

import { Route, Routes } from 'react-router-dom'


function App() {
  const { isLoaded, isSignedIn } = useAuth();
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products/*' element={(isLoaded && isSignedIn) ? <Products/> : <Login/>}/>
        <Route path='/invoice/:id' element={(isLoaded && isSignedIn) ? <InvoicePage/> : <Login/>}/>
        <Route path='/orders/*' element={(isLoaded && isSignedIn) ? <ViewOrders/> : <Login/>}/>
        <Route path='/brands/*' element={(isLoaded && isSignedIn) ? <Brand/> : <Login/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
