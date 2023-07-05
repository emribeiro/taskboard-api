import { PrismaClient } from "@prisma/client";
import { Task } from "../models/Task";

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

    async getById(id: string): Promise<Task>{
        const task =  await this.client.task.findUniqueOrThrow({ where: { id }});
                
        return task;
    }

    async update(task: Task){
        await this.client.task.update({where: { id: task.id} ,data: task });
    }

    async delete(taskId: string){
        await this.client.task.delete({where: { id: taskId}});
    }
}

export { TaskRepository }