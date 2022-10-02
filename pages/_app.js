import '../styles/globals.css'
import MainContainer from '../components/MainContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SSRProvider } from 'react-bootstrap'

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
    </SSRProvider>  
  )
}

export default MyApp
