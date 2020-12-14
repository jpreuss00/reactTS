import React from 'react';

const post = ({title, text, likes}: Post) => {
    return(
        <div>
            <h3>{title}</h3>
            <p>{text}</p>
            <h3>{likes}</h3>
        </div>
    )
}

export default post;