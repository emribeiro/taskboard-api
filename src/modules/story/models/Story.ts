import { Task } from "../../task/models/Task";

interface StoryType{
    type: number;
    description: string;
}

interface Story{
    id: string;
    title: string;
    type: StoryType;
    status: number;
    startedAt?: Date;
    finishedAt?: Date;
    points: number;
    acceptanceCriteria?: string;
    tasks: Task[];
    
}

interface StoryOnSprint{
    story: Story;
    isDone: boolean;
}

export { Story, StoryOnSprint }