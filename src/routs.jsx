import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout/MainLayout";
import ErrorPage from "./MainLayout/ErrorPage";
 
import Homes from "./pages/Home";

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
    path:"/*",
    element:<ErrorPage></ErrorPage>
  }
]);
