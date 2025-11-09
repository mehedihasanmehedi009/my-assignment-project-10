import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout/MainLayout";
import ErrorPage from "./MainLayout/ErrorPage";
 
import Homes from "./pages/Home";
import Login from "./Auth/Login";
import Register from "./Auth/Registartion";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
     {
        path:"/",
        
        element:<Homes></Homes>
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
