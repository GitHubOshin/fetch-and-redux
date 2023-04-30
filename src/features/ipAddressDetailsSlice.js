import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {}
}

export const ipAddressDetailsSlice = createSlice({
  name: 'ipAddressData',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.value = action.payload
    }
  }
})
export const { addData } = ipAddressDetailsSlice.actions

export default ipAddressDetailsSlice.reducer
