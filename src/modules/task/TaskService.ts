import { CreateTaskUseCase } from "./useCases/CreateTaskUseCase"
import { FinishTaskUseCase } from "./useCases/FinishTaskUseCase";

class TaskService{

    private createTaskUseCase: CreateTaskUseCase;
    private finishTaskUseCase: FinishTaskUseCase;

    constructor(){
        this.createTaskUseCase = new CreateTaskUseCase();
        this.finishTaskUseCase = new FinishTaskUseCase();
    }

    async createTask(storyId: string, taskDescription: string){
        await this.createTaskUseCase.execute(storyId, taskDescription);
    }

    async finishTask(taskId: string){
        await this.finishTaskUseCase.execute(taskId);
    }
}

export { TaskService }