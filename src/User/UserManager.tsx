import React, { useState } from "react";
import PostList from "./PostList";
import UserProfile from "./UserProfile";
import "./Post.css";
import AddUser from "./AddUser";

const singleUser: User = {
  name: "Nina",
  age: 26,
  posts: [
    {
      title: "i love coding",
      text: "it works...sometimes",
      likes: 0
    }
  ]
};

const initialUsers: Array<User> = [
  {
    name: "Joshua",
    age: 20,
    posts: [
      {
        title: "I love coding",
        text: "Everything is working!!! :)",
        likes: 10
      },
      {
        title: "I hate coding",
        text: "Nothing works :(",
        likes: 277
      }
    ]
  },
  singleUser
];

/*
function User() {
  const [user, setUser] = useState(initialUsers);

  const addUser = (newUser: User) => {
    setUser([...user, newUser])
    console.log(user)
  }

  return (
    <>
    <div className="userProfile">
      <UserProfile user={user[0]} />
      <PostList user={user[0]} />
    </div>
      <AddUser addUser={addUser}/>
    </>
  );
}
*/

export default User;

function User() {
  const [user, setUser] = useState(singleUser);

  initialUsers.forEach(currentUser => {

    setUser(currentUser);
    return (
      <div className="userProfile">
        <UserProfile user={user} />
        <PostList user={user} />
      </div>
    );
  });

  return <></>;
}