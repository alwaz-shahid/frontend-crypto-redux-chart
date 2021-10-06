import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../services/cryptoApi'
import { jsonApi } from '../services/jsonApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/pokemon'
const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        // [jsonApi.reducerPath]: jsonApi.reducer,
        // [pokemonApi.reducerPath]: pokemonApi.reducer

    },
    // Adding the api middleware enables caching, invalidation, polling,  // and other useful features of `rtk-query`.
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoApi.middleware),
})
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

export default store