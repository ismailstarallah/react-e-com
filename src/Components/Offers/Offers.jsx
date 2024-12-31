import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='w-[70%] h-[75vh] flex m-auto px-[140px] mb-[100px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] via-[#e1ffea22] '>
        <div className="flex-1 flex flex-col justify-center">
            <h1 className='text-[#171717] text-[55px] font-semiblod ' >Exclusive</h1>
            <h1 className='text-[#171717] text-[55px] font-semiblod'>Offers For You</h1>
            <p className='text-[#171717] text-[17px] font-semiblod' >ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='w-[211.5px] h-[52.5px] rounded-[26.25px] bg-[#ff4141] border-none text-white text-[16.5px] font-medium mt-[22.5px] cursor-pointer'>Check NOW</button>
        </div>
        <div className="flex-1 flex justify-center items-end pt-[38px]">
            <img className='w-[80%] ' src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers