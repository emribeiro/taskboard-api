import { Router } from "express";
import { serviceRouter } from "./sprint.routes";
import { storyRouter } from "./story.routes";
import { taskRouter } from "./task.routes";


const router = Router();

router.use("/sprint", serviceRouter);
router.use("/story", storyRouter);
router.use("/task", taskRouter);

export { router };