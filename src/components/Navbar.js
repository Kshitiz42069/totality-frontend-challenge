import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='sticky top-0 lg:top-5 flex justify-center items-center z-10 text-white'>
        <div className='flex justify-between items-center w-full lg:w-1/3 bg-[#3C3D37] px-4 lg:px-[5rem] py-2 lg:rounded-[5rem]'>
            <Link to={'/explore'}><button className='text-sm lg:text-lg font-semibold'>Explore</button></Link>
            <Link to={'/'}><img className='w-12 h-12 rounded-full' src="https://i.pinimg.com/564x/29/af/39/29af39604bb107fe3534b87288564e73.jpg" alt="" /></Link>
            <div className='flex gap-6'>
              <Link to={'/login'}><button className='text-sm lg:text-lg font-semibold'>Login</button></Link>
              {/* <button className='text-lg font-semibold'>Logout</button> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar