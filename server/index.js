import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes/routes.js";

const app = express();
// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );
app.use(cors());

app.use(express.json());
app.use("/user", routes);
// app.post("/user", (req, res) => {
//   console.log("this route got hit");
//   console.log(req.body);
// });

mongoose
  .connect("mongodb://localhost:27017/repupUsersDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected...."))
  .catch((err) => console.log(err));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
