import React from 'react'

function Content() {
  return (
    <div className='px-[3rem] pt-[3rem]'>
        <div className='flex lg:flex-row flex-col-reverse gap-[6rem] justify-center items-center'>
            <img className='lg:w-1/3 lg:h-[35rem] rounded-xl border-2' src="https://i.pinimg.com/564x/31/bc/c2/31bcc2a5f2f4c520c6cc6eca5d80ebc6.jpg" alt="key" />
            <div>
                <p className='text-2xl lg:text-7xl lg:w-[40rem] text-center text-white font-semibold'>Our Continuos Focus and Innovation Are Driven By Our Mission To Simplify Individuals And Corporations.</p>
            </div>
        </div>
        <div className='pt-[3rem]'>
            <hr />
        </div>
    </div>
  )
}

export default Content