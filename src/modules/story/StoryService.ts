import { Story } from "@prisma/client";
import { FinishStoryUseCase } from "./useCases/FinishStoryUseCase";
import { GetStoryByIdUseCase } from "./useCases/GetStoryByIdUseCase";

class StoryService{

    private finishStoryUseCase: FinishStoryUseCase;
    private getStoryByIdUseCase: GetStoryByIdUseCase

    constructor(){
        this.finishStoryUseCase = new FinishStoryUseCase();
        this.getStoryByIdUseCase = new GetStoryByIdUseCase();
    }

    async finishStory(storyId: string){
        this.finishStoryUseCase.execute(storyId);   
    }

    async getStoryById(storyId: string): Promise<Story>{
        return await this.getStoryByIdUseCase.execute(storyId);
    }

}

export { StoryService };