import express from "express";
import { users } from "../controllers/users.js";
import { postUser } from "../controllers/postUser.js";
import { deleteUser } from "../controllers/deleteUser.js";
import { updateUser } from "../controllers/updateUser.js";

const routes = express.Router();

routes.get("/", users);
routes.post("/", postUser);
routes.delete("/:id", deleteUser);
routes.put("/", updateUser);

export default routes;
