import React from 'react'
import Navbar from '../ui/organisms/Navbar'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='min-h-screen flex flex-col justify-center items-center p-20 gap-5'>
      <Outlet />
    </div>
    </div>
  )
}

export default DefaultLayout
