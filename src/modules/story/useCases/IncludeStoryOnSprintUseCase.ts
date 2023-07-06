import { client } from "../../../shared/infra/database";
import { StoryRepository } from "../repository/StoryRepository"


class IncludeStoryOnSprintUseCase{

    private repository: StoryRepository;

    constructor(){
        this.repository = new StoryRepository(client);
    }

    async execute(sprintId: string, storyId: string){
        await this.repository.addStoryInSprint(sprintId, storyId);
    }
}

export { IncludeStoryOnSprintUseCase }