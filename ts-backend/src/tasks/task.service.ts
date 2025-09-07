import { Model } from 'mongoose'
import { ITask } from './task.interface'
import { Task } from './task.schema'
import { injectable } from 'inversify'

@injectable()
export class TaskService {
  private taskModel: Model<ITask> = Task

  public async findAll() {
    return await this.taskModel.find()
  }

  public async findById(_id: string) {
    return await this.taskModel.findById(_id)
  }

  public async createTask(taskData: ITask) {
    return await new this.taskModel(taskData).save()
  }
}
