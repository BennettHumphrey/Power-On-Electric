import React from 'react'
import Nav from './components/Nav'
import Banner from './components/Banner'
import InfoSection from './components/InfoSection'
import BubblesSection from './components/BubblesSection'
import Footer from './components/Footer'
import { about, services } from './assets/data'


// TODO:
// Move to Vercel



function App() {

  return (
    <>
      <Nav  />
      <Banner  />
      <InfoSection href={services.href} header = {services.header} />
      <BubblesSection bubbles = {services.bubbles} img = {services.img} imgPos={services.imgPos} />
      <InfoSection href={services.href} header = {about.header} body = {about.body} />
      <BubblesSection bubbles = {about.bubbles} img = {about.img} />
      <Footer  />
    </>

  )
}

export default App
