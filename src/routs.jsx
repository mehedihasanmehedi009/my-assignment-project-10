 import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout/MainLayout";
import ErrorPage from "./MainLayout/ErrorPage";
import Homes from "./pages/Home";
import Login from "./Auth/Login";
import Register from "./Auth/Registartion";
import ALLModuls from "./pages/ALL Moduls";
import AllDatiels from "./pages/All Datails page/AllDatiels";
import AddArtwork from "./pages/Adddoors/AddArtwork";
import MyGallery from "./pages/My Galary/MyGallery";
import MyFavorites from "./pages/My Favorites/MyFavorites";
import PrivateRoute from "./PrivetRout/PrivetRout";
import UPDeteGallary from "./pages/Updete/UPDeteGallary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:3000/letst"),
        element: <Homes />,
      },
      {
        path: "/allmodels",
        loader: () => fetch("http://localhost:3000/product"),
        element: <ALLModuls />,
      },
      {
        path: "/alldatiels/:id",
        element: (
          <PrivateRoute>
            <AllDatiels />
          </PrivateRoute>
        ),
      },
      {
        path: "/addarts",
        element: (
          <PrivateRoute>
            <AddArtwork />
          </PrivateRoute>
        ),
      },
      {
        path: "/gallery",
        element: (
          <PrivateRoute>
            <MyGallery />
          </PrivateRoute>
        ),
      },
      {
        path:"/update/:id",
        element:<PrivateRoute><UPDeteGallary></UPDeteGallary></PrivateRoute>,
         loader: ({ params }) => fetch(`http://localhost:3000/mygallry/${params.id}`)


      },
      {
        path: "/favorits",
        element: (
          <PrivateRoute>
            <MyFavorites />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*", 
    element: <ErrorPage />,
  },
]);
