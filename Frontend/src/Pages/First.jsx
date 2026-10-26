import React, { useState } from 'react';
import Navbar from '../Components/Navbar'; // Assuming you still need this
import { Link } from 'react-router-dom';

const First = () => {
  // 1. Create a state variable to track if the login options are visible
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  // 2. Create a function to toggle that state when the button is clicked
  const handleLoginClick = () => {
    setShowLoginOptions(!showLoginOptions);
  };

  return (
    <div className=''>
      <div className='flex w-full h-screen'>
        
        <div className='w-1/2 pt-40 px-15'>
          <h2 className='text-6xl font-bold text-black'>
            eCrime Portal
          </h2>
          <p className='p-10 text-gray-600'>
            This portal is an initiative of Government of India to facilitate victims/complainants to report cyber crime complaints online. This portal caters to complaints pertaining to cyber crimes only with special focus on cyber crimes against women and children. Complaints reported on this portal are dealt by law enforcement agencies/ police based on the information available in the complaints. It is imperative to provide correct and accurate details while filing complaint for prompt action.
          </p>
          
          <div className='flex flex-col gap-5'>
            <div className='flex gap-15'>
              {/* 3. Attach the handler to the button and remove the empty Link */}
              <Link to={'/LogIn'}>
                <button className='px-15 py-3 bg-blue-600 font-bold text-xl rounded-2xl cursor-pointer'>
                  Login
                </button>
              </Link>
              
              <Link to={'/Register'}>
                <button className='px-15 py-3 bg-gray-400 font-bold text-xl rounded-2xl cursor-pointer'>
                  Register as new User
                </button>
              </Link>
            </div>

            
          </div>

        </div>

        <div className='w-1/2'>
          <div className='pt-30 p-10 mt-5'>
            <img 
              src="https://i.pinimg.com/736x/ed/65/51/ed6551a462c2d2b6955bbe139a5ef86b.jpg" 
              alt="eCrime Portal" 
              className='rounded-2xl'
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default First;