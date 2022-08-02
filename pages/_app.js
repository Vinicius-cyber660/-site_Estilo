import '../styles/globals.css'
import MainContainer from '../components/MainContainer'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return (
  <MainContainer>
    <Component {...pageProps} />
  </MainContainer>
  )
}

export default MyApp
