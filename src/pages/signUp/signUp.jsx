import {  Input } from 'antd'
import React from 'react'
import logo1 from "../../img/Icon-Google.png"
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div className=' max-w-[1300px] m-auto h-[700px] flex items-center justify-center'>
      <section className='flex flex-col justify-center gap-[20px]'>
        <h1 className='text-4xl'>Create an account</h1>
        <h1>Enter your details below</h1>
        <Input type="text" style={{width:"290px",padding:"12px"}} placeholder='Name' />
        <Input type="text" style={{width:"290px",padding:"12px"}} placeholder='Email or phone number' />
        <Input type="text" style={{width:"290px",padding:"12px"}}  placeholder='Password'/>
        <button variant='solid' className='mt-[5px] bg-[#DB4444] text-white p-[12px] rounded-[5px]'>Create Account</button>
        <button variant='solid' className='mt-[5px] border-2 flex items-center justify-center gap-[10px]  p-[12px] rounded-[5px]'><img src={logo1} alt="" /> Sign up with Google</button>
        <h1 className='flex  justify-center gap-[12px]'>Already have account? <Link to={"/logIn"}><h1 className='border-b-2 border-black'>Log in</h1></Link></h1>
      </section>
    </div>
  )
}

export default SignUp
