import React from 'react'
import Header from '../pages/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../pages/Footer'

const UserLayout = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default UserLayout