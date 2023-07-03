import { Router } from "express";
import { listActiveSprintUseCase } from "../../modules/sprint/useCases/ListActiveSprintUseCase";


const router = Router();

router.get("/", (request, response) => {
    
});

export { router }