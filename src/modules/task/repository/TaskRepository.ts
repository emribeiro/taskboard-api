import { PrismaClient } from "@prisma/client";

class TaskRepository{

    private client: PrismaClient;

    constructor(client: PrismaClient){
        this.client = client;
    }

    async create( storyId: string
                , taskDescription: string){
        await this.client.task.create({
            data: {
                description: taskDescription,
                storyId: storyId
            }
        });
    }
}

export { TaskRepository }