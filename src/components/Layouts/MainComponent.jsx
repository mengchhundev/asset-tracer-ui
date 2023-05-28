import React from 'react'
import SidebarComponent from './SidebarComponent'
import NavbarComponent from './NavbarComponent'
import { Outlet } from 'react-router-dom'
import ContentCompont from './ContentCompont'

export default function MainComponent() {
  return (
    <div className='flex flex-col h-screen overflow-hidden bg-[#F7F8FC]'>
      <NavbarComponent />
      <div class="flex flex-row flex-grow overflow-y-scroll">
        <SidebarComponent />
        <div className="md:p-5 flex-grow overflow-y-scroll">
          <ContentCompont />
        </div>
      </div>
    </div>
       // <div className="min-h-screen flex flex-col bg-[#F7F8FC] overflow-hidden">
    //   <NavbarComponent />
    //   <div className="flex flex-row h-[92vh]">
    //     <SidebarComponent />
    // <div className="overflow-y-scroll md:p-5 w-full h-[92vh]">
    //   <ContentCompont/>
    // </div>
    //   </div> 
    // </div>
  )
}
