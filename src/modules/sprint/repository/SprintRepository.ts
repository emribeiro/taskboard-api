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
}

export { SprintRepository}