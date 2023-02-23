import { Tweet } from '../components/Tweet'
import { Header } from '../components/Header'
import { Divider } from '../components/Divider'
import { RouterProvider } from 'react-router-dom'
import {router} from "../routes"
import "./Timeline.css"

const tweets = [
  "first data",
  "teste",
  "New tweet"
]

export function Timeline(){
return(
  <main className="timeline">
  <Header title='Home'/>

  {/* <RouterProvider router={router}/> */}
  <form className="new-tweet-form">
    <label htmlFor="tweet">
      <img src="https://github.com/GuiDecker.png" alt="Guilherme Dev" />
      <textarea id='tweet' placeholder="What's happening"/>
    </label>
    <button type='submit'>Tweet</button>
  </form>
<Divider/>

{tweets.map(eachTweet=>{
  return <Tweet key={eachTweet} content={eachTweet}/>
})}

</main>
)
}