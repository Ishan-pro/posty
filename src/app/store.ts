import { userApi } from './../features/user.api';
import {configureStore} from '@reduxjs/toolkit'
import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

export const store = configureStore({
    reducer:{
        [userApi.reducerPath]:userApi.reducer,
    },
    middleware:(curryGetDefaultMiddleware) =>
        curryGetDefaultMiddleware().concat(userApi.middleware)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>