import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"
import "./tweet.css"


export function Tweet(){
  return(
    <a href="%" className="tweet">
      <img src="https://github.com/GuiDecker.png" alt="Guilherme Dev" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Gui Dev</strong>
          <span>@Guilher17066177</span>
        </div>
        <p>
        welcome to twitter
        <br />
      go a head, try it out
      <br />
      step 1.  say you like something, anything doesn't matter<br />
      step 2. someone will tell you its harmful because you didn't preface it with their point of view<br />
      step 3. you L + ratio them<br />
      step 4. ...<br />
      step 5. do it again<br />
        </p>
        <div className="tweet-content-footer">
          <button type="button"><ChatCircle/>20</button>
          <button type="button" className="ArrowsClockwiseIcon"><ArrowsClockwise/></button>
          <button type="button" className="HeartIcon"><Heart/></button>
        </div>
      </div>
    </a>
  )
}

