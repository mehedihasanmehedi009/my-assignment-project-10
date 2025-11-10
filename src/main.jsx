import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import { router } from './routs.jsx';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './context/Authprovider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
   <RouterProvider router={router} 
     fallbackElement={<div className="text-center mt-20 text-xl">Loading...</div>} />
     <ToastContainer />
 </AuthProvider>
  </StrictMode>,
)
