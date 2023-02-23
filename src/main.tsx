import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css" 
import { SideBar } from './components/SideBar'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
    <SideBar/>
      <div className='content'>
      <RouterProvider router={router}/>
      </div>
    </div>
  </React.StrictMode>,
)
