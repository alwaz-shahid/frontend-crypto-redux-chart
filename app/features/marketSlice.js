import { createSlice } from "@reduxjs/toolkit"
import { data } from '../../utils/samples/marketsSample'
const marketSlice = createSlice({
    name: "markets",
    initialState: data,
    reducers: {
        setCryptos(state, action) {
            state.data = action.payload;
            // console.log(JSON.stringify(state.data));
            // console.log(action)
        },
    }
})

// console.log(cryptoSlice)
export const { getCryptos, setCryptos } = cryptoSlice.actions

export default cryptoSlice.reducer
// console.log(setCryptos({ id: 123, title: 'Hello World' }))