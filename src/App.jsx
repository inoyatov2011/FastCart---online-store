import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Layout from './pages/layout/layout'
import CommerceHomePage from './pages/e-commerceHomePage/E-commerceHomePage'
import CommerceProduct from './pages/E-CommerceProducts/E-commerceProduct'
import Wishlist from './pages/Wishlist/wishlist'
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage'
import Cart from './pages/cart/cart'
import CheckOut from './pages/checkOut/checkOut'
import Account from './pages/Account/account'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import LogIn from './pages/logIn/logIn'
import SignUp from './pages/signUp/signUp'
import { ToastContainer } from "react-toastify";
const App = () => {
  let router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<CommerceHomePage/>}/>
      <Route path='/commerceRroduct' element={<CommerceProduct/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/productDetails/:id' element={<ProductDetailsPage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkOut' element={<CheckOut/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/logIn' element={<LogIn/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
    </Route>
  ))
  return (
    <div>
      <RouterProvider router={router}/>
       <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default App
