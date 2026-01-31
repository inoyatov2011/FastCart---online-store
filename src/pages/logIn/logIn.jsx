import { EyeOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/authApi/authApi';

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { statusLogin } = useSelector((store) => store.auth);

  function submitLogin(event) {
    event.preventDefault();
    let newUser = {
      userName: event.target["userName"].value,
      password: event.target["password"].value,
    };
    dispatch(loginUser(newUser));
    event.target.reset();
    console.log(statusLogin);

    if (statusLogin) {
      navigate("/");
      alert("Succsess");
    } else {
      alert("Somthing went error");
    }
  }
  useEffect(() => {
    if (statusLogin) {
      navigate("/");
    }
  }, [statusLogin]);

  return (
    <div className=' max-w-[1300px] m-auto h-[500px] flex items-center justify-center'>
      <section className='flex flex-col justify-center gap-[20px]'>
        <h1 className='text-4xl'>Create an account</h1>
        <h1>Enter your details below</h1>
        <form action="" className='flex gap-[20px] flex-col' onSubmit={submitLogin}>
          <Input type="text" name='userName' style={{ width: "290px", padding: "12px" }} placeholder='Name' />
          <Input type="text" name="password" style={{ width: "290px", padding: "12px" }} placeholder='Password' />
          <h1 className='flex  justify-center gap-[12px] text-[#DB4444]'>Forget Password?</h1>
          <button variant='solid' type='submit' className='mt-[5px] bg-[#DB4444] text-white p-[12px] rounded-[5px]'>Log In</button>
        </form>
      </section>
    </div>
  )
}

export default LogIn
