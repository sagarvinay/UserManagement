import User from "../models/model.js";

export const postUser = (req, res) => {
  const userName = req.body.name;
  console.log("req.body is ", req.body);

  const newUser = new User({
    name: userName,
  });

  newUser.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("User added successfully");
    }
  });
};
