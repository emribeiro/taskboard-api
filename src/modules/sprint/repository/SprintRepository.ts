import { PrismaClient } from "@prisma/client"

const sprintRepository =  (client: PrismaClient) => {
    const getActiveSprint = async () => {
        return await client
            .sprint
            .findFirst({
                where: {status: 1},
                include: {
                    stories: true                    
                }
            })
    }


    const getAllSprints = async () => {
        return await client
            .sprint
            .findMany({include: {stories: true}})
    }
    return {
        getActiveSprint,
        getAllSprints
    }
}

export { sprintRepository }