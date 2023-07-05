import { client } from "../../../shared/infra/database";
import { TaskRepository } from "../repository/TaskRepository"

class DeleteTaskUseCase{

    private repository: TaskRepository;

    constructor(){
        this.repository = new TaskRepository(client);
    }

    async execute(taskId: string){
        await this.repository.delete(taskId);
    }
}

export { DeleteTaskUseCase }