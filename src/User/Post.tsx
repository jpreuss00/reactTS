import { useState } from "react";
import "./Post.css";

const Post = ({ title, text, likes }: Post) => {
  const [count, setCount] = useState(likes);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="post">
      <h3>{title}</h3>
      <p>{text}</p>
      <button className="likes" onClick={increment}>
        {count}
      </button>
    </div>
  );
};

export default Post;
