import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Hero from './components/Hero'


const App = () => (
  <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

    <Navbar />
    {/* <Hero /> */}

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/collection' element={<Collection/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/orders' element={<Orders/>} />
      <Route path='/place-order' element={<PlaceOrder/>} />
      <Route path='product/:productId' element={<Product/>} />
    </Routes>

  </div>
)

export default App
