import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../Components/Footer';
import NavbarComp from '../Components/Navbar'
function MyApp({ Component, pageProps }) {
  return(<>

<NavbarComp/>
   <Component {...pageProps} />
<Footer/>
  </>
   )
  }

export default MyApp
