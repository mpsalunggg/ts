import type { Task, CreateTaskDTO, UpdateTaskDTO } from '../types/task.types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export interface TaskMeta {
  totalTasks: number;
  completedTasks: number;
  todoTasks: number;
  inProgressTasks: number;
}

interface ApiResponse<T> {
  status: string;
  statusCode: number;
  message: string;
  data: T;
  meta?: TaskMeta;
}

export interface TasksResponse {
  tasks: Task[];
  meta: TaskMeta;
}

export interface ITaskRepository {
  getAllTasks(page?: number, limit?: number): Promise<TasksResponse>;
  createTask(task: CreateTaskDTO): Promise<Task>;
  updateTask(task: UpdateTaskDTO): Promise<Task>;
}

export class TaskApiRepository implements ITaskRepository {
  async getAllTasks(page = 1, limit = 10): Promise<TasksResponse> {
    const response = await fetch(`${API_BASE_URL}/tasks?page=${page}&limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    const result: ApiResponse<Task[]> = await response.json();

    const tasks = result.data.map((task: any) => ({
      ...task,
      dueDate: new Date(task.dueDate),
    }));

    return {
      tasks,
      meta: result.meta || {
        totalTasks: 0,
        completedTasks: 0,
        todoTasks: 0,
        inProgressTasks: 0,
      },
    };
  }

  async createTask(task: CreateTaskDTO): Promise<Task> {
    const response = await fetch(`${API_BASE_URL}/tasks/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error('Failed to create task');
    }

    const result: ApiResponse<Task> = await response.json();

    return {
      ...result.data,
      dueDate: new Date(result.data.dueDate),
    };
  }

  async updateTask(task: UpdateTaskDTO): Promise<Task> {
    const response = await fetch(`${API_BASE_URL}/tasks/update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error('Failed to update task');
    }

    const result: ApiResponse<Task> = await response.json();

    return {
      ...result.data,
      dueDate: new Date(result.data.dueDate),
    };
  }
}

export const taskApiRepository = new TaskApiRepository();
