import '../styles/globals.css'
import Layout from '../components/Layout.js'
import { StateContext } from "../lib/context"
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {



  return (
 

      <StateContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateContext>


    )
}

export default MyApp
