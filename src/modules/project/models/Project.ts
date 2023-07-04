import { Story } from "../../story/models/Story";

interface Project {
    id: string;
    name: string;
    description: string;
    status: number;
    createdAt: Date;
    finishedAt?: Date;
    stories: Story[];
}

export { Project }