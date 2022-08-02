import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home(){
  return(
    <>
    <Head>
      <title>Página Principal</title>
      <meta name="keyworkds" content="Caneca, Personalizado"></meta>
    </Head>
    <div>
      <div id={styles.banner}>
        <img src="/images/Banner.png"/>
      </div>    
      <div id={styles.minibanners}>
        <div>
          <img src="/images/teste1.png"/>
        </div>
        <div>
          <img src="/images/teste2.png"/>
        </div> 
      </div>
    </div>
    <h1 id={styles.maisvend}>Mais Vendidos</h1>

    </>
  )
}

