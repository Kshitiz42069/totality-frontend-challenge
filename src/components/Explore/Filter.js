import React, { useState } from 'react'

function Filter() {
    const [price,SetPrice] = useState(true);
    const [location,SetLocation] = useState(true);
    const [rooms,SetRooms] = useState(true);
    const [facility,SetFacility] = useState(true);
    
    const handleClick = (setter) => {
        setter(prevValue => !prevValue);
    };
  return (
    <div>
        <p className='text-2xl font-semibold text-green-500'>Filters</p>
        <div className='flex flex-col gap-6 mt-6'>
            <div className='border-2 py-1 px-3 rounded-xl'>
                <p className='text-xl' onClick={()=>handleClick(SetPrice)}>Price</p>
                {price && (
                    <div>
                        <ul className='flex flex-col gap-2 mt-2 pb-2'>
                            <li className='hover:bg-white hover:text-black px-2 cursor-pointer'>₹5000-₹10000</li>
                            <li className='hover:bg-white hover:text-black px-2 cursor-pointer'>₹10001-₹20000</li>
                            <li className='hover:bg-white hover:text-black px-2 cursor-pointer'>₹20001-₹30000</li>
                            <li className='hover:bg-white hover:text-black px-2 cursor-pointer'>₹30001-₹40000</li>
                            <li className='hover:bg-white hover:text-black px-2 cursor-pointer'>₹40001+</li>
                        </ul>
                    </div>
                )}
            </div>
            <div className='border-2 py-1 px-3 rounded-xl'>
                <p className='text-xl' onClick={()=>handleClick(SetLocation)}>Location</p>
                {location && (
                    <div>
                        <ul className='flex flex-col gap-2 mt-2 pb-2'>
                            <li className='hover:bg-white hover:text-black px-2 cursor-pointer'>Mumbai</li>
                            <li className='hover:bg-white hover:text-black px-2 cursor-pointer'>New Delhi</li>
                            <li className='hover:bg-white hover:text-black px-2 cursor-pointer'>Hyderabad</li>
                        </ul>
                    </div>
                )}
            </div>
            <div className='border-2 py-1 px-3 rounded-xl'>
                <p className='text-xl' onClick={()=>handleClick(SetRooms)}>Rooms</p>
                {rooms && (
                    <div>
                        <ul className='flex flex-col gap-2 mt-2 pb-2'>
                            <li className='hover:bg-white hover:text-black px-2 cursor-pointer'>1BHK</li>
                            <li className='hover:bg-white hover:text-black px-2 cursor-pointer'>2BHK</li>
                            <li className='hover:bg-white hover:text-black px-2 cursor-pointer'>3BHK</li>
                            <li className='hover:bg-white hover:text-black px-2 cursor-pointer'>Duplex</li>
                            <li className='hover:bg-white hover:text-black px-2 cursor-pointer'>Pent House</li>
                        </ul>
                    </div>
                )}
            </div>
            <div className='border-2 py-1 px-3 rounded-xl'>
                <p className='text-xl' onClick={()=>handleClick(SetFacility)}>Facility</p>
                {facility && (
                    <div>
                        <ul className='flex flex-col gap-2 mt-2 pb-2'>
                            <li className='hover:bg-white hover:text-black px-2 cursor-pointer'>Furnished</li>
                            <li className='hover:bg-white hover:text-black px-2 cursor-pointer'>Semi-Furnished</li>
                            <li className='hover:bg-white hover:text-black px-2 cursor-pointer'>Furnished with Parking</li>
                            <li className='hover:bg-white hover:text-black px-2 cursor-pointer'>Semi-Furnished With Parking</li>
                            <li className='hover:bg-white hover:text-black px-2 cursor-pointer'>Only Parking</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Filter