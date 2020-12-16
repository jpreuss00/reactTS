import React from "react";
import Post from "./Post";
import "./Post.css";

const PostList = ({ user }: Props) => {
  return (
    <div className="postList">
      {user.posts.map(posts => {
        return (
          <Post title={posts.title} text={posts.text} likes={posts.likes} />
        );
      })}
    </div>
  );
};

export default PostList;
