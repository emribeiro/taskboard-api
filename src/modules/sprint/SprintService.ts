import { Sprint } from "@prisma/client";
import { ListActiveSprintUseCase } from "./useCases/ListActiveSprintUseCase";
import { CreateSprintUseCase } from "./useCases/CreateSprintUseCase";

class SprintService{

    private listActiveSprintUseCase: ListActiveSprintUseCase;
    private createSprintUseCase: CreateSprintUseCase;

    constructor(){
        this.listActiveSprintUseCase = new ListActiveSprintUseCase();
        this.createSprintUseCase = new CreateSprintUseCase();
    }

    async getActiveSprint(): Promise<Sprint>{
        return await this.listActiveSprintUseCase.execute();
    }

    async createSprint(name: string, startDate: string, dueDate: string){
        const sprint = await this.createSprintUseCase.execute(name, startDate, dueDate);

        return sprint;
    }
}

export { SprintService }