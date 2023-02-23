import { Divider } from "../components/Divider"
import { Header } from "../components/Header"
import { Tweet } from "../components/Tweet"

const answers = [
  "Concordo...",
  "Olha, faz sentido",
  "Parabens pelo sucesso"
]

export function Status(){
  return(
    <main className="status">
    <Header title='Home'/>
    <Divider/>
    <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, repellat impedit optio consectetur atque dolore ipsam harum facere nostrum aspernatur cumque totam assumenda. Illum, deleniti eligendi. Maiores nam delectus enim."/>

    <form className="answer-tweet-form">
      <label htmlFor="tweet">
        <img src="https://github.com/GuiDecker.png" alt="Guilherme Dev" />
        <textarea id='tweet' placeholder="Tweet"/>
      </label>
      <button type='submit'>Answer</button>
    </form>
  
  {answers.map(answer=>{
    return <Tweet key={answer} content={answer}/>
  })}
  
  </main>
  )
}