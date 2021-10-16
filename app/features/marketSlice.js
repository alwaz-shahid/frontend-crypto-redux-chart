import { createSlice } from "@reduxjs/toolkit"
import { data } from '../../utils/samples/marketsSample'
const marketSlice = createSlice({
    name: "market",
    initialState: data,
    reducers: {
        setExchanges(state, action) {
            state.data = action.payload;
            // console.log(JSON.stringify(state.data));
            // console.log(action)
        },
    }
})

// console.log(marketSlice)
export const {  setExchanges } = marketSlice.actions

export default marketSlice.reducer
// console.log(setExchanges({ id: 123, title: 'Hello World' }))