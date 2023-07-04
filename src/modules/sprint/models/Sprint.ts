import { StoryOnSprint } from "../../story/models/Story";

interface Sprint{
    id: string;
    name: string;
    status: number;
    startDate: Date;
    dueDate: Date;
    endDate?: Date;
    stories: StoryOnSprint[];
}


export { Sprint }