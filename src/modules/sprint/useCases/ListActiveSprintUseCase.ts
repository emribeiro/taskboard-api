import { Sprint } from "@prisma/client";
import { client } from "../../../shared/infra/database";
import { SprintRepository } from "../repository/SprintRepository"


class ListActiveSprintUseCase{

    private repository: any;

    constructor(){
        this.repository = new SprintRepository(client);
    }

    async execute(): Promise<Sprint>{
        const sprint = await this.repository.getActiveSprint();
        return sprint;
    }
}

export { ListActiveSprintUseCase }