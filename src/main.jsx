import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import { router } from './routs.jsx';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './context/Authprovider.jsx';
import { ClockLoader } from 'react-spinners';

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
   <RouterProvider router={router}  fallbackElement={ <ClockLoader />}/>
     <ToastContainer />
 </AuthProvider>
  </StrictMode>,
)

