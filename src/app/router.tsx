import { createBrowserRouter } from 'react-router-dom'
import Main from '../pages/ui/main/Main'
import History from '../pages/ui/history/History'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/history',
    element: <History />,
  },
])
