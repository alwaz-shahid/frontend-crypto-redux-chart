import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../services/cryptoApi'

import { setupListeners } from '@reduxjs/toolkit/query'
import { newsApi } from '../services/NewsApi'

const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,  // and other useful features of `rtk-query`.

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoApi.middleware),
})
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

export default store