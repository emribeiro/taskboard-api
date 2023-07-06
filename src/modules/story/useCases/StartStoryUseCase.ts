import { client } from "../../../shared/infra/database";
import { StoryRepository } from "../repository/StoryRepository"


class StartStoryUseCase{

    private repository: StoryRepository;

    constructor(){
        this.repository = new StoryRepository(client);
    }

    async execute(storyId: string){
        const story = await this.repository.getStoryById(storyId);

        story.status = 1;
        story.startedAt = new Date();

        await this.repository.updateStory(story);
    }
}

export { StartStoryUseCase }