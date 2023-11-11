import React from 'react'
import { CgFacebook, CgInstagram } from 'react-icons/cg'
import { HiEnvelope, HiPhone } from 'react-icons/hi2'
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-footer' > 
      <h3 className='bg-accent text-text-light text-xl relative top-0 w-full
      h-20 my-auto text-center leading-[4.8rem]' >Fake Electric</h3>
      <div className='flex flex-col justify-center sm:flex-row sm:mb-8' >
          <div className='flex flex-col justify-center' >
              <h4 className='text-text-light border-b-[2px] border-b-main
              max-w-[200px] my-8 mx-4' >Fake Electric LTD</h4>
              <div className='my-2 mx-4 flex text-footer-text items-center' >
                  <div className='flex justify-center items-center border border-main mr-2 w-[35px] h-[35px]' >
                    <HiPhone className='text-main h-full w-full p-2' />
                  </div>
                  <p>(250)-555-5555</p>
              </div>
              <div className='my-2 mx-4 flex text-footer-text items-center'>
                  <div className='flex justify-center items-center border border-main mr-2 w-[35px] h-[35px]'>
                    <a href="mailto:bennetthumphrey98@gmail.com">
                      <HiEnvelope className='text-main h-full w-full p-2' />
                    </a>
                  </div>
                  <a href="mailto:bennetthumphrey98@gmail.com">
                    <p>bennetthumphrey98<br/>@gmail.com</p>
                  </a>
              </div>
          </div>
          <div className='flex justify-center flex-col' >
              <h4 className='text-text-light border-b-[2px] border-b-main
              max-w-[200px] my-8 mx-4'>Social Media</h4>
              <div className='flex ml-4 pb-12' >
                  <div className='flex justify-center items-center bg-main ml-[0.2rem] w-[60px] h-[60px]'  >
                    <CgInstagram className='text-footer w-3/5 h-3/5' />
                  </div>
                  <div className='flex justify-center items-center bg-main ml-[0.2rem] w-[60px] h-[60px]' >
                    <CgFacebook className='text-footer w-3/5 h-3/5' />
                  </div>
                  <div className='flex justify-center items-center bg-main ml-[0.2rem] w-[60px] h-[60px]' >
                    <FaLinkedinIn className='text-footer w-3/5 h-3/5' />
                  </div>
              </div>
          </div>
      </div>
      <div className='text-gray-500 text-[0.7rem] py-6 px-4 bg-accent text-center' >
          <div className='flex flex-col mb-4' >
              <p>Website by Bennett Humphrey</p>
              <a href="mailto:bennetthumphrey98@gmail.com">
                <p>bennetthumphrey98@gmail.com</p>
              </a>
          </div>
          <p>Some copyright company 2023</p>
      </div>
  </footer>
  )
}

export default Footer