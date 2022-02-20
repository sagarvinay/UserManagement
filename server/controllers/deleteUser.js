import User from "../models/model.js";

export const deleteUser = (req, res) => {
  const { id } = req.params;
  //   console.log(req.params);
  User.deleteOne({ _id: id }, (err, result) => {
    if (err) {
      console.log("err is ", err);
    } else {
      res.status(200).send(result);
    }
  });
};
