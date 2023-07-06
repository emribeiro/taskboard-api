import { Router } from "express";
import { SprintService } from "../../modules/sprint/SprintService";
import { StoryService } from "../../modules/story/StoryService";

const serviceRouter = Router();
const sprintService = new SprintService();
const storyService = new StoryService();

serviceRouter.get("/active", async (request, response) => {
    const sprint = await sprintService.getActiveSprint();
    return response
                    .status(200)
                    .send(sprint);    
});

serviceRouter.post("/", async (request, response) => {
    const {name, startDate, dueDate} = request.body;

    const sprint = await sprintService.createSprint(name, startDate, dueDate);

    return response
            .status(200)
            .send(sprint);
});

serviceRouter.put("/:sprintId/finish", async (request, response) => {
    const sprintId = request.params.sprintId;

    await sprintService.finishSprint(sprintId);

    return response
            .status(200)
            .send();
});

serviceRouter.put("/:sprintId/story/:storyId", async (request, response) => {
    const { sprintId, storyId} = request.params;

    await storyService.includeStoryOnSprint(sprintId, storyId);

    return response
            .status(200)
            .send();
});

export { serviceRouter }