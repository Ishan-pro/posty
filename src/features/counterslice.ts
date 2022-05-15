import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface CounterState {
    value:number;
}

const initialState:CounterState = {
    value:0
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        incremented(state) {
            state.value ++;
        },
        amountadded(state, action:PayloadAction<number>) {
            state.value +=action.payload
        },
        decrement(state) {
            state.value --;
        }
    }
})

export const {incremented, amountadded, decrement} = counterSlice.actions

export default counterSlice.reducer;