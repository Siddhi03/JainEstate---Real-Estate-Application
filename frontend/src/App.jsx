import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from './pages/homePage/HomePage'
import ListPage from './pages/listPage/ListPage'
import { Layout, RequiredAuth } from "./pages/layout/Layout"
import SinglePage from "./pages/singlePage/SinglePage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ProfileUpdatePage from "./pages/profileUpdatePage/ProfileUpdatePage";
import NewPostPage from "./pages/newPostPage/NewPostPage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";

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
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path:"/:id",
          element: <SinglePage />,
          loader: singlePageLoader
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
          loader: profilePageLoader,
        },
        {
          path:"/profile/update",
          element: <ProfileUpdatePage />
        },
        {
          path:"/add",
          element: <NewPostPage />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App
