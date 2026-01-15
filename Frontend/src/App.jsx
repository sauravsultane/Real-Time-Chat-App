import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import OnBoardingPage from './pages/OnBoardingPage'
import ChatPage from './pages/ChatPage'
import CallPage from './pages/CallPage'
import NotificationsPage from './pages/NotificationsPage'
import { Toaster } from 'react-hot-toast'
import { useQuery } from '@tanstack/react-query'
import {axiosInstance} from "./lib/axios.js"

const App = () => {

  //Tanstack Query 
  const {data:authData,isLoading,error} = useQuery({queryKey:["authUser"],
    queryFn: async()=>{
      const res = await axiosInstance.get("/auth/me");
      return res.data;
    },
    retry:false,
  });
  const authUser = authData;


  return (
    <div className='h-screen'>
      <Routes>
        <Route path='/' element={authUser?<HomePage/>: <Navigate to="/login"/>} />
        <Route path='/signup' element={!authUser?<SignUpPage/>:<Navigate to="/"/>} />
        <Route path='/login' element={!authUser?<LoginPage/>:<Navigate to="/"/>} />
        <Route path='/notification' element={authUser?<NotificationsPage/>: <Navigate to="/login"/>} />
        <Route path='/onbording' element={authUser?<OnBoardingPage/>: <Navigate to="/login"/>} />
        <Route path='/call' element={authUser?<CallPage/>: <Navigate to="/login"/>} />
        <Route path='/chat' element={authUser?<ChatPage/>: <Navigate to="/login"/>} />
      </Routes>
      <Toaster/>
      
    </div>
  )
}

export default App
