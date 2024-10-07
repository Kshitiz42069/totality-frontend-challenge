import React from 'react'

function Hero() {
  return (
    <div className='relative'>
        <div className='flex lg:px-6 py-3 rounded-2xl w-screen'>
            <img className='w-1/3 rounded-l-xl' src="https://i.pinimg.com/564x/15/23/f3/1523f34244010d028e7eeefc5eeb58ff.jpg" alt="" />
            <img className='w-1/3' src="https://i.pinimg.com/564x/91/8c/a8/918ca83dbdb02504bfbbff782ed80010.jpg" alt="" />
            <img className='w-1/3 rounded-r-xl' src="https://i.pinimg.com/564x/dd/1f/e9/dd1fe90d9c9b89a814568ec877e6d365.jpg" alt="" />
        </div>
        <div className='absolute text-white lg:top-[6rem] top-[4rem] left-[1rem] lg:left-[3rem]'>
            <p className='lg:text-9xl text-4xl lg:w-[45rem] w-[20rem] font-bold'>Unlock your Perfect Place</p>
        </div>
        <div className='bg-white bg-opacity-70 absolute px-3 py-1 rounded-xl right-6 bottom-3 lg:text-4xl font-bold'>
            <p>Find your best Place</p>
        </div>
    </div>
  )
}

export default Hero