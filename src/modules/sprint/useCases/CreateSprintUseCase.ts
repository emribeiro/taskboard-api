import { Sprint } from "@prisma/client";
import { client } from "../../../shared/infra/database";
import { SprintRepository } from "../repository/SprintRepository";

class CreateSprintUseCase{

    private repository: SprintRepository;

    constructor(){
        this.repository = new SprintRepository(client);
    }

    async execute(name: string, startDate: string, dueDate: string){

        const activeSprint = await this.repository.getActiveSprint();

        if(activeSprint) throw new Error("Sprint creation not permitted. Its already have a active sprint!");
        
        const sprint = await this.repository.createSprint( name 
                                    , new Date(startDate)
                                    , new Date(dueDate));

        return sprint;
    }
}

export { CreateSprintUseCase }