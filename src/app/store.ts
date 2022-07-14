import {configureStore} from '@reduxjs/toolkit'
import CounterReducer from '../features/counterslice'
import { photoApi } from '../features/photos';

export const store = configureStore({
    reducer:{
        counter:CounterReducer,
        [photoApi.reducerPath]:photoApi.reducer
    },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>