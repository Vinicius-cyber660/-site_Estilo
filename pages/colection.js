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

    return { props: { produtos_categorias } }
  }  

export default function colection({produtos_categorias}){
    if(!produtos_categorias) return null
    return(
    <>
    <Head>
        <title>Estilo Crição: Coleções</title>
    </Head>
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