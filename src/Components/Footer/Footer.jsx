import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'



const Footer = () => {
  return (
   <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex justify-center gap-4">
            <img className='w-[70px]' src={footer_logo} alt="" />
            <p className="text-[#383838] text-[30px] font-bold" >SHOPPER</p>
        </div>
        <ul className="flex list-none gap-9 text-[#252525] text-[15px]">
            <li className="cursor-pointer">Company</li>
            <li className="cursor-pointer">Product</li>
            <li className="cursor-pointer">Offices</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
        </ul>
        <div className="flex gap-4">
            <div className="p-2 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb]">
                <img className='w-[20px] cursor-pointer' src={instagram_icon} alt="" />
            </div>
            <div className="p-2 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb]">
                <img className='w-[20px] cursor-pointer' src={pintester_icon} alt="" />
            </div>
            <div className="p-2 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb]">
                <img className='w-[20px] cursor-pointer' src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="flex flex-col items-center gap-6 w-full mb-6 text-gray-800 text-[18px]">
            <hr className='w-4/5 border-none rounded h-[3px] bg-[#c7c7c7]' />
            <p>
                © 2024 Shopper. All Rights Reserved
            </p>
        </div>
    </div>
  )
}

export default Footer