// src/Store/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer from '@/utils/productSlice';
import userReducer from '@/utils/authSlice';
import creatorReducer from '@/utils/creatorSlice';
import cartReducer from '@/utils/cartSlice';
import communityReducer from '@/utils/communitySlice';
import loginTypeReducer from '@/utils/loginTypeSlice';
import thunk from 'redux-thunk';
import wishlistReducer from '@/utils/wishlistSlice';
import addressReducer from '@/utils/addressSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    middleware: [thunk],
    blacklist: ['cart'], // Exclude cart from persistence
};

const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer,
    cart: cartReducer,
    community: communityReducer,
    wishlist: wishlistReducer,
    creator: creatorReducer,
    loginType: loginTypeReducer,
    address: addressReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
