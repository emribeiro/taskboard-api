import { client } from "../../../shared/infra/database";
import { sprintRepository } from "../repository/SprintRepository"


const listActiveSprintUseCase = () => {
    
    const repository = sprintRepository(client);

    const execute = () => {
        return repository.getActiveSprint();
    }

    return execute;
}

export { listActiveSprintUseCase }