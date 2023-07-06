import { Router } from "express";
import { serviceRouter } from "./sprint.routes";
import { storyRouter } from "./story.routes";
import { taskRouter } from "./task.routes";
import { projectRouter } from "./project.routes";


const router = Router();

router.use("/sprint", serviceRouter);
router.use("/story", storyRouter);
router.use("/task", taskRouter);
router.use("/project", projectRouter);

export { router };