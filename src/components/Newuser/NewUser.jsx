import React, { useState } from "react";

const NewUser = ({handlerAddnewUser}) => {

  const [username, setUsername] = useState("");

  const handlerUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username: username, };
    handlerAddnewUser(newUser);
    setUsername("");
  };
  return (
    <div className="mt-10 flex items-center justify-center w-full">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          
          className="flex-1 p-2 rounded-md bg-white "
          onChange={handlerUsername}
          required
        />
        <button
          type="submit"
          className="border px-5 py-2 btn bg-secondary text-black font-bold"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default NewUser;
