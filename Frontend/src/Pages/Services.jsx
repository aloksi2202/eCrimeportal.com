import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='p-10 flex gap-10'>
        
        <button className='px-6 py-3 bg-blue-300 rounded-2xl'><Link to={'/UserMain/Login'}>login</Link></button>
        <button className='px-6 py-3 bg-blue-300 rounded-2xl'><Link to={'/Register'}>Register</Link></button>
        <button className='px-6 py-3 bg-blue-300 rounded-2xl'><Link to={'/UserMain/UserMap'}>User Map</Link></button>
        <button className='px-6 py-3 bg-blue-300 rounded-2xl'><Link to={'/UserMain/ComplaintRegister'}>Complaint Register Page</Link></button>
        <button className='px-6 py-3 bg-blue-300 rounded-2xl'><Link to={'/Top'}>Top</Link></button>
        <button className='px-6 py-3 bg-blue-300 rounded-2xl'><Link to={'/AdminIndex'}>AdminIndex</Link></button>
         <button className='px-6 py-3 bg-blue-300 rounded-2xl'><Link to={'/PoliceMain'}>Police Main</Link></button>
        <button className='px-6 py-3 bg-blue-300 rounded-2xl'><Link to={'/police'}>police</Link></button>
        <button className='px-6 py-3 bg-blue-300 rounded-2xl'><Link to={'/ComplaintDetails'}>Complaint details</Link></button>
         <button className='px-6 py-3 bg-blue-300 rounded-2xl'><Link to={'/UserMain/TrackComplaintFirst'}>track Complaint first</Link></button>

         <form>
      <input
        type="text"
        placeholder="Enter your name"
        required
        className="border p-2 rounded"
      />

      <button className="bg-blue-500  px-4 py-2 rounded">
        Submit
      </button>
    </form>
    </div>
    
  )
}

export default Services