import React from 'react'
import { logo } from '../assets/data'

const Banner = () => {




  return (
    <div className='bg-[url(/Seattle-Rainier-Day.jpg)] h-[440px]
                    bg-cover flex flex-col gap-[5rem]
                    lg:flex-row lg:justify-around'>
      <div className='flex justify-center items-center my-6' >
        <img  
          src={logo}
          className='h-[100px] w-[100px]'
        />
      </div>
      <div className='flex flex-col gap-8 lg:h-[200px] my-auto'>
        <p className='text-main bg-bubble text-center text-xl font-bold rounded-2xl
                        w-[80%] max-w-[300px] m-auto p-1 font-serif lg:max-w-[360px]' >
          To contact an electrician call
          250-555-5555 now!
        </p>
        <button className='flex justify-center items-center bg-main w-[10rem]
            h-8 my-[2%] mx-auto rounded-full text-center transition duration-700
            border border-dark hover:scale-110 hover:bg-slate-300' >
            Request a Service!
        </button>
      </div>
    </div>
  )
}

export default Banner