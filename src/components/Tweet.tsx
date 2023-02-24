import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"
import { Link } from "react-router-dom"
import "./tweet.css"

interface TweetProps{
  content: string
}

export function Tweet(props: TweetProps){
  return(
    <Link to="/status" className="tweet">
      <img src="https://github.com/GuiDecker.png" alt="Guilherme Dev" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Gui Dev</strong>
          <span>@Guilher17066177</span>
        </div>
       <p>{props.content}</p>
        <div className="tweet-content-footer">
          <button type="button"><ChatCircle/>20</button>
          <button type="button" className="ArrowsClockwiseIcon"><ArrowsClockwise/></button>
          <button type="button" className="HeartIcon"><Heart/></button>
        </div>
      </div>
    </Link>  
  )
}

