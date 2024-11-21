import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/header'
import Footer from '../footer/footer'

const Layout = () => {

  return (
    <React.StrictMode>
      <div className='body'>
        <div className='content-container'>
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </React.StrictMode>
  )
}

export default Layout