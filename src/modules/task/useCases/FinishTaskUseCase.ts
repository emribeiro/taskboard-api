import { client } from "../../../shared/infra/database";
import { TaskRepository } from "../repository/TaskRepository"


class FinishTaskUseCase{

    private repository: TaskRepository;

    constructor(){
        this.repository = new TaskRepository(client);
    }

    async execute(taskId: string){
        const task = await this.repository.getById(taskId);

        task.isDone = true;
        task.doneAt = new Date();
        
        await this.repository.update(task);
    }
}

export { FinishTaskUseCase }