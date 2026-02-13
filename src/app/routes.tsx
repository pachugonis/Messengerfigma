import { createBrowserRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { Chats } from './pages/Chats';
import { Register } from './pages/Register';
import { Login } from './pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'chats',
        Component: Chats,
      },
    ],
  },
  {
    path: '/register',
    Component: Register,
  },
  {
    path: '/login',
    Component: Login,
  },
]);
