import React, { ChangeEvent, FormEvent, useState } from "react";

const userForm = {
    name: "",
    age: 0,
    posts: [
      {
        title: "",
        text: "",
        likes: 0
      }
    ]
}

const AddUser = ({ addUser }: Prop) => {

    const [newUser, setNewUser] = useState(userForm);
    
    const handleChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setNewUser({
            ...newUser,
            name: e.target.value
        })
    }

    const handleChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setNewUser({
            ...newUser,
            age: Number(e.target.value)
        })
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addUser(newUser);
        setNewUser(userForm);
      };

  return (
    <form>
      <label>Name</label>
      <input type="text" value={newUser.name} onChange={handleChangeUser}></input>

      <label>Alter</label>
      <input type="text" value={newUser.age} onChange={handleChangeAge}></input>

      <button type="submit" onClick={handleSubmit}>User erstellen</button>
    </form>
  );
};

export default AddUser;
