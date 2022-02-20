import { user } from "../../api/api.js";
import axios from "axios";
import { useState } from "react";

function AddUser() {
  const [name, setName] = useState("");
  const onSubmit = () => {
    console.log(name);
    axios
      .post(user, {
        name: name,
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <h3>Add User</h3>
      <form onSubmit={onSubmit}>
        <label>Enter User Name : </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default AddUser;
