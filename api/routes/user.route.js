import express from "express";
import { signup, getUser, updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/getUser", getUser);
router.put("/updateUser", updateUser);




export default router;

