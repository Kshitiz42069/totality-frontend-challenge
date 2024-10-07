import React from 'react'
import Filter from './Filter'

function Explore() {
  return (
    <div className='lg:px-[3rem] py-[4rem]'>
        <p className='text-7xl text-white text-center font-bold'>Find Your <span className='text-green-500'>Best</span> Place!</p>
        <div className='flex gap-6'>
            <div className='text-white w-1/4 py-[2rem] hidden lg:block'>
                <Filter/>
            </div>    
            <div className='lg:border-l-2 mt-[2rem] px-[1rem] lg:px-[4rem] grid lg:grid-cols-3 grid-cols-1 gap-9'>
                <div className=' text-white flex flex-col gap-2'>
                    <img className='w-[27rem] h-[20rem] rounded-xl' src="https://i.pinimg.com/564x/80/28/3d/80283db9eb96e21bc68d661dabb9e93e.jpg" alt="property_image" />
                    <div className='flex flex-col gap-2 p-2'>
                        <p className='text-3xl'>DLF Emporio</p>
                        <p>3BHK, Semi Furnished</p>
                        <p>Park, Auditorium, Gym, Pool</p>
                        <p className='font-bold'>Rent: Starts from ₹4,00,000</p>
                        <button className='btn btn-outline btn-success'>Book Now</button>
                    </div>
                </div>
                <div className=' text-white flex flex-col gap-2'>
                    <img className='w-[27rem] h-[20rem] rounded-xl' src="https://i.pinimg.com/564x/80/28/3d/80283db9eb96e21bc68d661dabb9e93e.jpg" alt="property_image" />
                    <div className='flex flex-col gap-2 p-2'>
                        <p className='text-3xl'>DLF Emporio</p>
                        <p>3BHK, Semi Furnished</p>
                        <p>Park, Auditorium, Gym, Pool</p>
                        <p className='font-bold'>Rent: Starts from ₹4,00,000</p>
                        <button className='btn btn-outline btn-success'>Book Now</button>
                    </div>
                </div>
                <div className=' text-white flex flex-col gap-2'>
                    <img className='w-[27rem] h-[20rem] rounded-xl' src="https://i.pinimg.com/564x/80/28/3d/80283db9eb96e21bc68d661dabb9e93e.jpg" alt="property_image" />
                    <div className='flex flex-col gap-2 p-2'>
                        <p className='text-3xl'>DLF Emporio</p>
                        <p>3BHK, Semi Furnished</p>
                        <p>Park, Auditorium, Gym, Pool</p>
                        <p className='font-bold'>Rent: Starts from ₹4,00,000</p>
                        <button className='btn btn-outline btn-success'>Book Now</button>
                    </div>
                </div>
                <div className=' text-white flex flex-col gap-2'>
                    <img className='w-[27rem] h-[20rem] rounded-xl' src="https://i.pinimg.com/564x/80/28/3d/80283db9eb96e21bc68d661dabb9e93e.jpg" alt="property_image" />
                    <div className='flex flex-col gap-2 p-2'>
                        <p className='text-3xl'>DLF Emporio</p>
                        <p>3BHK, Semi Furnished</p>
                        <p>Park, Auditorium, Gym, Pool</p>
                        <p className='font-bold'>Rent: Starts from ₹4,00,000</p>
                        <button className='btn btn-outline btn-success'>Book Now</button>
                    </div>
                </div>
                <div className=' text-white flex flex-col gap-2'>
                    <img className='w-[27rem] h-[20rem] rounded-xl' src="https://i.pinimg.com/564x/80/28/3d/80283db9eb96e21bc68d661dabb9e93e.jpg" alt="property_image" />
                    <div className='flex flex-col gap-2 p-2'>
                        <p className='text-3xl'>DLF Emporio</p>
                        <p>3BHK, Semi Furnished</p>
                        <p>Park, Auditorium, Gym, Pool</p>
                        <p className='font-bold'>Rent: Starts from ₹4,00,000</p>
                        <button className='btn btn-outline btn-success'>Book Now</button>
                    </div>
                </div>
                <div className=' text-white flex flex-col gap-2'>
                    <img className='w-[27rem] h-[20rem] rounded-xl' src="https://i.pinimg.com/564x/80/28/3d/80283db9eb96e21bc68d661dabb9e93e.jpg" alt="property_image" />
                    <div className='flex flex-col gap-2 p-2'>
                        <p className='text-3xl'>DLF Emporio</p>
                        <p>3BHK, Semi Furnished</p>
                        <p>Park, Auditorium, Gym, Pool</p>
                        <p className='font-bold'>Rent: Starts from ₹4,00,000</p>
                        <button className='btn btn-outline btn-success'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore