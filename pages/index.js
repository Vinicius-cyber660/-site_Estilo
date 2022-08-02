import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home(){
  return(
    <>
    <Head>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
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
    <div class="container"> dea</div>
    </>
  )
}

