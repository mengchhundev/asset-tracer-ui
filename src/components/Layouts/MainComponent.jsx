import React from 'react'
import SidebarComponent from './SidebarComponent'
import NavbarComponent from './NavbarComponent'
import { Outlet } from 'react-router-dom'
import ContentCompont from './ContentCompont'

export default function MainComponent() {
  return (
    <div className='flex flex-col h-screen overflow-hidden bg-[#F7F8FC]'>
      <NavbarComponent />
      <div className="flex flex-row flex-grow overflow-y-scroll">
        <SidebarComponent />
        <div className="px-8 md:px-10 lg:px-12 3xl:px-14 py-8 flex-grow overflow-y-scroll">
          <ContentCompont />
        </div>
      </div>
    </div>
  )
}
