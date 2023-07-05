import { Router } from "express";
import { serviceRouter } from "./sprint.routes";


const router = Router();

router.use("/sprint", serviceRouter);

export { router };