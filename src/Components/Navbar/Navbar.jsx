import React, { useContext } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContext'



const Navbar = () => {

    const [menu, setMenu] = React.useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <div className="flex justify-around p-[12px] shadow-[0_0.8px_2.4px_-1.6px_black]">
            <div className="flex items-center gap-2">
                <img src={logo} alt="logo" />
                <p className="text-[30px] text-[#383838] font-semibold">SHOPPER</p>
            </div>
            <div>
                <ul className="flex items-center li-style-none gap-12 text-[#626262] text-[20px] font-medium">
                    <li className="flex flex-col items-center justify-center gap-1 curso-pointer" onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link> {menu === "shop" ? <hr className="border-none w-4/5 h-[3px] rounded-lg bg-[#FF4141]" /> : <></>}</li>
                    <li className="flex flex-col items-center justify-center gap-1 curso-pointer" onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link> {menu === "mens" ? <hr className="border-none w-4/5 h-[3px] rounded-lg bg-[#FF4141]" /> : <></>}</li>
                    <li className="flex flex-col items-center justify-center gap-1 curso-pointer" onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link> {menu === "womens" ? <hr className="border-none w-4/5 h-[3px] rounded-lg bg-[#FF4141]" /> : <></>}</li>
                    <li className="flex flex-col items-center justify-center gap-1 curso-pointer" onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link> {menu === "kids" ? <hr className="border-none w-4/5 h-[3px] rounded-lg bg-[#FF4141]" /> : <></>}</li>
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <Link to='/login'><button className="w-[125px] h-[46px] outline-none border-[0.8px] border-[#7a7a7a] rounded-[60px] text-[#515151] text-[16px] font-medium bg-white cursor-pointer active:bg-[#f3f3f3]">Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
                <div className="w-[20px] h-[20px] flex justify-center items-center mt-[-30px] ml-[-28px] rounded-[11px] text-[14px] bg-red-500 text-white">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};
export default Navbar;