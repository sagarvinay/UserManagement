import User from "../models/model.js";

export const updateUser = (req, res) => {
  const id = req.body.id;
  const changedName = req.body.name;

  User.updateOne(
    { _id: id },
    { $set: { name: changedName } },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(result);
      }
    }
  );
};
