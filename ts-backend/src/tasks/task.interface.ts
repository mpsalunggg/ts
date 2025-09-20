export interface ITask {
  title: string
  description: string
  status: 'todo' | 'inProgress' | 'completed'
  priority: 'low' | 'normal' | 'high'
  dueDate: Date
}

export interface IPartialTaskWithId extends Partial<ITask> {
  _id: string
}

export interface ITaskPagination {
  limit: number
  page: number
  order: 'asc' | 'dsc'
}