import { StoryRepository } from "../repository/StoryRepository"
import { client } from "../../../shared/infra/database";


class GetStoryByIdUseCase{

    private repository: StoryRepository;

    constructor(){
        this.repository = new StoryRepository(client);
    }

    async execute(storyId: string){
        return await this.repository.getStoryById(storyId);
    }
}

export { GetStoryByIdUseCase}