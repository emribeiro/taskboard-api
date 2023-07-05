import { Sprint } from "@prisma/client";
import { ListActiveSprintUseCase } from "./useCases/ListActiveSprintUseCase";

class SprintService{

    private listActiveSprintUseCase: ListActiveSprintUseCase;

    constructor(){
        this.listActiveSprintUseCase = new ListActiveSprintUseCase();
    }

    async getActiveSprint(): Promise<Sprint>{
        return await this.listActiveSprintUseCase.execute();
    }
}

export { SprintService }