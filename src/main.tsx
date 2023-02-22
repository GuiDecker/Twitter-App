import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css"
import { Bell, BookmarkSimple, DotsThreeCircle, FileText, Hash, House, User, } from "phosphor-react"

import twitterlogo from "./assets/logo-twitter.svg"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <aside className='sidebar'>
        <img className='logo' src={twitterlogo} alt="logo" />
        <nav className='main-navigation'>
          <a className='active' href="">
            <House weight='fill'/>
            Home
          </a>
          <a href="">
            <Hash/>
            Explore</a>
          <a href="">
            <Bell/>
            Notifications</a>
          <a href="">
            <BookmarkSimple/>
            Messages</a>
          <a href="">
            <FileText/>
            Lists</a>
          <a href="">
            <User/>
            Profile</a>
          <a href="">
            <DotsThreeCircle/>
            More</a>
        </nav>
        <button className='newTweet' type='button'>
          Tweet
          </button>
      </aside>
      <div className='content'>
        content
      </div>
    </div>
  </React.StrictMode>,
)
