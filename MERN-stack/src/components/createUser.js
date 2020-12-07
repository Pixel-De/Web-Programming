import React, { useState } from "react";
import axios from "axios";

const CreateUSer = () => {
  const [user, setUser] = useState({ username: "" });

  const onSubmit = () => {
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log("Error is :" + err));
  };

  return (
    <div>
      <h3>Create new USer </h3>
      <form onSubmit={onSubmit}>
        <label>Username: </label>
        <input
          type="text"
          onChange={(e) => setUser({ username: e.target.value })}
        />
        <input type="submit" value="Save user" />
      </form>
    </div>
  );
};
export default CreateUSer;
