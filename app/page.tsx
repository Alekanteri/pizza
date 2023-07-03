'use client'
import React, {FC} from 'react'
import Hero from './components/hero'
import Services from './components/services'

const HomePage: FC = () => {
  return (
      <div>
        <Hero/>
        <Services/>
      </div>
  )
}
export default HomePage