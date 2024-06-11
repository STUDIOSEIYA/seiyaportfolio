import '../styles/globals.css'
import Layout from '../components/Layout.js'
import { StateContext } from "../lib/context"
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <video
          src="/assets/video/showreel.mp4"
          autoPlay
          muted
          loop
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
        ></video>

        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
