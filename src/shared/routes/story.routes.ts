import { Router } from "express";
import { StoryService } from "../../modules/story/StoryService";

const storyRouter = Router();
const storyService: StoryService = new StoryService();

storyRouter.put("/:storyId/finish", async (request, response) => {
    const id = request.params.storyId;
    console.log(id);

    await storyService.finishStory(id);

    return response.status(200).send();
});

export { storyRouter }