import { Router, response } from "express";
import { StoryService } from "../../modules/story/StoryService";

const storyRouter = Router();
const storyService: StoryService = new StoryService();

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


export { storyRouter }