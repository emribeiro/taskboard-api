import { Router } from "express";
import { serviceRouter } from "./sprint.routes";
import { storyRouter } from "./story.routes";


const router = Router();

router.use("/sprint", serviceRouter);
router.use("/story", storyRouter);

export { router };