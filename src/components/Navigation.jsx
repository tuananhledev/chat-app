import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import { FaFacebookMessenger } from 'react-icons/fa6'
import { BsFillChatFill, BsShop, BsFillChatDotsFill, BsFillArchiveFill } from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'
import { CiMinimize1 } from 'react-icons/ci'
import { IoCloseSharp } from 'react-icons/io5'
import { BiExit } from 'react-icons/bi'
import { GrFormNext } from 'react-icons/gr'
import { Link } from 'react-router-dom';


import { auth } from '../firebase/config';
import { AuthContext } from '../Context/AuthProvider';
import { AppContext } from '../Context/AppProvider';

const Navigation = () => {

   const {
      user: { displayName, photoURL },
   } = React.useContext(AuthContext);
   const { clearState } = React.useContext(AppContext);



   const [openMessenger, setOpenMessenger] = useState(false);

   const toggleDropdown = () => {
      setOpenMessenger((prev) => !prev);
   };

   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const toggleDropdownAvatar = () => {
      setIsDropdownOpen((prev) => !prev);
   };


   const handleLoggout = () => {
      clearState();
      auth.signOut();
   }

   return (
      <div className='navigation'>
         <div className="row">
            <div className="background-column-menu col-auto min-vh-100 d-flex justify-content-between flex-column">
               <div>
                  <a className="text-decoration-none d-flex align-itemcenter" onClick={toggleDropdown}>
                     <div className="dropdown open">
                        <a className="text-decoration-none text-white p-2" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                           aria-expanded={openMessenger}>
                           <FaFacebookMessenger className='icon-menu' />
                        </a>
                        <div className={`dropdown-menu ${openMessenger ? 'show' : ''}`} aria-labelledby="triggerId">
                           <Link className="dropdown-item" href=""><GrFormNext className='icon-menu' />File</Link>
                           <Link className="dropdown-item" href=""><GrFormNext className='icon-menu' />View</Link>
                           <Link className="dropdown-item" href=""><GrFormNext className='icon-menu' />Help</Link>
                           <Link className="dropdown-item" href=""><CiMinimize1 className='icon-menu' />Minimize</Link>
                           <Link className="dropdown-item" href=""><IoCloseSharp className='icon-menu' />Close</Link>
                           <Link className="dropdown-item" href=""><BiExit className='icon-menu' />Exit</Link>
                        </div>
                     </div>
                  </a>
                  <hr className='text-secondary' />
                  <ul className='nav nav-pills flex-column'>
                     <li className="nav-item text-white">
                        <Link to='/' className='nav-item'>
                           <BsFillChatFill className='icon-menu' />
                           <span className='icon-name'>Chats</span>
                        </Link>
                     </li>
                     <li className="nav-item text-white">
                        <Link to='/marketplace' className='nav-item'>
                           <BsShop className='icon-menu' />
                           <span className='icon-name'>Marketplace</span>
                        </Link>
                     </li>
                     <li className="nav-item text-white">
                        <Link to='/requests' className='nav-item'>
                           <BsFillChatDotsFill className='icon-menu' />
                           <span className='icon-name'>Requests</span>
                        </Link>
                     </li>
                     <li className="nav-item text-white">
                        <Link to='/archived' className='nav-item'>
                           <BsFillArchiveFill className='icon-menu' />
                           <span className='icon-name'>Archived</span>
                        </Link>
                     </li>
                  </ul>
               </div>


               <div className="dropdown">
                  <a
                     className="text-decoration-none text-white p-3"
                     type="button"
                     id="avatarDropdown"
                     onClick={toggleDropdownAvatar}
                  >
                     <img src={photoURL} alt='' className='avatar' />
                  </a>
                  {isDropdownOpen && (
                     <div className="dropdown-menu show" aria-labelledby="avatarDropdown" style={{ top: 'auto', bottom: '100%' }}>
                        <Link to="" className='dropdown-item' onClick={handleLoggout}><AiFillSetting className='icon-menu' />Đăng xuất</Link>
                     </div>
                  )}
               </div>


            </div>
         </div>
      </div>
   )
}

export default Navigation;
