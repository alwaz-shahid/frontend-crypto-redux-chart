import '../styles/globals.css'
import '../styles/common.css'
import store from "../app/store"
import { Provider } from 'react-redux'
function MyApp({ Component, pageProps }) {



  return (
    <section className="max-w-7xl mx-auto">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </section>
  )
}

export default MyApp
