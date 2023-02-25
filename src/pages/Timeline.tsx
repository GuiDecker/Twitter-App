  import { FormEvent, KeyboardEvent, useState } from 'react'
  import { Tweet } from '../components/Tweet'
  import { Header } from '../components/Header'
  import { Divider } from '../components/Divider'
  import "./Timeline.css"

  export function Timeline(){
    const [newAnswer, setNewAnswer] = useState('')
    const [tweets, setTweets] = useState(
  ["first data",
    "testing",
    "It worked"])

  function createNewTweet(event: FormEvent){
  event.preventDefault()
  setTweets([newAnswer, ...tweets])
  setNewAnswer('')
  }

  function handleShortCut(event: KeyboardEvent){
    if(event.key === "Enter" && (event.ctrlKey || event.metaKey)){
      setTweets([newAnswer, ...tweets])
      setNewAnswer('')
    }
    // console.log(event.key)
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
        value={newAnswer}
        onKeyDown={handleShortCut}
        onChange={(event)=>{
          setNewAnswer(event.target.value) 
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