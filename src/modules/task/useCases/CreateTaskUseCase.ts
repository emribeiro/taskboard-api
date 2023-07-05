import { client } from "../../../shared/infra/database";
import { TaskRepository } from "../repository/TaskRepository"


class CreateTaskUseCase{

    private repository: TaskRepository;

    constructor(){
        this.repository = new TaskRepository(client);
    }


    async execute(storyId: string, taskDescription: string){
        await this.repository.create(storyId, taskDescription);
    }
}

export { CreateTaskUseCase }