import React from 'react'
import Post from './Post'

type Props = {
    user: Array<User>
}

const PostList = ({user}: Props) => {
    return(
        <div>
            {user[0].posts.map(posts =>{
                return (
                    <Post title={posts.title} text={posts.text} likes={posts.likes}/>
                )
            })}
        </div>
    )
}   

export default PostList;