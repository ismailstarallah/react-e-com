import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='w-full h-[80vh] bg-[#fce3fe] py-[70px]'>
      <div className="w-[406px] h-[440px] bg-white m-auto  py-[28px] px-[42px]">
        <h1 className='my-[20px]'>Sign Up</h1>
        <div className="flex flex-col gap-4 mt-[20px]">
          <input className='w-full h-[50.4px] pl-[14px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[12.6px]' type="text" placeholder='Your Name' />
          <input className='w-full h-[50.4px] pl-[14px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[12.6px]' type="email" placeholder='Email Address' />
          <input className='w-full h-[50.4px] pl-[14px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[12.6px]' type="password" placeholder='Password' />
        </div>
        <button className='w-[97%] h-[50.4px] text-white bg-[#ff4141] mt-[21px] border-none text-[16.8px] font-medium cursor-pointer'>Continue</button>
        <p className='mt-[14px] text-[#5c5c5c] text-[12.6px] font-medium'>Already have an account? <span>Log In</span></p>
        <div className="flex items-center mt-[17.5px] gap-[14px] text-[#5c5c5c] text-[12.6px] font-medium">
          <input type="checkbox" name="" id="" />
          <p>I agree to the <span className='text-[#ff4141] font-semibold'>Terms</span> and <span>Privacy Policy</span></p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup