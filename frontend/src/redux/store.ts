import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import { loginApi } from './services/loginServices'
import { setupListeners } from '@reduxjs/toolkit/query/react';


export const store = configureStore({
  reducer: {
   userReducer,
   [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(loginApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)