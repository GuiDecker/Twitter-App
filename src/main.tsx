import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css"
import { Bell, BookmarkSimple, DotsThreeCircle, FileText, Hash, House, Sparkle, User, } from "phosphor-react"

import twitterlogo from "./assets/logo-twitter.svg"
import { Tweet } from './components/Tweet'


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
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle />
          </div>
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/GuiDecker.png" alt="Guilherme Dev" />
              <textarea id='tweet' placeholder="What's happening"/>
            </label>
            <button type='submit'>Tweet</button>
          </form>
          <div className="divider"/>
        </main>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
      </div>
    </div>
  </React.StrictMode>,
)
