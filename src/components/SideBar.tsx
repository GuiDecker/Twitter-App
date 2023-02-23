import { Bell, BookmarkSimple, DotsThreeCircle, FileText, Hash, House, User } from "phosphor-react"
import twiiterLogo from "../assets/logo-twitter.svg"
import "./Sidebar.css"

export function SideBar(){
  return(
    <aside className='sidebar'>
    <img className='logo' src={twiiterLogo} alt="logo" />
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
  )
}