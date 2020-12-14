import React, { Component, useState } from "react";
import "./tweet.css";

type Tweet = {
  name: string;
  text: string;
  likes: number;
};

const Tweets = ({ name, text, likes }: Tweet) => {
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{text}</p>
      <h3>{likes}</h3>
    </div>
  );
};

function Tweet({name, text, likes}: Tweet) {

    

  return (
    <Tweets name={name} text={text} likes={likes}/>
  )
}

function Tweet2({name, text, likes}: Tweet) {
    return (
        <div className="tweet">
        <h3>{name}</h3>
        <p>{text}</p>
        <h3>{likes}</h3>
      </div>
    )
  }

  function App2() {
    // name of state //function that changes the value
    const [isRed, setRed] = useState(false);
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    return(
        <>
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
        </>
    )

  }
  

export default App2;