import axios from "axios";
import { useEffect, useState } from "react";
import { user } from "../../api/api";
import "./Users.css";

const Users = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [showModifyBox, setShowModifyBox] = useState(false);

  let [sln] = useState(1);
  useEffect(() => {
    axios.get(user).then((res) => {
      setItems(res.data);
    });
  }, []);

  function deleteUser(item) {
    axios.delete(`${user}/${item}`).then((res) => {
      window.location.reload();
    });
  }

  function updateUser(item) {
    setId(item._id);
    setName(item.name);
    setShowModifyBox(true);
  }
  function onSubmit() {
    axios
      .put(user, {
        id: id,
        name: name,
      })
      .then((res) => {
        setShowModifyBox(false);
        console.log(res);
      });
  }
  return (
    <div>
      <h2>Users</h2>
      {items.length === 0 ? (
        <h2>No data yet</h2>
      ) : (
        <table>
          <thead>
            <tr>
              <td>Sl No</td>
              <td>User Name</td>
              <td>Delete</td>
              <td>Modify</td>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td>{sln++}</td>
                  <td>{item.name}</td>
                  <td>
                    <button onClick={() => deleteUser(item._id)}>delete</button>
                  </td>
                  <td>
                    <button onClick={() => updateUser(item)}>modify</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {showModifyBox && (
        <form onSubmit={onSubmit}>
          <label>Enter Updated Name : </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="submit" />
        </form>
      )}
    </div>
  );
};

export default Users;
