import Comment from "./Comment"
import { useState } from "react"

function CommentList({ comments }) {
    
    const [hideComment, setHide] = useState(false)

    const [userState, setUser] = useState('')

    const [commentRemove, setRemove] = useState([comments])


    function hideComments() {
        setHide(!hideComment)
    }

    function userSearch (e) {
        e.preventDefault();
        if(e.target.john.value) {
           setUser(e.target.john.value)
        }

    }
    
    function displayComments() {
        return (
           <> 
                <h1>{comments.length} Comments</h1>
                <form onSubmit={userSearch}>
                    <input type="text" name="john"></input>
                    <input type="submit"></input>
                 </form> 
                <br />
                {commentMap}
            </>
        )
    }

    let userFilter = comments.filter(comment => {
        if (userState === '') {
            return true;
        }
        else {
            return comment.user === userState
        }
    })

    let commentMap = userFilter.map(comment => {
       return <Comment comment={comment} removeComment={removeComment} />
    })

    function removeComment (id) {
        let newComments = comments.filter(comment => comment.id != id) 
        setRemove(newComments)
        return (
            <li>{newComments.id}</li>
        )
    }

    return (
        <>
            <br />
            <button onClick={hideComments}>{hideComment ? 'Show Comments': 'Hide Comments'}</button>
            {hideComment ? null : displayComments()}
            <br />
        </>
    )
}

export default CommentList