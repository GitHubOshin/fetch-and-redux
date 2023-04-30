import { configureStore } from '@reduxjs/toolkit'
import ipAddressDetailsReducer from '../features/ipAddressDetailsSlice'

export const store = configureStore({
  reducer: {
    ipAddressData: ipAddressDetailsReducer
  }
})
