import { FormEvent, useState } from 'react'
import { Tweet } from '../components/Tweet'
import { Header } from '../components/Header'
import { Divider } from '../components/Divider'
import "./Timeline.css"

let newTweet = ""
export function Timeline(){
  const [tweets, setTweets] = useState(
 ["first data",
  "teste",
  "New tweet"])

function createNewTweet(event: FormEvent){
event.preventDefault()
setTweets([newTweet,...tweets])
}

return(
  <main className="timeline">
  <Header title='Home'/>

  {/* <RouterProvider router={router}/> */}
  <form onSubmit={createNewTweet} className="new-tweet-form">
    <label htmlFor="tweet">
      <img src="https://github.com/GuiDecker.png" alt="Guilherme Dev" />
      <textarea 
      id='tweet'
       placeholder="What's happening" 
      onChange={(event)=>{
        newTweet = event.target.value
      }}/>
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