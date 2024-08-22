import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addresses: [], // Start with an empty array
  selectedAddressId: null, // No address selected initially
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
    },
    updateAddress: (state, action) => {
      const index = state.addresses.findIndex(address => address.id === action.payload.id);
      if (index !== -1) {
        state.addresses[index] = action.payload;
      }
    },
    deleteAddress: (state, action) => {
      state.addresses = state.addresses.filter(address => address.id !== action.payload);
    },
    selectAddress: (state, action) => {
      state.selectedAddressId = action.payload;
    },
  },
});

export const { addAddress, updateAddress, deleteAddress, selectAddress } = addressSlice.actions;
export default addressSlice.reducer;
