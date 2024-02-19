import React, { useState } from "react";
import Users from "./Users/Users";
import { Outlet } from "react-router-dom";
import NewUser from "./Newuser/NewUser";

const Home = () => {
  const [users, setUsers] = useState([
    { id: 101,  username: "Jewel hassan" },
    { id: 102,  username: "Robiul Islam " },
  ]);
  const handleDeleteUser = (id) => {
    const filterdUser = users.filter((user) => user.id !== id);
    setUsers(filterdUser);
  };

  const handlerAddnewUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };
  return (
    <div>
      <h1 className="text-5xl text-white">Custom add post</h1>
      <NewUser handlerAddnewUser={handlerAddnewUser} />
      <Users users={users} handleDeleteUser={handleDeleteUser} />
      <Outlet />
    </div>
  );
};

export default Home;
