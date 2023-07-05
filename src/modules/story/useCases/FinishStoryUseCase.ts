import { Story } from "@prisma/client";
import { client } from "../../../shared/infra/database";
import { SprintRepository } from "../../sprint/repository/SprintRepository";
import { StoryRepository } from "../repository/StoryRepository";


class FinishStoryUseCase{

    private repository: StoryRepository;
    private sprintRepository: SprintRepository;

    constructor(){
        this.repository = new StoryRepository(client);
        this.sprintRepository = new SprintRepository(client);
    }

    async execute(storyId: string){

        const story = await this.repository.getStoryById(storyId);
        
        story.status = 2;
        story.finishedAt = new Date();

        const activeSprint = await this.sprintRepository.getActiveStorySprint(story.id);

        if(activeSprint){
            await this.repository.finishStoryOnSprint(activeSprint.id, story.id);
        }

        this.repository.updateStory(story);
    }


}

export { FinishStoryUseCase }