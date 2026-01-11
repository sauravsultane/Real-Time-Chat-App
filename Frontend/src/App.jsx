import React from 'react'
import { Route, Router, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import OnBoardingPage from './pages/OnBoardingPage'
import ChatPage from './pages/ChatPage'
import CallPage from './pages/CallPage'

const App = () => {
  return (
    <div className='bg-red-100 h-screen'>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/notification' element={<Notification/>} />
        <Route path='/onbording' element={<OnBoardingPage/>} />
        <Route path='/call' element={<CallPage/>} />
        <Route path='/chat' element={<ChatPage/>} />
      </Routes>
    </div>
  )
}

export default App
