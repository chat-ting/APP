import { createHashRouter, Navigate, RouterProvider } from 'react-router'
import { Home } from './home'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace={true} />,
  },
])

export const Routes = () => {
  return <RouterProvider router={router} />
}
