import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const User = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    console.log("click");
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log("Deleted successfully");
          // Remove the user from the UI
          const remainingUsers = users.filter((user) => user._id !== id);
          setUsers(remainingUsers);
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div>
      <h2 className="text-3xl text-center">Users {loadedUsers.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Login</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user?.email}</td>
                <td>{user?.createAt}</td> 
                <td>{user?._id}</td>
                <td>
                  <button onClick={() => handleDelete(user._id)} className="btn">
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
