import '../styles/globals.css'
import '../styles/components.css'
import '../styles/tailwind.css'
import store from "../app/store"
import { Provider } from 'react-redux'
import Layout from '../components/layout/Layout'
function MyApp({ Component, pageProps }) {



  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
