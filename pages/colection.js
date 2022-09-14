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

export default function colection({produtos, categorias}){
    return(
    <>
    <Head>
        <title>Estilo Crição: Coleções</title>
    </Head>
    {
      categorias.map((categoria) => {
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