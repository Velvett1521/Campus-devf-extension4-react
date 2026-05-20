import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

function LayoutPrincipal() {
  return (
    <div className="layout_twitter">
      <Header />
      <div className="twitter_main">
        <Sidebar />
        <main className="main_content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default LayoutPrincipal