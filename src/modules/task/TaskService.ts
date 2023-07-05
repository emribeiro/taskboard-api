import { CreateTaskUseCase } from "./useCases/CreateTaskUseCase"
import { DeleteTaskUseCase } from "./useCases/DeleteTaskUseCase";
import { FinishTaskUseCase } from "./useCases/FinishTaskUseCase";

class TaskService{

    private createTaskUseCase: CreateTaskUseCase;
    private finishTaskUseCase: FinishTaskUseCase;
    private deleteTaskUseCase: DeleteTaskUseCase;
    
    constructor(){
        this.createTaskUseCase = new CreateTaskUseCase();
        this.finishTaskUseCase = new FinishTaskUseCase();
        this.deleteTaskUseCase = new DeleteTaskUseCase();
    }

    async createTask(storyId: string, taskDescription: string){
        await this.createTaskUseCase.execute(storyId, taskDescription);
    }

    async finishTask(taskId: string){
        await this.finishTaskUseCase.execute(taskId);
    }

    async deleteTask(taskId:string){
        await this.finishTaskUseCase.execute(taskId);
    }

}

export { TaskService }