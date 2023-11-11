import React from 'react'
import { CgFacebook, CgInstagram } from 'react-icons/cg'
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-company' > 
      <h3 className='bg-footer text-text-light text-xl relative top-0 w-full
      h-20 my-auto text-center leading-[4.8rem]' >Power On Electric</h3>
      <div className='flex flex-col justify-center sm:flex-row sm:mb-8' >
          <div className='flex flex-col justify-center' >
              <h4 className=' font-bold text-footer-text border-b-[2px] border-b-main
              max-w-[200px] mt-8 mx-4' >Power On Electric LTD</h4>
              <div className='my-2 mx-4 flex text-footer-text items-center' >
                  <div className='flex justify-center items-center border border-main mr-2 w-[35px] h-[35px]' >
                    <HiMapPin className='text-main h-full w-full p-2' />
                  </div>
                  <p>123 fake street<br/>Sumner, WA</p>
              </div>
              <div className='my-2 mx-4 flex text-footer-text items-center' >
                  <div className='flex justify-center items-center border border-main mr-2 w-[35px] h-[35px]' >
                    <HiPhone className='text-main h-full w-full p-2' />
                  </div>
                  <p>206-466-7202</p>
              </div>
              <div className='my-2 mx-4 flex text-footer-text items-center'>
                  <div className='flex justify-center items-center border border-main mr-2 w-[35px] h-[35px]'>
                    <a href="mailto:Poweronelectric23@gmail.com">
                      <HiEnvelope className='text-main h-full w-full p-2' />
                    </a>
                  </div>
                  <a href="mailto:Poweronelectric23@gmail.com">
                    <p>Poweronelectric23<br/>@gmail.com</p>
                  </a>
              </div>
          </div>


          

              {/* Social Media div */}


          <div className='flex justify-center flex-col' >
              <h4 className=' font-bold text-footer-text border-b-[2px] border-b-main
              max-w-[200px] mt-8 mb-8 mx-4 sm:mb-[71px]'>Social Media</h4>
              <div className='flex ml-4 pb-12' >
                  <div className='flex justify-center items-center bg-main ml-[0.2rem] w-[60px] h-[60px]'  >
                    <CgInstagram className='text-company w-3/5 h-3/5' />
                  </div>
                  <div className='flex justify-center items-center bg-main ml-[0.2rem] w-[60px] h-[60px]' >
                    <CgFacebook className='text-company w-3/5 h-3/5' />
                  </div>
                  <div className='flex justify-center items-center bg-main ml-[0.2rem] w-[60px] h-[60px]' >
                    <FaLinkedinIn className='text-company w-3/5 h-3/5' />
                  </div>
              </div>
          </div>

          
      </div>
      <div className='text-gray-500 text-[0.7rem] py-4 px-4 bg-footer text-center' >
      <div className='flex flex-col  overflow-hidden' >
              <p>Website by Bennett Humphrey</p>
              <a 
                className='hover:text-orange-400 duration-500 hover:scale-125' 
                href="https://bennetthumphrey.com" target="_blank">
                <p>bennetthumphrey.com</p>
              </a>
          </div>
          {/* <p>Some copyright company 2023</p> */}
      </div>
  </footer>
  )
}

export default Footer