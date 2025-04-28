import { createHashRouter, Navigate, RouterProvider } from 'react-router'
import { Home } from './home'
import { Chatroom } from './chat/[chatRoomId]'
import { RootLayout } from '../components/layouts/root-layout'

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'chat/:chatRoomId', element: <Chatroom /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])

export const Routes = () => {
  return <RouterProvider router={router} />
}
