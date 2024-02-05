import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllProducts from '../pages/allProducts/AllProducts'
import OneProduct from '../pages/oneProduct/OneProduct'
import Register from '../pages/register/Register'
import Login from '../pages/login/Login'
import Order from '../pages/order/Order'
import Unauthorized from '../pages/Unauthorized/Unauthorized'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<AllProducts />} />
        <Route path='/product/:id' element={<OneProduct />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/order' element={<Order />} />
        <Route path='/unauthorized' element={<Unauthorized />} />
    </Routes>
  )
}

export default AppRoutes