import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className='flex items-center gap-[6px] text-[5e5e5e] text-[11.5px] font-semibold my-[42px] mx-[119px] capitalize'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums