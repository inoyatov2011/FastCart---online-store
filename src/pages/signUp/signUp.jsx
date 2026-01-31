import {  Input } from 'antd'
import React from 'react'
import logo1 from "../../img/Icon-Google.png"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../api/authApi/authApi'
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { statusRegistration } = useSelector((store) => store.auth);
  console.log(statusRegistration);

  function submitRegister(event) {
    event.preventDefault();
    let newUser = {
      userName: event.target["userName"].value,
      phoneNumber: event.target["phoneNumber"].value,
      email: event.target["email"].value,
      password: event.target["password"].value,
      confirmPassword: event.target["confirmPassword"].value,
    };
    dispatch(registerUser(newUser));
    event.target.reset();
    if (statusRegistration) {
      navigate("/login");
      alert("Succsess");
    } else {
        alert("Somthing went error")
    }
  }
  return (
    <div className=' max-w-[1300px] m-auto h-[700px] flex items-center justify-center'>
      <section className='flex flex-col justify-center gap-[20px]'>
        <h1 className='text-4xl'>Create an account</h1>
        <h1>Enter your details below</h1>
         <form onSubmit={submitRegister} className='flex flex-col gap-[20px]'>
        <Input placeholder="userName" name="userName"  style={{width:"290px",padding:"12px"}}/>
        <Input placeholder="phoneNumber" name="phoneNumber"  style={{width:"290px",padding:"12px"}}/>
        <Input placeholder="email" name="email"  style={{width:"290px",padding:"12px"}}/>
        <Input placeholder="password" name="password" style={{width:"290px",padding:"12px"}}/>
        <Input placeholder="confirmPassword" name="confirmPassword" style={{width:"290px",padding:"12px"}} />
        <button type='submit' className='mt-[5px] bg-[#DB4444] text-white p-[12px] rounded-[5px]'>Create Account</button>
      </form>
        <button variant='solid' className='mt-[5px] border-2 flex items-center justify-center gap-[10px]  p-[12px] rounded-[5px]'><img src={logo1} alt="" /> Sign up with Google</button>
        <h1 className='flex  justify-center gap-[12px]'>Already have account? <Link to={"/logIn"}><h1 className='border-b-2 border-black'>Log in</h1></Link></h1>
      </section>
    </div>
  )
}

export default SignUp
