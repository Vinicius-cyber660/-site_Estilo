import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductsCarousel from '../components/ProductCarousel';

export async function getStaticProps() {  
  const c_res = await fetch('https://site-estilo-refactored.vercel.app/api/produtos-categoria')
  const produtos_categorias = await c_res.json().then((data) => data.data ).catch((error) => console.log(error));

  return { props: { produtos_categorias: JSON.parse(JSON.stringify(produtos_categorias)) } }
}  

export default function Home({produtos_categorias}){
  if(!produtos_categorias) return null

  return(
    <>
    <Head>
      <title>Estilo Criação: Página Principal</title>
      <meta name="keyworkds" content="Caneca, Personalizado"></meta>
    </Head>
    
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Banner.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Link href="/produtos/Com Foto">
          <img
            className="d-block w-100"
            id={styles.banner2}
            src="/images/Banner2.png"
            alt="Second slide"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Banner3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

      <div id={styles.minibanners}>
        <div className={styles.mnBanner}>
          <img src="/images/teste1.png" alt="especiais 1"/>
        </div>
        <div className={styles.mnBanner}>
          <img src="/images/teste2.png" alt="especiais 2"/>
        </div> 
      </div>
    </div>

    {
      produtos_categorias.map((objeto) => {
        return <>
          <Row className="text-center mt-4" id={styles.nomeCar}><h1>{objeto.categoria}</h1></Row>
          <ProductsCarousel itens={objeto.produtos}/>
        </>
      })
    }
    </>
  )
}

