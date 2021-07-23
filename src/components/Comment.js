import { useState } from 'react'
function Comment({ comment, removeComment, video }) {
    
    const [upvotes, setUpvotes] = useState(0)
    const [downvotes, setDownvotes] = useState(0)
   

    function upvoteClick() {
        setUpvotes((upvotes) => upvotes + 1)
    }

    function downvoteClick() {
        setDownvotes((downvotes) => downvotes + 1)
    }

    
    return (
        <>
            <h3>{comment.user}</h3>
            <h4>{comment.comment}</h4>
            <button onClick={upvoteClick}>Wow! +{upvotes}</button>
            <button onClick={downvoteClick}>Boo! +{downvotes}</button>
            <button onClick={() => removeComment(comment.id)}>Remove Comment</button>
        </>
    )
}

export default Comment