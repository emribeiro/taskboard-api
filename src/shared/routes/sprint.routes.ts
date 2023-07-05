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

export { serviceRouter }