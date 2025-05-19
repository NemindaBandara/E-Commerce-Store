import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flec-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-8 text-sm'>
        <div>
          <Link to='/'><img className='mb-5 w-32' src={assets.logo} alt="" /></Link>
          <p className='w-full md:w-2/3 text-gray-600'>
          At FOREVER, we believe fashion should be effortless, comfortable, and expressive. From everyday basics to standout styles, we bring you clothing that fits your life and your look. Discover quality, style, and service you can trust—because you deserve to wear what makes you feel confident.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About us</li></Link>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+94715593084</li>
            <li>forever@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
