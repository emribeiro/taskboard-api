import { FinishStoryUseCase } from "./useCases/FinishStoryUseCase";

class StoryService{

    private finishStoryUseCase: FinishStoryUseCase;

    constructor(){
        this.finishStoryUseCase = new FinishStoryUseCase();
    }
    async finishStory(storyId: string){
        this.finishStoryUseCase.execute(storyId);   
    }

}

export { StoryService };