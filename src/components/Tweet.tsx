import { useState } from "react"

interface TweetProps{
  user: string
  children: string
  likes?: number
}

export function Tweet(props: TweetProps){

  const [like,SetLike] = useState(0)
  return(
    <div className="tweet" style={{borderRadius: 8}}>
      <strong><h1>{props.user}</h1></strong>
      <p>{props.children}</p >
      <button onClick={()=> SetLike(like + 1)}> Like </button>
<h4>Você tem {like} Likes</h4>
      </div>
  )
}

