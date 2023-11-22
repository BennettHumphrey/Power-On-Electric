import React, { useState } from 'react'
import { headerLogo } from '../assets/data'
import Modal from './Modal'

const Banner = () => {

const [modalOpen, setModalOpen] = useState(false)


  return (
    <div>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
      <div className='bg-[url(/Seattle-Rainier-Day.jpg)] h-[440px]
                      bg-cover bg-fixed flex flex-col gap-3
                      lg:flex-row lg:justify-center lg:gap-40
                      xl:h-[65vw] max-h-[85vh]'>
        <div className='flex justify-center items-center my-6' >
          <img
            src={headerLogo}
            className='h-[240px] w-[240px] z-50 pointer-events-none
                      lg:h-[300px] lg:w-[300px]'
          />
          <div className='rounded-full bg-[#ffffffda] absolute z-[40]
                          translate-x-[1px] translate-y-[-3px]
                          h-[212px] w-[212px] m-auto group
                          lg:bg-[#ffffffee] lg:h-[264px] lg:w-[264px]' >
            <div className='rounded-xl bg-[#ffffffda] absolute z-[35]
                            duration-300
                            h-[35px] w-[30px] lg:h-[40px] lg:w-[30px]
                            translate-x-[91px] translate-y-[47px]
                            lg:translate-x-[117px] lg:translate-y-[61px]
                            group-hover:bg-yellow-300' />
          </div>
        </div>
        <div className='flex flex-col gap-8 lg:h-[200px] my-auto relative top-[-30px]'>
          <p className='text-main bg-bubble text-center text-xl font-bold rounded-2xl
                          w-[80%] max-w-[300px] m-auto p-1 font-serif lg:max-w-[360px]
                          px-3' >
            To contact an electrician call
            206-466-7202 now!
          </p>
          <button className='flex justify-center items-center bg-main w-[10rem]
              h-8 mx-auto rounded-full text-center transition duration-700
              border border-text hover:scale-110 hover:bg-company hover:text-white z-10' 
              onClick={() => setModalOpen(true)}>
              Request a Service!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner