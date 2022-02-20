import Users from "./Users/Users";
import AddUser from "./AddUser/Adduser";

const Home = () => {
  return (
    <div className="home">
      <Users />
      <hr />
      <AddUser />
    </div>
  );
};

export default Home;
