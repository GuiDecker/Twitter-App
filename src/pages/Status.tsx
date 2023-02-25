import { FormEvent, KeyboardEvent, useEffect, useState } from "react"
import { Divider } from "../components/Divider"
import { Header } from "../components/Header"
import { Tweet } from "../components/Tweet"
import "./Status.css"

export function Status(){
const [newTweet, setNewTweet] = useState('')
const [answers, setAnswers] = useState([
  "First comment",
  "It makes sense",
  "Congratulations"
])

  function createNewTweet(event: FormEvent){
    event.preventDefault()
    setAnswers([newTweet, ...answers])
    setNewTweet('')
  }

  function handleShortCut(event: KeyboardEvent){
    // keyboard from react 🆙 \\
    if(event.key == "Enter" && (event.ctrlKey || event.metaKey)){
        setAnswers([newTweet, ...answers])
        setNewTweet('')
    }

  }
  console.log("RENDERIZOU")

  return(
    <main className="status">
    <Header title='Home'/>
    <Divider/>
    <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, repellat impedit optio consectetur atque dolore ipsam harum facere nostrum aspernatur cumque totam assumenda. Illum, deleniti eligendi. Maiores nam delectus enim."/>

    <form onSubmit={createNewTweet} className="answer-tweet-form">
      <label htmlFor="tweet">
        <img src="https://github.com/GuiDecker.png" alt="Guilherme Dev" />
        <textarea 
        id='tweet'
         placeholder="Tweet your answer"
         value={newTweet}
         onKeyDown={handleShortCut}
          onChange={(event)=>{
          setNewTweet(event.target.value)
          // console.log(event.target.value)
        }}/>
      </label>
      <button type='submit'>Answer</button>
    </form>
  
  {answers.map(answer=>{
    return <Tweet key={answer} content={answer}/>
  })}
  
  </main>
  )
}