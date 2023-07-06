import { Sprint } from "@prisma/client";
import { ListActiveSprintUseCase } from "./useCases/ListActiveSprintUseCase";
import { CreateSprintUseCase } from "./useCases/CreateSprintUseCase";
import { FinishSprintUseCase } from "./useCases/FinishSprintUseCase";

class SprintService{

    private listActiveSprintUseCase: ListActiveSprintUseCase;
    private createSprintUseCase: CreateSprintUseCase;
    private finishSprintUseCase: FinishSprintUseCase;

    constructor(){
        this.listActiveSprintUseCase = new ListActiveSprintUseCase();
        this.createSprintUseCase = new CreateSprintUseCase();
        this.finishSprintUseCase = new FinishSprintUseCase();
    }

    async getActiveSprint(): Promise<Sprint>{
        return await this.listActiveSprintUseCase.execute();
    }

    async createSprint(name: string, startDate: string, dueDate: string){
        const sprint = await this.createSprintUseCase.execute(name, startDate, dueDate);

        return sprint;
    }

    async finishSprint(sprintId: string){
        await this.finishSprintUseCase.execute(sprintId);
    }
}

export { SprintService }