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
  let res = await fetch(`https://raw.githubusercontent.com/Vinicius-cyber660/-site_Estilo/master/server/produtos.json`);
  const produtos = await res.json();

  let _res = await fetch(`https://raw.githubusercontent.com/Vinicius-cyber660/-site_Estilo/master/server/categorias.json`);
  const categorias = await _res.json();

  return { props: { produtos, categorias } }
}  

export default function Home({produtos, categorias}){
  return(
    <>
    <Head>
      <title>Página Principal</title>
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
        <img
          className="d-block w-100"
          src="/images/Banner2.png"
          alt="Second slide"
        />
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
        <div>
          <img src="/images/teste1.png"/>
        </div>
        <div>
          <img src="/images/teste2.png"/>
        </div> 
      </div>
    </div>
    {
      categorias.map((categoria) => {
        let _produtos = produtos.filter((item) => item.categoria == categoria.id )
        console.log(_produtos);
        return <>
            <ProductsCarousel itens={_produtos}/>
        </>
      })
    }

    </>
  )
}

