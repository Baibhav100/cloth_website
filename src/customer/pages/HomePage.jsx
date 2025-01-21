import React from 'react'
import MainCarousal from '../components/MainCarousal/MainCarousal'
import HomeSectionCarousal from '../components/HomeSectionCarousal/HomeSectionCarousal'
import { mens_kurta } from '../../data/mens_kurta'

const HomePage = () => {
  return (
    <div>
     <MainCarousal/>
     <div className='space-y-8'>
      <HomeSectionCarousal data={mens_kurta} section={"Men's Kurta"}/>
      <HomeSectionCarousal data={mens_kurta} section={"Men's Shoes"}/>
      <HomeSectionCarousal data={mens_kurta} section={"Men's Shoes"}/>
      <HomeSectionCarousal data={mens_kurta} section={"Men's Shoes"}/>
     </div>
    </div>
  )
}

export default HomePage
