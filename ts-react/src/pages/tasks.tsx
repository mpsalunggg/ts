import { useState, useCallback, useMemo } from 'react'
import {
  useTasks,
  TaskList,
  AddTaskSheet,
  TaskStatistics,
} from '../features/tasks'
import { Loading, ErrorMessage, Pagination } from '../components/common'

const ITEMS_PER_PAGE = 5

const Tasks = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading, error, refetch } = useTasks(
    currentPage,
    ITEMS_PER_PAGE
  )
  
  const tasks = useMemo(() => data?.tasks || [], [data?.tasks])
  const meta = useMemo(
    () =>
      data?.meta || {
        totalTasks: 0,
        completedTasks: 0,
        todoTasks: 0,
        inProgressTasks: 0,
      },
    [data?.meta]
  )
  
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Loading message="Loading tasks..." />
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <ErrorMessage
          title="Error loading tasks"
          error={error}
          onRetry={() => refetch()}
        />
      </div>
    )
  }


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Tasks</h1>
        <p className="text-muted-foreground">
          Manage your tasks and track your progress
        </p>
      </div>

      <div className="mb-8">
        <TaskStatistics meta={meta} />
      </div>

      <TaskList tasks={tasks} />

      <div className="mt-8">
        <Pagination
          currentPage={currentPage}
          totalItems={meta.inProgressTasks + meta.todoTasks}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={handlePageChange}
        />
      </div>

      <AddTaskSheet />
    </div>
  )
}

export default Tasks
