import '../styles/globals.css'
import Layout from '../components/Layout.js'
import { StateContext } from "../lib/context"
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {



  return (
 

      <StateContext>
        <Layout>
        <iframe 
  src="https://www.youtube.com/embed/WeA7yYSCiRE?autoplay=1&mute=1&controls=0&showinfo=0&rel=0" 
  allow="autoplay; fullscreen"
  allowFullScreen
  style={{
    width: "100%", 
    height: "100%", 
    objectFit: "cover", 
    position: "fixed", 
    top: 0, 
    left: 0, 
    bottom: 0, 
    right: 0, 
    zIndex: 0
  }}
></iframe>

          <Component {...pageProps} />
        </Layout>
      </StateContext>


    )
}

export default MyApp
