import { Card } from '../../../components/ui/card';
import type { TaskMeta } from '../api/taskApi';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

interface TaskStatisticsProps {
  meta: TaskMeta;
}

export function TaskStatistics({ meta }: TaskStatisticsProps) {
  const total = meta.totalTasks;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-100 rounded-lg">
            <Circle className="h-5 w-5 text-gray-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">To Do</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold">{meta.todoTasks}</p>
              {total > 0 && (
                <p className="text-xs text-muted-foreground">
                  {Math.round((meta.todoTasks / total) * 100)}%
                </p>
              )}
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Clock className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">In Progress</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold">{meta.inProgressTasks}</p>
              {total > 0 && (
                <p className="text-xs text-muted-foreground">
                  {Math.round((meta.inProgressTasks / total) * 100)}%
                </p>
              )}
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-100 rounded-lg">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Completed</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold">{meta.completedTasks}</p>
              {total > 0 && (
                <p className="text-xs text-muted-foreground">
                  {Math.round((meta.completedTasks / total) * 100)}%
                </p>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
