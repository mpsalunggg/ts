import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { taskApiRepository } from '../api/taskApi';
import type { CreateTaskDTO, UpdateTaskDTO } from '../types/task.types';

export function useTasks(page = 1, limit = 10) {
  return useQuery({
    queryKey: ['tasks', page, limit],
    queryFn: () => taskApiRepository.getAllTasks(page, limit),
  });
}

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (taskData: CreateTaskDTO) => taskApiRepository.createTask(taskData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
}

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (taskData: UpdateTaskDTO) => taskApiRepository.updateTask(taskData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
}
