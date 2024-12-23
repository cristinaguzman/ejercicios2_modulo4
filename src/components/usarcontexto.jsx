import React, { useContext } from "react";
import { UserContext } from "./UserProvider";

const UserInfo = () => {
  const { user } = useContext(UserContext);

  return <p>Usuario: {user.name} - Rol: {user.role}</p>;
};

export default UserInfo;
