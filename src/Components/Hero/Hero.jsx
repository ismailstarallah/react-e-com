import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='h-[100vh] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] via-[#e1ffea22] flex '>
        <div className="flex-1 flex flex-col justify-center gap-[20px] pl-[180px] leading-[1.1] ">
            <h2 className='text-[#090909] text-[26px] font-semibold '>NEW REVALS ONLY</h2>
            <div>
                <div className="flex items-center gap-[15px]">
                    <p className=' text-[#171717] text-[52.5px] font-bold '>new</p>
                    <img className='w-[80px]' src={hand_icon} alt="" />
                </div>
                <p className=' text-[#171717] text-[52.5px] font-bold '>collections</p>
                <p className=' text-[#171717] text-[52.5px] font-bold '>for everyone</p>
            </div>
            <div className="flex justify-center items-center gap-[15px] w-[200px] h-[50px] rounded-[56.25px] mt-[23px] bg-[#ff4141] text-white text-[16.5px] font-medium cursor-pointer">
                <div>latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
            <img className='w-[80%]' src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero