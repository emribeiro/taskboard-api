import { PrismaClient, Story } from "@prisma/client";


class StoryRepository{

    private client: PrismaClient;

    constructor(client: PrismaClient){
        this.client = client;
    }

    async createStory( projectId: string
                     , title: string
                     , type: number
                     , points?: number
                     , acceptanceCriteria?: string){

        const story = await this.client
                                .story
                                .create({
                                    data:{
                                        projectId,
                                        title,
                                        type,
                                        status: 0,
                                        points,
                                        acceptanceCriteria
                                    }
                                });

        return story;

    }

    async getStoryById(id: string){
        return await this.client.story.findUniqueOrThrow({where: { id }, include: { tasks: true, storyType: true}});
    }

    async updateStory(story: Story){
        await this.client.story
                .update({
                    where: {
                        id: story.id
                    }, 
                    data: story
                })
    }

    async finishStoryOnSprint(sprintId: string, storyId: string){
        await this.client.storiesOnSprints
                  .update({
                    where: {storyId_sprintId: {storyId, sprintId}},
                    data: {
                        isDone: true
                    }
                  });
    }
}

export { StoryRepository }