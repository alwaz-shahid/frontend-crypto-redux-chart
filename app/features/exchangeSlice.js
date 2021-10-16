import { createSlice } from "@reduxjs/toolkit"
import { data } from '../../utils/samples/exchangeSample'
const exchangeSlice = createSlice({
    name: "exchange",
    initialState: data,
    reducers: {
        setExchanges(state, action) {
            state.data = action.payload;
            // console.log(JSON.stringify(state.data));
            // console.log(action)
        },
    }
})

// console.log(exchangeSlice)
export const { setExchanges } = exchangeSlice.actions

export default exchangeSlice.reducer
// console.log(setCryptos({ id: 123, title: 'Hello World' }))