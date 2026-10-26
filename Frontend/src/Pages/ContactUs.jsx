import React, { use, useState } from 'react'
import Navbar from '../Components/Navbar'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {

const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name,phone,email,company,subject,message)
    setName('')
    setCompany('')
    setEmail('')
    setPhone('')
    setSubject('')
    setMessage('')
  }

  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [company, setCompany] = useState()
  const [subject, setSubject] = useState()
  const [message, setMessage] = useState()

  const save=async()=>{
    let link=`http://localhost:8080/message/save`
    const response=await fetch(link, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },body:JSON.stringify({name:name,mobile:phone,email:email,company:company,subject:subject,message:message})
    });
    const result=await response.text()
    console.log(result)
  }

  return (
    <div className='mt-15'>
      <div className='pb-4'>
        <h1 className='text-center  font-extrabold text-5xl mt-10'>Contact us</h1>
        <div className='w-full flex justify-center p-2'>
          <p className=' text-center text-xl w-120'>
          We are ready to provide the right solution according to your need.
        </p>
        </div>
        
      </div>
      <div className='  rounded-2xl text-black  ml-17 h-140 w-18/20 mb-10 flex  '>
        <div className='w-1/2 bg-blue-200 rounded-l-2xl h-full p-10'>
          <h1 className='text-3xl font-bold  pt-5 '>
            Get In Touch
          </h1>
          <p className='p-2 text-xs '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fuga doloremque veniam, deserunt fugiat ipsum id tenetur unde.
          </p>
          <div className='flex'>
            <div className=' pt-6'>
              <FaLocationDot  className='text-4xl p-1 bg-blue-700 rounded-4xl' />
            </div>

            <div className='p-3'>
              <h3 className='font-bold'>Location</h3>
              <p className='text-xs'>abcsjnnj@gmail.com</p>
              <p className='text-xs'>hjhgjgjh@gmail.com</p>
            </div>
            

          </div>
           <div className='flex'>
            <div className=' pt-6'>
              <MdEmail className='text-4xl p-1 bg-blue-700 rounded-4xl' />
            </div>

            <div className='p-3'>
              <h3 className='font-bold'>Email Us</h3>
              <p className='text-xs'>abcsjnnj@gmail.com</p>
              <p className='text-xs'>hjhgjgjh@gmail.com</p>
            </div>

          </div>

          <div className=' flex'>

            <div className='pt-6 '>

              <MdPhoneInTalk className='text-4xl p-1 bg-blue-700 rounded-4xl' />

            </div>
            <div className='p-3'>
              <h3 className='font-bold'>Contact Us</h3>
              <p className='text-xs'>91-7912374821</p>
              <p className='text-xs'>91-8292697378</p>
            </div>

          </div>
          <div className='p-3'>
            <h2 className='font-bold  '>Follow sur social media</h2>
            <div className='pt-2 flex gap-4'>
              <FaFacebook className='text-2xl' />
              <FaInstagram className='text-2xl' />
              <FaLinkedin className='text-2xl' />
              <FaTwitter className='text-2xl' />

            </div>
          </div>

        </div>
        <div className=' h-full p-10 w-1/2 bg-blue-50 rounded-r-2xl'>
         <form onSubmit={handleSubmit}>
           <h1 className='font-bold text-3xl pb-4'>
            Send us a message
          </h1 >
          <div className='flex gap-15'>
            <div>
              <label className="block text-black text-sm mb-2" htmlFor="username">
                Name
              </label>
              <input
              required
              value={name}
              onChange={(e)=>{
                setName(e.target.value)
              }}
                id="username"
                type="text"
                placeholder="Enter your Name"
                className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
              />

              <label className="block text-black text-sm mb-2" htmlFor="phone">
                Phone
              </label>
              <input
              required
              value={phone}
              onChange={(e)=>{
                setPhone(e.target.value)
              }}
                id="phone"
                type="tel"
                maxLength={10}
                minLength={10}
                placeholder="Enter your Phone no."
                className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
              />

            </div>
            <div>
              <label className="block text-black text-sm mb-2" htmlFor="company">
              Company
            </label>
                <input
                value={company}
              onChange={(e)=>{
                setCompany(e.target.value)
              }}
              id="company"
              type="text"
              placeholder="Enter your Company name"
              className="w-full bg-gray-200 text-gray-800  px-2 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
            />

            <label className="block text-black text-sm mb-2" htmlFor="email">
              Email
            </label>
                <input
                value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
                required
              id="email"
              type="email"
              placeholder="Enter your Email"
              className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
            />
            </div>

          </div>
          <div>
            <label className="block text-black text-sm mb-2" htmlFor="subject">
              Subject
            </label>
                <input
                value={subject}
              onChange={(e)=>{
                setSubject(e.target.value)
              }}
                required
              id="Subject"
              type="text"
              placeholder="Enter your Subject"
              className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
            />

            <label className="block text-black text-sm mb-2" htmlFor="message">
              Message
            </label>
                <textarea
                required
                value={message}
              onChange={(e)=>{
                setMessage(e.target.value)
              }}
                cols={30}
                rows={5}
              id="message"
              type="text"
              placeholder="Enter your Message"
            
              className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2  focus:ring-blue-300 placeholder-gray-500 text-sm"
            />
           <div className='text-center pt-4'>
             <button onClick={save} className='bg-blue-800 text-white w-140 h-10 rounded-3xl'>Send</button>
           </div>
          </div>
         </form>
        </div>

      </div>


      <div className='flex justify-center  '>
        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.7435917874463!2d80.92025477529822!3d27.00665967659125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999511362f9e749%3A0x73357392bf18c880!2sSR%20Group%20Of%20Institutions!5e0!3m2!1sen!2sin!4v1772194583705!5m2!1sen!2sin" className='w-full h-100 rounded-2xl  '></iframe>



      </div>

    </div>
  )
}

export default ContactUs