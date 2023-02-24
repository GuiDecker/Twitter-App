import { Bell, BookmarkSimple, DotsThreeCircle, FileText, Hash, House, User } from "phosphor-react"
import { Link, NavLink } from "react-router-dom"
import twiiterLogo from "../assets/logo-twitter.svg"
import "./Sidebar.css"

export function SideBar(){
  return(
    <aside className='sidebar'>
    <img className='logo' src={twiiterLogo} alt="logo" />
    <nav className='main-navigation'>
      {/* By default NavLink have a (active className) */}
      <NavLink to={"/"} >
        <House weight='fill'/>
        Home
      </NavLink>
      <Link to="/">
        <Hash/>
        Explore</Link>
      <Link to="/">
        <Bell/>
        Notifications</Link>
      <Link to="/">
        <BookmarkSimple/>
        Messages</Link>
      <Link to="/">
        <FileText/>
        Lists</Link>
      <Link to="/">
        <User/>
        Profile</Link>
      <Link to="/">
        <DotsThreeCircle/>
        More</Link>
    </nav>
    <button className='newTweet' type='button'>
      Tweet
      </button>
  </aside>
  )
}