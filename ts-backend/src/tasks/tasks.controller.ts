import { Request, Response } from 'express'
import { injectable, inject } from 'inversify'
import { UserController } from '../user/user.controller'
import { IPartialTaskWithId, ITask } from './task.interface'
import { Task } from './task.schema'
import { Document } from 'mongoose'
import { TaskService } from './task.service'
import { matchedData } from 'express-validator'
import { UpdateTaskProvider } from './provider/updateTask.provider'
import { GetTasksProvider } from './provider/getTasks.provider'

export class TasksController {
  constructor(
    @inject(UserController) private userController: UserController,
    @inject(TaskService) private taskService: TaskService,
    @inject(UpdateTaskProvider) private UpdateTaskProvider: UpdateTaskProvider,
    @inject(GetTasksProvider) private getTasksProvider: GetTasksProvider
  ) {}

  public async handleGetTasks(req: Request, res: Response): Promise<ITask[]> {
    const validatedData = matchedData(req)

    try {
      const tasks: ITask[] = await this.getTasksProvider.findAllTasks(
        validatedData
      )
      return tasks
    } catch (error: any) {
      throw new Error(error)
    }
  }

  public async handlePostTasks(
    req: Request<{}, {}, ITask>,
    res: Response
  ): Promise<Document> {
    const validatedData: ITask = matchedData(req)
    try {
      return await this.taskService.createTask(validatedData)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  public async handlePatchTasks(
    req: Request<{}, {}, IPartialTaskWithId>,
    res: Response
  ): Promise<Document> {
    const validatedData: IPartialTaskWithId = matchedData(req)

    try {
      return await this.UpdateTaskProvider.updateTask(validatedData)
    } catch (error: any) {
      throw new Error(error)
    }
  }
}
