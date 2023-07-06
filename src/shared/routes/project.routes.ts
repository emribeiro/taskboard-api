import { Router } from "express";
import { StoryService } from "../../modules/story/StoryService";

const projectRouter = Router();
const storyService = new StoryService();

projectRouter.post("/:projectId/story", async (request, response) => {
    const projectId = request.params.projectId;
    const {title, type, points, acceptanceCriteria} = request.body;

    const story = await storyService
                            .createStory( 
                                          projectId 
                                        , title
                                        , type
                                        , points
                                        , acceptanceCriteria
                                        );

    return response.status(201).send(story);
});

export { projectRouter }