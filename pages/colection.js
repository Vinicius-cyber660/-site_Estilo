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
import { getProdutosComImagem, getProdutosFromCategoria } from '../services/ProdutosService';
import { getCategorias } from '../services/CategoriasService';

export async function getStaticProps() {
    const produtos = await getProdutosComImagem();
    const categorias = await getCategorias();

    let produtos_categorias = [];
  
    categorias.map((categoria) => {
      produtos_categorias.push(
        {
          "categoria": categoria.categoria.descricao, 
          "produtos": produtos.filter((item) => item.produto.categoria.id == categoria.categoria.id)
        }
      )
    })
  
    return { props: { produtos_categorias } }
  }  

export default function colection({produtos_categorias}){
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