import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Shiny Fashion, your go-to destination for stylish, affordable, and quality clothing. Whether you're dressing up for a special occasion or keeping it casual, we bring you the latest trends and timeless classics to suit every taste.</p>
          <p>We believe fashion should be fun, inclusive, and accessible. That’s why we offer a curated selection of clothing for men, women, and kids — all at prices you’ll love.</p>
          <p>Thank you for choosing Shiny Fashion — where your wardrobe shines brighter!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Shiny Fashion, our mission is to empower individuals to express themselves through affordable, stylish, and comfortable clothing. We strive to make fashion accessible to everyone, while maintaining a commitment to quality, customer satisfaction, and inclusive style. Our goal is to inspire confidence and celebrate individuality—one outfit at a time.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Shiny Fashion, we take pride in delivering only the best. Each piece is carefully inspected to ensure it meets our high standards of stitching, fabric quality, and durability. From sourcing to packaging, our quality control process ensures that you receive products you can trust—every time</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Shopping with Shiny Fashion is quick, easy, and stress-free. Our user-friendly website lets you browse, filter, and buy your favorite styles with just a few clicks. With fast delivery and easy returns, we bring fashion to your doorstep—on your schedule.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exeptional Customer Service:</b>
          <p className='text-gray-600'>Our customers are at the heart of everything we do. Our friendly and responsive support team is always ready to assist you—whether it’s tracking your order, handling returns, or answering style questions. We're here to make your shopping experience smooth and enjoyable.</p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About
