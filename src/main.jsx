import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Pages/Admin/Dashboard.jsx';
import UsersPage from './Pages/Admin/UserPage.jsx';
import BooksPage from './Pages/Admin/Bookspage.jsx';
import SettingsPage from './Pages/Admin/Setting.jsx';
import EarningsPage from './Pages/Admin/EarningPage.jsx';
import DisputeListPage from './Pages/Admin/Dispute.jsx';
import HomePage from './Pages/HomePage/Homepage.jsx';
import LoginForm from './Pages/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/admin', element: <Dashboard /> },
      { path: '/admin/users list', element: <UsersPage /> },
      { path: '/admin/books list', element: <BooksPage /> },
      { path: '/admin/setting', element: <SettingsPage /> },
      { path: '/admin/earning', element: <EarningsPage /> },
      { path: '/admin/dispute list', element: <DisputeListPage /> },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

);
