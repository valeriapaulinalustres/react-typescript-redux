import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import { loginApi } from './services/loginServices'
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { clientApi } from './services/clientServices';
import { inboundCaseApi } from './services/inboundCaseServices';
import clientsReducer from './features/clients/clientsSlice'
import inboundCasesReducer from './features/inboundCases/inboundCasesSlice'

export const store = configureStore({
  reducer: {
   userReducer,
   clientsReducer,
   inboundCasesReducer,
   [loginApi.reducerPath]: loginApi.reducer,
   [clientApi.reducerPath]: clientApi.reducer,
   [inboundCaseApi.reducerPath]: inboundCaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(loginApi.middleware, clientApi.middleware, inboundCaseApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)