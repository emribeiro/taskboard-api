import {PrismaClient} from "@prisma/client";


const client = new PrismaClient();

async function getSprints(){
    const sprints = await client.sprint.findMany();

    console.log(sprints);
}

getSprints();


