import { client } from "../../../shared/infra/database";
import { StoryRepository } from "../repository/StoryRepository"

class CreateStoryUseCase{

    private repository: StoryRepository;

    constructor(){
        this.repository = new StoryRepository(client);
    }

    async execute( projectId: string
                , title: string
                , type: number
                , points?: number
                , acceptanceCriteria?: string){
        
        const story = await this.repository
                                .createStory( projectId
                                            , title
                                            , type
                                            , points
                                            , acceptanceCriteria
                                            );

        return story;
    }
}

export { CreateStoryUseCase }