import { configureStore } from '@reduxjs/toolkit'
import authSlice  from '../reducer/authSlice/authSlice'
import productSlice  from '../reducer/productsSlice/productsSlice'
import cartSlice  from '../reducer/cartSlice/cartSlice'
import categotySlice  from '../reducer/categotySlice/categorySlice'
import profileSlice from '../reducer/profileSlice/profileSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    product:productSlice,
    cart:cartSlice,
    category:categotySlice,
    profile:profileSlice
  },
})
