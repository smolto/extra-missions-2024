export type Task = {
  id?: string;
  image?: string;
  name?: string;
  slug?: string;
  backgroundImage?: string;
  taskNumber?: number;
  subtasks?: {
    id?: string;
  }[]
}

export type Tasks = Task[];

export type TasksResponse = {
  data: {
    tasks: Tasks
  },
  error: unknown | undefined
}

export type TaskResponse = {
  data: {
    task: Task
  },
  error: unknown | undefined
}