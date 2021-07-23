import Button from "./Button"
import { useState } from "react"

function VideoInfo({ video }) {

    const [likes, setLike] = useState(video.upvotes)

    const [dislikes, setDislike] = useState(video.downvotes)

   function clickLike() {
       setLike((likes) => likes + 1)
   }

   function clickDislike(){
       setDislike((dislikes) => dislikes + 1)
   }


    
    return (
        <>
            <h2>{video.title}</h2>
            <small>{video.views} | Uploaded: {video.createdAt}</small>
            <br />
            <br />
            <button onClick={clickLike}>👍 {likes}</button>
            <button onClick={clickDislike}>👎 {dislikes}</button>
            <br />
        </>
    )
}

export default VideoInfo