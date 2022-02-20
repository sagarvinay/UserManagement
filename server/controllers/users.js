import User from "../models/model.js";

export const users = (req, res) => {
  //   res.send({ user: "test" });
  User.find({}, (err, foundUsers) => {
    if (err) {
      console.log(err);
    } else {
      res.send(foundUsers);
    }
  });
};
