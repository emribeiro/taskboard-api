import { Router, response } from "express";
import { StoryService } from "../../modules/story/StoryService";
import { TaskService } from "../../modules/task/TaskService";

const storyRouter = Router();
const storyService: StoryService = new StoryService();
const taskService: TaskService = new TaskService();

storyRouter.get("/:storyId", async (request, response) => {
    const id = request.params.storyId;
    const story = await storyService.getStoryById(id);

    return response.status(200).send(story);
});

storyRouter.put("/:storyId/finish", async (request, response) => {
    const id = request.params.storyId;
    console.log(id);

    await storyService.finishStory(id);

    return response.status(200).send();
});

storyRouter.post("/:storyId/task", async (request, response) => {
    const storyId = request.params.storyId;
    const {taskDescription} = request.body;
    await taskService.createTask(storyId, taskDescription);

    return response.status(201).send();
});


export { storyRouter }