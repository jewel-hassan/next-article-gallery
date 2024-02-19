import React from "react";

const User = ({ user, handleDeleteUser }) => {
  const { id, username } = user;
  const handleDelete = (id) => {
    handleDeleteUser(id);
  };
  return (
    <article className="bg-orange-400 text-3xl font-bold text-white p-10 rounded-xl leading-10 relative h-60">
      <h2>
        <span className="text-green-600"> Id:</span>
        {id}
      </h2>

      <h4>
        <span className="text-green-600">Name:</span>
        {username}
      </h4>
      <button
        className="border px-5 py-2 rounded-md btn btn-secondary absolute right-10 mt-10"
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default User;
