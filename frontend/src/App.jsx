import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from './pages/homePage/HomePage'
import ListPage from './pages/listPage/ListPage'
import { Layout, RequiredAuth } from "./pages/layout/Layout"
import SinglePage from "./pages/singlePage/SinglePage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ProfileUpdatePage from "./pages/profileUpdatePage/ProfileUpdatePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element: <HomePage />
        },
        {
          path:"/list",
          element: <ListPage />
        },
        {
          path:"/:id",
          element: <SinglePage />
        },
        {
          path:"/register",
          element:<Register />
        },
        {
          path:"/login",
          element:<Login />
        }


      ]
    },
    {
      path:"/",
      element: <RequiredAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path:"/profile/update",
          element: <ProfileUpdatePage />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App
