import express from "express";
const router = express.Router();

import { createToken, stkPush } from "../controller/token";

router.post("/", createToken, stkPush);
export default router;
