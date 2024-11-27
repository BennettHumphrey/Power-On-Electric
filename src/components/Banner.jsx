import React, { useState } from 'react'
import { headerLogo } from '../assets/data'
import Modal from './Modal'

const Banner = () => {

const [modalOpen, setModalOpen] = useState(false)


  return (
    <div>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
      <div className='
                      bg-[url(/Seattle-Rainier-Day-600.webp)] 
                      md:bg-[url(/Seattle-Rainier-Day-900.webp)] 
                      lg:bg-[url(/Seattle-Rainier-Day-1200.webp)] 
                      xl:bg-[url(/Seattle-Rainier-Day-1920.webp)] 
                      h-[440px]
                      bg-cover bg-fixed flex flex-col gap-3
                      lg:h-[600px] h-xs:h-[500px]
                      max-h-[85vh] h-xs:max-h-[105vh]'>
        <div className='flex justify-center items-center my-6 h-sm:mt-2 h-xs:-mb-3' >
          <img
            src={headerLogo}
            alt='Logo'
            width={600}
            height={400}
            className='h-[240px] w-[240px] z-50 pointer-events-none
                      lg:h-[300px] lg:w-[300px]'
          />
          <div className='rounded-3xl bg-[#ffffffda] absolute z-[40]
                          translate-x-[1px] translate-y-[-20px]
                          h-[212px] w-[212px] m-auto group
                          lg:bg-[#ffffffee] lg:h-[264px] lg:w-[264px]' >


                                                        {/* translate-x-[91px] translate-y-[47px]
                                                        lg:translate-x-[117px] lg:translate-y-[61px] */}
            <div className='rounded-xl bg-[#ffffffda] absolute z-[35]
                            duration-300
                            h-[35px] w-[30px] lg:h-[40px] lg:w-[30px]
                            

                            
                            translate-x-[87px] translate-y-[75px]
                            lg:translate-x-[114px] lg:translate-y-[90px]

                            group-hover:bg-yellow-300' />
          </div>
        </div>
        <div className='flex flex-col gap-4 h-sm:gap-1 md:gap-6 lg:h-[200px] my-auto relative top-[-30px]'>
          <p className='text-white bg-[#00000040] text-center h-sm:text-sm text-xl md:text-2xl font-extrabold rounded-2xl
                          w-[80%] max-w-[300px] m-auto p-1 font-serif lg:max-w-[360px]
                          px-3' >
            {'To contact an electrician call '} 
            <a href='tel:+12064667202' className='underline'>206-466-7202</a> now!
          </p>
          <button className='flex justify-center items-center bg-main w-[10rem]
              h-8 h-xs:h-5 h-xs:w-[8.5rem] mx-auto rounded-full text-center transition duration-700
              border border-text hover:scale-110 hover:bg-company hover:text-white z-10 h-xs:text-sm' 
              onClick={() => setModalOpen(true)}>
              Request a Service!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner