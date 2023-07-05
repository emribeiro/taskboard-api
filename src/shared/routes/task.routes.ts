import { Router } from "express";
import { TaskService } from "../../modules/task/TaskService";

const taskRouter = Router();
const taskService = new TaskService();

taskRouter.put("/:taskId", async (request, response) => {
    const taskId = request.params.taskId;
    await taskService.finishTask(taskId);

    return response.status(200).send();
});

taskRouter.delete("/:taskId", async (request, response) => {
    const taskId = request.params.taskId;
    await taskService.deleteTask(taskId);  

    return response.status(200).send();
})

export { taskRouter }