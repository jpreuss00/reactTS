import React from 'react';
import Post from './Post'

const postList = (user: User) => {
    return(
        <div>
            {user.posts.map(posts =>{
                return (
                    <Post title={posts.title} text={posts.text} likes={posts.likes}/>
                )
            })}
        </div>
    )
}

export default postList;