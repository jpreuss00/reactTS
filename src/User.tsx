import React, { useState } from "react";
import PostList from "./PostList";

const initialUser: Array<User> = [
  {
    name: "Joshua",
    age: 20,
    posts: [
      {
        title: "i love coding",
        text: "everything is working!!!",
        likes: 10
      },
      {
        title: "i hate coding",
        text: "nothing works :(",
        likes: 277
      }
    ]
  }
];

function User() {
  const [user, setUser] = useState(initialUser);

  return (
    <div className="app">
      <PostList user={user} />
    </div>
  );
}

export default User;
