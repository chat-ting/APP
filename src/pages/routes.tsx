import { createHashRouter, Navigate, RouterProvider } from 'react-router'
import { Home } from './home'
import { Chatroom } from './chatroom'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/chat/:chatroomId',
    element: <Chatroom />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace={true} />,
  },
])

export const Routes = () => {
  return <RouterProvider router={router} />
}
