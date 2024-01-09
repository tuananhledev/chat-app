import React from 'react'
import Navigation from '../components/Navigation'

const DefaultLayout = ({ children }) => {
   return (
      <div className='main-layout'>
         <Navigation />
         <div className='main-content'>
            {children}
         </div>
      </div>
   )
}

export default DefaultLayout