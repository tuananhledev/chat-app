import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
   return (
      <div className='sidebar'>
         <Link to='/message/1' className='sidebar-item'>1</Link>
         <Link to='/message/2' className='sidebar-item'>2</Link>
         <Link to='/message/3' className='sidebar-item'>3</Link>
         <Link to='/message/4' className='sidebar-item'>4</Link>
         <Link to='/message/5' className='sidebar-item'>5</Link>
      </div>
   )
}

export default Sidebar