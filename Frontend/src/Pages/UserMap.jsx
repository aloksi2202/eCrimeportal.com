import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'


const mapStyle={
  margin:'70px',
width:'90%',
height:'500px'

}
const locations = [  
  { lat: 29.6139, lng: 79.2090 }, 
  { lat: 27.0066, lng: 80.9202 },
  { lat: 28.7041, lng: 77.1025 }, 
  { lat: 26.4499, lng: 80.3319 }, 
];



const UserMap = () => {
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <div>
        <div className='static'>
          {googleMapsApiKey ? (
            <LoadScript googleMapsApiKey={googleMapsApiKey}>
              <GoogleMap zoom={6} center={locations[0]} mapContainerStyle={mapStyle}>
                <Marker position={locations[0]} />
              </GoogleMap>
            </LoadScript>
          ) : (
            <p className="m-4 text-center">Google Maps is unavailable until VITE_GOOGLE_MAPS_API_KEY is configured in Frontend/.env.local.</p>
          )}
        </div>

    </div>
  )
}

export default UserMap