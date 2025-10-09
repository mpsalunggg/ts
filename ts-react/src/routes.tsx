import { createBrowserRouter } from 'react-router'
import { lazy, Suspense } from 'react'
import { Loading } from './components/common'

const Tasks = lazy(() => import('./pages/tasks'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div className="container mx-auto px-4 py-8"><Loading /></div>}>
        <Tasks />
      </Suspense>
    ),
  },
])
