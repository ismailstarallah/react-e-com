import React from 'react'
import { Link } from 'react-router-dom'

export const Item = (props) => {
  return (
    <div className='w-[250px]  hover:scale-105 transition-transform duration-600 '>
      <Link to={`/product/${props.id}`}> <img className='w-[95%]' onClick={window.scrollTo(0, 0)} src={props.image} alt="" /></Link>
      <p className='m-[3.5px]'>{props.name}</p>
      <div className='flex gap-[14px]'>
        <div className="text-[#374151] text-[12.5px] font-semibold ">
          ${props.new_price}
        </div>
        <div className="text-[#8c8c8c] text-[12.6px] font-medium line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  )
}
export default Item