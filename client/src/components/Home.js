import Users from "./Users/Users";
import AddUser from "./AddUser/Adduser";

const Home = () => {
  return (
    <div className="home">
      <Users />
      <AddUser />
    </div>
  );
};

export default Home;
