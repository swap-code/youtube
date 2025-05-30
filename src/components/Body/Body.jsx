import React from 'react'
import './Body.scss';
import SideBar from './SideBar/SideBar';
import { Outlet } from 'react-router-dom';
const Body = () => {
  return (
    <div className='body'>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default Body
