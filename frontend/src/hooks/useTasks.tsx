import { tasksContext, tasksProps } from "@/contexts/tasks";
import { useState } from 'react'

export default function useTasks(children: React.ReactNode, task: tasksProps){
    const [currentTask, setCurrentTask] = useState<tasksProps>(task)

    return(
        <tasksContext.Provider value={currentTask}>
            {children}
        </tasksContext.Provider>
    )
}