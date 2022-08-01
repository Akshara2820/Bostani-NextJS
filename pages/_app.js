import '../styles/globals.css'
import Home1 from "./home1";

function MyApp({ Component, pageProps }) {
  return <>
  <Home1/>
  <Component {...pageProps} />
  </> 
}

export default MyApp
