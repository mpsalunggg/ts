import express, { Request, Response, Router } from 'express'
import { TasksController } from './tasks.controller'
import { injectable, inject } from 'inversify'
import { IPartialTaskWithId, ITask } from './task.interface'

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
    this.router.get('/', async (req: Request, res: Response) => {
      const allTasks = await this.tasksController.handleGetTasks(req, res)
      res.json(allTasks)
    })

    this.router.post(
      '/create',
      async (req: Request<{}, {}, ITask>, res: Response) => {
        const newTask = await this.tasksController.handlePostTasks(req, res)
        res.json(newTask)
      }
    )

    this.router.patch(
      '/update',
      async (req: Request<{}, {}, IPartialTaskWithId>, res: Response) => {
        const updatedTask = await this.tasksController.handlePatchTasks(
          req,
          res
        )
        res.json(updatedTask)
      }
    )
  }
}
