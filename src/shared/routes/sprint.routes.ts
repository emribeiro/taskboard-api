import { Router } from "express";
import { SprintService } from "../../modules/sprint/SprintService";

const serviceRouter = Router();
const sprintService = new SprintService();

serviceRouter.get("/active", async (request, response) => {
    const sprint = await sprintService.getActiveSprint();
    return response
                    .status(200)
                    .send(sprint);    
});

serviceRouter.post("/", async (request, response) => {
    const {name, startDate, dueDate} = request.body;

    const sprint = await sprintService.createSprint(name, startDate, dueDate);

    return response
            .status(200)
            .send(sprint);
});

export { serviceRouter }