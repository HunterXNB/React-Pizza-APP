import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './UI/Error';
import Home from './UI/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';
import AppLayout from './UI/AppLayout';
import { loader as orderLoader } from './features/order/Order';
import { action as orderAction } from './features/order/CreateOrder';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import ProtectedRoute from './UI/ProtectedRoute';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        element: (
          <ProtectedRoute>
            <Outlet />
          </ProtectedRoute>
        ),
        children: [
          {
            path: '/menu',
            element: <Menu />,
            loader: menuLoader,
            errorElement: <Error />,
          },
          {
            path: '/cart',
            element: <Cart />,
          },
          {
            path: '/order/new',
            element: <CreateOrder />,
            action: orderAction,
          },
        ],
      },
      {
        path: '/order/:orderID',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
