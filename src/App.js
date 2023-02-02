import LoginPage from './pages/LoginPage';
import './App.css';
import ProjmangPage from './pages/ProjmangPage';
import AdminPage from './pages/AdminPage';
import EmployeePage from './pages/EmployeePage';
import {  createBrowserRouter,  RouterProvider } from 'react-router-dom';
import { Children, useState } from 'react';
import AllSection from './container/AdminContainer/AllSection';
import Layout from './Layout';
function App() {
  const router=createBrowserRouter([
    {path:"/",element:<LoginPage/>},
    {path:"/AdminPage",element:<AdminPage/>,
     Children:[{index:true ,path:"all",element:<AllSection/>} ]                                     
  },
    {path:"/ProjmangPage",element:<ProjmangPage/>},
    {path:"/EmployeePage",element:<EmployeePage/>}
  ])
  
    return(
    <div className="App">
      
      <RouterProvider router={router} />
    
  

    </div>
  );
}

export default App;
