import React from 'react'
import { Link } from 'react-router-dom'

const Options = (props) => {
  return (
    <div className='bg-gradient-to-r from-blue-950 to-blue-900  h-50 text-center mx-17 my-5 rounded-3xl p-6 flex flex-col justify-between shadow-2xl shadow-black '>
        <h2 className='text-xl font-bold'>{props.title}</h2>
        <div className='flex flex-col'>
            <div className='py-10'>
            Lorem ipsum dolor sit amet.
        </div>
        <button className='bg-black text-white  px-2 py-1 rounded-2xl w-3/4 mx-7 '><Link to={"/ComplaintRegister"}>Click Here</Link></button>
        </div>
        </div>
  )
}

export default Options
