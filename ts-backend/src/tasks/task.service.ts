import { Model } from 'mongoose'
import { ITask, ITaskPagination } from './task.interface'
import { Task } from './task.schema'
import { injectable } from 'inversify'

@injectable()
export class TaskService {
  private taskModel: Model<ITask> = Task

  public async findById(_id: string) {
    return await this.taskModel.findById(_id)
  }

  public async createTask(taskData: ITask) {
    return await new this.taskModel(taskData).save()
  }

  public async findAll(pagination: ITaskPagination) {
    return await this.taskModel
      .find()
      .limit(pagination.limit)
      .skip(pagination.page)
      .sort({
        createdAt: pagination.order === 'asc' ? 1 : -1,
      })
  }
}

// Create provider
