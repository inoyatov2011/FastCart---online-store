import { EyeOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'

const LogIn = () => {
  return (
    <div className=' max-w-[1300px] m-auto h-[500px] flex items-center justify-center'>
      <section className='flex flex-col justify-center gap-[20px]'>
        <h1 className='text-4xl'>Create an account</h1>
        <h1>Enter your details below</h1>
        <Input type="text" style={{ width: "290px", padding:"12px" }} placeholder='rimel1111@gmail.com' />
        <Input type="text" style={{ width: "290px",padding:"12px" }} placeholder='**********' />
        <h1 className='flex  justify-center gap-[12px] text-[#DB4444]'>Forget Password?</h1>
        <button variant='solid' className='mt-[5px] bg-[#DB4444] text-white p-[12px] rounded-[5px]'>Log In</button>
      </section>
    </div>
  )
}

export default LogIn
