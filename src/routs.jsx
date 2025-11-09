import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout/MainLayout";
import ErrorPage from "./MainLayout/ErrorPage";
 
import Homes from "./pages/Home";
import Login from "./Auth/Login";
import Register from "./Auth/Registartion";
import ALLModuls from "./pages/ALL Moduls";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
     {
        path:"/",
        loader: () =>fetch("http://localhost:3000/letst"),
        element:<Homes></Homes>
     },
     {
      path:"/allmodels",
      loader:( ) => fetch("http://localhost:3000/product"),
      element:<ALLModuls></ALLModuls>
     }
    ]
  },
  {
path:"/login",
element:<Login></Login>
  },
  {
    path:"/register",
  element:<Register></Register>
  },
  {
    path:"/*",
    element:<ErrorPage></ErrorPage>
  }
]);
