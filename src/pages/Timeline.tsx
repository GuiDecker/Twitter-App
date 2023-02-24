import { FormEvent, useState } from 'react'
import { Tweet } from '../components/Tweet'
import { Header } from '../components/Header'
import { Divider } from '../components/Divider'
import "./Timeline.css"

export function Timeline(){
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState(
 ["first data",
  "teste",
  "Deu certo"])

function createNewTweet(event: FormEvent){
event.preventDefault()
setTweets([newTweet, ...tweets])
setNewTweet('')
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
       value={newTweet}
      onChange={(event)=>{
        setNewTweet(event.target.value) 
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