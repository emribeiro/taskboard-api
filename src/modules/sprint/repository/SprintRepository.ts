import { PrismaClient, Sprint } from "@prisma/client"

class SprintRepository{

    private client;

    constructor(client: PrismaClient){
        this.client = client
    }

    async getActiveSprint(): Promise<Sprint | null>{
        const sprint = await this.client
                                 .sprint
                                 .findFirst(
                                    {  where: {status: 1}
                                    , include: { stories: { include: { story: true}} }
                                    });

        return sprint;
    }

    async getActiveStorySprint(storyId: string){
        const sprint = await this.client   
                                 .sprint
                                 .findFirst({
                                    where: { status: 1, stories: { some: { storyId }}}
                                 });
        
        return sprint;
    }

    async createSprint(name: string, startDate: Date, dueDate: Date){
        await this.client.sprint.create({
            data: {
                status: 1,
                name,
                startDate,
                dueDate
            }
        });
    }

    async finishSprint(sprintId: string){
        await this.client.sprint.update({where: { id: sprintId}, data: { status: 2, endDate: new Date()}});
    }
}

export { SprintRepository}