import { CreateTaskUseCase } from "./useCases/CreateTaskUseCase"

class TaskService{

    private createTaskUseCase: CreateTaskUseCase;

    constructor(){
        this.createTaskUseCase = new CreateTaskUseCase();
    }

    async createTask(storyId: string, taskDescription: string){
        await this.createTaskUseCase.execute(storyId, taskDescription);
    }
}

export { TaskService }