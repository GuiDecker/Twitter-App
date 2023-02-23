import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css"
 
import { Tweet } from './components/Tweet'
import { SideBar } from './components/SideBar'
import { Header } from './components/Header'
import { Divider } from './components/Divider'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
    <SideBar/>
      <div className='content'>
        <main className="timeline">
          <Header title='Home'/>
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/GuiDecker.png" alt="Guilherme Dev" />
              <textarea id='tweet' placeholder="What's happening"/>
            </label>
            <button type='submit'>Tweet</button>
          </form>
<Divider/>
        </main>
          <Tweet/>
          {/* <Tweet/>
          <Tweet/>
          <Tweet/> */}
      </div>
    </div>
  </React.StrictMode>,
)
