import React from 'react'


const DescriptionBox = () => {
  return (
    <div className='my-[84px] mx-[119px]'>
        <div className='flex'>
            <div className="flex items-center justify-center text-[11.5px] font-mrdium w-[120px] h-[50px] border-[0.7px] border-[#d0d0d0] ">Description</div>
            <div className="flex items-center justify-center text-[11.5px] font-mrdium w-[120px] h-[50px] border-[0.7px] border-[#d0d0d0] bg-[#FBFBFB] text-[#555]">Reviews (122)</div>
        </div>
        <div className='flex flex-col gap-[17px] border-[0.7px] border-[#D0D0D0] p-[33px] pb-[49px]'>
            <p className='text-[15px]' >An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with 
            customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer. 
            </p >
            <p className='text-[15px]'>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
            </p>
        </div>

    </div>
        

  )
}

export default DescriptionBox