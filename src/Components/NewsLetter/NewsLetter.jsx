import React from 'react'


const NewsLetter = () => {
  return (
    <div className="w-[65%] h-[45vh] flex flex-col items-center justify-center mx-auto px-[120px] mb-[80px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] via-[#e1ffea22] gap-[30px]">
        <h1 className="text-[#454545] text-[40px] font-semibold items-center ">Get Exclusive Offers On Your Email</h1>
        <p className="text-[#454545] text-[17px]" >Subscribe to our newsletter and stay updated</p>
        <div className="flex items-center justify-between bg-white w-[548px] h-[52.5px] rounded-[60px] border-[0.75px] border-[#e3e3e3]">
            <input className='w-[375px] ml-[22.5px] border-none outline-none text-[#616161] font-poppins text-[12px]' type="email" placeholder='Your Email id' />
            <button className='w-[157px] h-[52px] rounded-[60px] text-white text-[12px] bg-black cursor-pointer '>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter