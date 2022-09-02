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
  let res = await fetch(`https://bling.com.br/Api/v2/produtos/json/&apikey=eda45968702e9e3ff10bb3dbd0fdd14286ecac428363231ed48271ad38fb7067b8578dbc&imagem=S`);
  const resp = await res.json();
  const produtos = resp.retorno.produtos;

  let _res = await fetch(`https://bling.com.br/Api/v2/categorias/json/&apikey=eda45968702e9e3ff10bb3dbd0fdd14286ecac428363231ed48271ad38fb7067b8578dbc`);
  const resc = await _res.json();
  const categorias = resc.retorno.categorias;

  return { props: { produtos, categorias } }
}  

export default function Home({produtos, categorias}){
  console.log(categorias);
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
        <div className={styles.mnBanner}>
          <img src="/images/teste1.png" alt="especiais 1"/>
        </div>
        <div className={styles.mnBanner}>
          <img src="/images/teste2.png" alt="especiais 2"/>
        </div> 
      </div>
    </div>
    {
      categorias.slice(0,5).map((categoria) => {
        console.log(categoria);
        let _produtos = produtos.filter((item) => item.produto.categoria.id == categoria.categoria.id )
        console.log(_produtos);
        return <>
          <Row className="text-center mt-4" id={styles.nomeCar}><h1>{categoria.categoria.descricao}</h1></Row>
          <ProductsCarousel itens={_produtos}/>
        </>
      })
    }

    </>
  )
}

