import React, { useContext } from 'react'
import {ShopContext} from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'


const CartItems = () => {
    const {all_products, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);
          
  return (
    <div className='my-[100px] mx-[170px]'>
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-[14px] text-[#454545] text-[15px] font-semibold">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-[3px] bg-[#e2e2e2] border-[0] ' />
        {all_products.map((e) => {
            if(cartItems[e.id] > 0)
            {
                return <div>
                <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-[14px] text-[#454545] text-[13.5px] font-medium">
                    <img src={e.image} alt="" className='h-[62px]' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='w-[64px] h-[50px] border-[1.4px] border-[#ebebeb] bg-[#fff] '>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} className='w-[15px] mx-[28px] cursor-pointer ' alt="" />
                </div>
                <hr />
            </div>
            }
            return null;
        })}
        <div className="flex my-[70px]">
            <div className="flex-1 flex flex-col mr-[140px] gap-[28px]">
                <h1>cart totals</h1>
                <div>
                    <div className="flex justify-between py-[15px]">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between py-[15px]">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="flex justify-between py-[15px]">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button className="w-[200px] h-[58px] outline-none border-none bg-[#ff5a5a] text-white text-[13px] font-semibold cursor-pointer">PROCEED TO CHECKOUT</button>
            </div>
            <div className="flex-1 text-[13px] font-medium">
                <p className='text-[#555] '>If you have a promo code, enter it her</p>
                <div className="w-[350px] mt-[10.5px] pl-[14px] h-[40px] bg-[#eaeaea]">
                    <input type="text" placeholder='promo code' className='border-none outline-none bg-transparent text-[13px] w-[65%] h-[35px]' />
                    <button className='w-[35%] h-[40px] text-[13px] bg-black text-white cursor-pointer '>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems