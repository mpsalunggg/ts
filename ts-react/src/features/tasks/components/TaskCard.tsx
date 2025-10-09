import type { Task } from '../types/task.types';
import { TaskStatus, TaskPriority } from '../types/task.types';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Calendar, Flag, CheckCircle2, PlayCircle, Circle } from 'lucide-react';
import { useUpdateTask } from '../hooks/useTasks';

interface TaskCardProps {
  task: Task;
}

const statusColors = {
  [TaskStatus.TODO]: 'bg-gray-100 text-gray-800',
  [TaskStatus.IN_PROGRESS]: 'bg-blue-100 text-blue-800',
  [TaskStatus.COMPLETED]: 'bg-green-100 text-green-800',
};

const statusLabels = {
  [TaskStatus.TODO]: 'To Do',
  [TaskStatus.IN_PROGRESS]: 'In Progress',
  [TaskStatus.COMPLETED]: 'Completed',
};

const priorityColors = {
  [TaskPriority.LOW]: 'text-gray-500',
  [TaskPriority.NORMAL]: 'text-blue-500',
  [TaskPriority.HIGH]: 'text-red-500',
};

const priorityLabels = {
  [TaskPriority.LOW]: 'Low',
  [TaskPriority.NORMAL]: 'Normal',
  [TaskPriority.HIGH]: 'High',
};

export function TaskCard({ task }: TaskCardProps) {
  const updateTask = useUpdateTask();

  const handleStatusUpdate = (newStatus: TaskStatus) => {
    updateTask.mutate({
      _id: task._id,
      status: newStatus,
    });
  };

  const handleComplete = () => {
    handleStatusUpdate(TaskStatus.COMPLETED);
  };

  const handleToggleProgress = () => {
    if (task.status === TaskStatus.TODO) {
      handleStatusUpdate(TaskStatus.IN_PROGRESS);
    } else if (task.status === TaskStatus.IN_PROGRESS) {
      handleStatusUpdate(TaskStatus.TODO);
    }
  };

  const isCompleted = task.status === TaskStatus.COMPLETED;

  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h2 className={`font-semibold text-lg ${isCompleted ? 'line-through text-muted-foreground' : ''}`}>
              {task.title}
            </h2>
            <Flag className={`h-4 w-4 ${priorityColors[task.priority]}`} aria-label={`${priorityLabels[task.priority]} priority`} />
          </div>
          <p className={`text-sm mb-3 ${isCompleted ? 'text-muted-foreground' : 'text-muted-foreground'}`}>
            {task.description}
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className={`text-xs px-2 py-1 rounded-full font-medium ${
                statusColors[task.status]
              }`}
            >
              {statusLabels[task.status]}
            </span>
            <div className="flex items-center gap-1 text-muted-foreground text-xs">
              <Calendar className="h-3 w-3" />
              {new Date(task.dueDate).toLocaleDateString()}
            </div>
            <span className="text-muted-foreground text-xs">
              {priorityLabels[task.priority]} Priority
            </span>
          </div>
        </div>

        {!isCompleted && (
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={task.status === TaskStatus.IN_PROGRESS ? 'secondary' : 'default'}
              onClick={handleToggleProgress}
              disabled={updateTask.isPending}
            >
              {task.status === TaskStatus.TODO ? (
                <>
                  <PlayCircle className="h-4 w-4 mr-1" />
                  Start
                </>
              ) : (
                <>
                  <Circle className="h-4 w-4 mr-1" />
                  Pause
                </>
              )}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleComplete}
              disabled={updateTask.isPending}
              className="border-green-600 text-green-700 hover:bg-green-50 hover:text-green-800"
            >
              <CheckCircle2 className="h-4 w-4 mr-1" />
              Complete
            </Button>
          </div>
        )}

        {isCompleted && (
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle2 className="h-5 w-5" />
            <span className="text-sm font-medium">Done</span>
          </div>
        )}
      </div>
    </Card>
  );
}
