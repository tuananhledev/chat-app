import React from 'react'
import DefaultLayout from './Layouts/DefaultLayout';
import Messager from './pages/Messager';
import MessageWindow from './components/MessageWindow';


import Login from './components/Login';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ChatRoom from './components/ChatRoom';
import AuthProvider from './Context/AuthProvider';
import AppProvider from './Context/AppProvider';
import AddRoomModal from './components/Modals/AddRoomModal';
import InviteMemberModal from './components/Modals/InviteMemberModal';


const App = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<ChatRoom />} />
          <Route path='/marketplace' element={<div>marketplace</div>} />
          <Route path='/requests' element={<div>requests</div>} />
          <Route path='/archived' element={<div>archived</div>} />
        </Routes>
        <AddRoomModal />
        <InviteMemberModal />
      </AppProvider>
    </AuthProvider>


    // <DefaultLayout>
    //   <Routes>
    //     <Route path='/' element={<Messager />}>
    //       <Route path='/message/:id' element={<MessageWindow />} />
    //     </Route>
    //     <Route path='/marketplace' element={<div>marketplace</div>} />
    //     <Route path='/requests' element={<div>requests</div>} />
    //     <Route path='/archived' element={<div>archived</div>} />
    //   </Routes>
    // </DefaultLayout>
  )
}

export default App
