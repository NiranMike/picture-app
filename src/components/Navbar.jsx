import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  
  return (
    <div className=' px-7 mb-3 py-3 absolute z-10 bg-[#90909013] w-full'>
        <Link to={'/'}><h1 className=' text-black bg-[#90909000] font-bold text-xl'>Picture App</h1></Link>
    </div>
  )
}

export default Navbar