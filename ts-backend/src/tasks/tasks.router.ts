import express, { Request, Response, Router } from 'express'
import { TasksController } from './tasks.controller'
import { injectable, inject } from 'inversify'
import { ITask, IPartialTaskWithId } from './task.interface'
import { createTaskValidator } from './validator/createTask.validator'
import { validationResult } from 'express-validator'
import { getTasksValidator } from './validator/getTasks.validator'
import { StatusCodes } from 'http-status-codes'
import { updateTaskValidator } from './validator/updateTask.validator'

@injectable()
export class TasksRouter {
  public router: Router

  constructor(
    @inject(TasksController) private tasksController: TasksController
  ) {
    this.router = express.Router()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    // Get Route
    this.router.get(
      '/',
      getTasksValidator,
      async (req: Request, res: Response) => {
        const result = validationResult(req)
        if (result.isEmpty()) {
          const allTasks = await this.tasksController.handleGetTasks(req, res)
          res.json(allTasks)
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(result.array())
        }
      }
    )

    // Post Route
    this.router.post(
      '/create',
      createTaskValidator,
      async (req: Request<{}, {}, ITask>, res: Response) => {
        const result = validationResult(req)
        if (result.isEmpty()) {
          const newTask = await this.tasksController.handlePostTasks(req, res)
          res.status(StatusCodes.CREATED).json(newTask)
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(result.array())
        }
      }
    )

    // Patch Route
    this.router.patch(
      '/update',
      updateTaskValidator,
      async (req: Request<{}, {}, IPartialTaskWithId>, res: Response) => {
        const result = validationResult(req)

        if (result.isEmpty()) {
          let updatedTask = await this.tasksController.handlePatchTasks(
            req,
            res
          )
          res.status(StatusCodes.OK).json(updatedTask)
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(result.array())
        }
      }
    )
  }
}
