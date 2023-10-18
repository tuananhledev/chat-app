import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Messager = () => {
   return (
      <>
         <Sidebar />
         <div className='messager-main'>
            <Outlet />
         </div>
      </>
   )
}

export default Messager