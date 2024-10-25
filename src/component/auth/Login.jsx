import React from 'react'
import Form from "./Form"

const Login = ({handelLogin}) => {
  // console.log(handelLogin);
  return (
    <div className='w-full h-screen flex justify-center items-center' >
      <Form handelLogin={handelLogin} />
    </div>
  )
}

export default Login