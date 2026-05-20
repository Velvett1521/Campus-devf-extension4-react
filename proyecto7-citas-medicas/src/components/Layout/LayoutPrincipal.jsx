import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function LayoutPrincipal() {
  return (
    <div className="layout_container">
      <Header />
      <main className="main_content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default LayoutPrincipal