import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import NavLayout from './components/NavLayout';
import Home from "./pages/home"
import About from "./pages/about"
import Shop from "./pages/shop"
import ItemDetails from './pages/itemDetails';
import Orders from './pages/orders';
import AuthRequired from './pages/AuthRequired';
import NotFound from './pages/notFound';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavLayout />}>
          <Route path='/' element={<Home/>} />
          <Route path="about" element={<About />}/>
           <Route path='login' element={<Login/>}/>
           
        <Route element={<AuthRequired/>}>
          <Route path="shop" element={<Shop />}/>
          <Route path="shop/:id" element={<ItemDetails/>} />
          <Route path="orders" element={<Orders/>}/>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>

);