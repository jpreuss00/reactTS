import React from "react";
import User from "./User";

function UserProfile({ user }: Props) {
  return <User name={user.name} age={user.age} />;
}

export default UserProfile;
