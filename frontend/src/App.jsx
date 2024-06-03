import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from './pages/homePage/HomePage'
import ListPage from './pages/listPage/ListPage'
import Layout from "./pages/layout/Layout"
import SinglePage from "./pages/singlePage/SinglePage";
import ProfilePage from "./pages/profilePage/ProfilePage";

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
          path:"/profile",
          element: <ProfilePage />
        }

      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App
