import { createContext } from "react";

export interface tasksProps {
    name: string,
    description: string,
    done: boolean,
    createdAt?: Date,
}

export const tasksContext = createContext<tasksProps | null>(null)

