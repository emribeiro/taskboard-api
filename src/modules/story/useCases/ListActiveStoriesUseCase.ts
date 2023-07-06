import { client } from "../../../shared/infra/database";
import { StoryRepository } from "../repository/StoryRepository"


class ListActiveStoriesUseCase{

    private repository: StoryRepository;

    constructor(){
        this.repository = new StoryRepository(client);
    }

    async execute(){
        const stories = await this.repository.listAllActiveStories();

        return stories;
    }
}

export {ListActiveStoriesUseCase}