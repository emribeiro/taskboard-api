import { Story } from "@prisma/client";
import { FinishStoryUseCase } from "./useCases/FinishStoryUseCase";
import { GetStoryByIdUseCase } from "./useCases/GetStoryByIdUseCase";
import { CreateStoryUseCase } from "./useCases/CreateStoryUseCase";
import { StartStoryUseCase } from "./useCases/StartStoryUseCase";
import { IncludeStoryOnSprintUseCase } from "./useCases/IncludeStoryOnSprintUseCase";
import { ListActiveStoriesUseCase } from "./useCases/ListActiveStoriesUseCase";

class StoryService{

    private finishStoryUseCase: FinishStoryUseCase;
    private getStoryByIdUseCase: GetStoryByIdUseCase;
    private createStoryUseCase: CreateStoryUseCase;
    private startStoryUseCase: StartStoryUseCase;
    private includeStoryOnSprintUseCase: IncludeStoryOnSprintUseCase;
    private listActiveStoriesUseCase: ListActiveStoriesUseCase;

    constructor(){
        this.finishStoryUseCase = new FinishStoryUseCase();
        this.getStoryByIdUseCase = new GetStoryByIdUseCase();
        this.createStoryUseCase = new CreateStoryUseCase();
        this.startStoryUseCase = new StartStoryUseCase();
        this.includeStoryOnSprintUseCase = new IncludeStoryOnSprintUseCase();
        this.listActiveStoriesUseCase = new ListActiveStoriesUseCase();
    }

    async finishStory(storyId: string){
        this.finishStoryUseCase.execute(storyId);   
    }

    async getStoryById(storyId: string): Promise<Story>{
        return await this.getStoryByIdUseCase.execute(storyId);
    }

    async createStory( projectId: string
        , title: string
        , type: number
        , points?: number
        , acceptanceCriteria?: string){

        const story = await this.createStoryUseCase
                                .execute(
                                    projectId
                                  , title
                                  , type
                                  , points
                                  , acceptanceCriteria
                                )
        
        return story;
    }

    async startStory( storyId: string){
        await this.startStoryUseCase.execute(storyId);
    }

    async includeStoryOnSprint( sprintId: string, storyId: string){
        await this.includeStoryOnSprintUseCase.execute(sprintId, storyId);
    }

    async listActiveStories(){
        const stories = this.listActiveStoriesUseCase.execute();

        return stories;
    }

}

export { StoryService };