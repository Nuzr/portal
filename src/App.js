import LoginPage from './pages/LoginPage';
import './App.css';
import ProjmangPage from './pages/ProjmangPage';
import AdminPage from './pages/AdminPage';
import EmployeePage from './pages/EmployeePage';
import {  createBrowserRouter,  Route,  RouterProvider, Routes } from 'react-router-dom';
import { Children, useState } from 'react';
import AllSection from './container/AdminContainer/AllSection';
import Layout from './Layout';
function App() {
  
    
   
 
  
    return(
    <div className="App">
      
  <Routes>
    <Route path="/" element={<LoginPage/>} />
    <Route path="/AdminPage"element={<AdminPage />}>
      <Route path="" element={<AllSection />}/>
      <Route path="/AdminPage/all" element={<AllSection />}/>
    </Route>
    <Route path="/ProjmangPage"element={<ProjmangPage/>}/>
    <Route path="/EmployeePage" element={<EmployeePage/>} />
  </Routes>
    
  

    </div>
  );
}

export default App;
