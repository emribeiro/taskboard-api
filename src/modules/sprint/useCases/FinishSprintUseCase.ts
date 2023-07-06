import { client } from "../../../shared/infra/database";
import { SprintRepository } from "../repository/SprintRepository"

class FinishSprintUseCase{

    private repository: SprintRepository;

    constructor(){
        this.repository = new SprintRepository(client);
    }

    async execute(sprintId: string){
        await this.repository.finishSprint(sprintId);
    }
}

export { FinishSprintUseCase }