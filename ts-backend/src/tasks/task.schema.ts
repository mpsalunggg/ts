import { Model, Schema, model } from 'mongoose'
import { ITask } from './task.interface'


const taskSchema: Schema<ITask> = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Task title is required'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Task description is required'],
      trim: true,
      maxlength: [500, 'Description cannot be more than 500 characters'],
    },
    status: {
      type: String,
      required: [true, 'Task status is required'],
      enum: ['todo', 'inProgress', 'completed'],
      default: 'todo',
    },
    priority: {
      type: String,
      required: [true, 'Task priority is required'],
      enum: ['low', 'normal', 'high'],
      default: 'normal',
    },
    dueDate: {
      type: Date,
      required: [true, 'Due date is required'],
    },
  },
  { timestamps: true }
)

export const Task: Model<ITask> = model('Task', taskSchema)
