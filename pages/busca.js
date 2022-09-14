import styles from '../styles/Produtos.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProductsSingle from '../components/ProductsSingle';
import Pagination from 'react-bootstrap/Pagination';
import { useState, useEffect } from 'react';
import { getProdutosComImagem } from '../services/ProdutosService';
import { useRouter } from 'next/router'
import Head from 'next/head';
import axios from 'axios';

export async function getStaticProps() {
    const produtos = await getProdutosComImagem();

  return { props: { produtos } }
}  

export default function busca({produtos}){
  const [series, setSeries] = useState([])
  const urlAPI = "https://bling.com.br/Api/search/v2?" + "query=Coringa" + "&apikey=eda45968702e9e3ff10bb3dbd0fdd14286ecac428363231ed48271ad38fb7067b8578dbc&imagem=S"
  
  useEffect(() => { load() },[])

  async function load(){
    try{
      const resposta = await axios.get(urlAPI)
      setSeries(resposta.data.results)
    }catch(erro){
      console.log(erro)
    }
  }

  const router = useRouter();
  if (router.isFallback) {
    return <div>Carregando...</div>
  }

  const [active, setActive] = useState(1);
  const produtos_por_pagina = 8;

  let items = [];
  const paginas = Math.ceil(produtos.length/produtos_por_pagina);
  for (let number = 1; number <= paginas; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={()=>{
        setActive(number);
        }}>
        {number}
      </Pagination.Item>,
    );
  }

  return (<>
  <Head>
    <title>Estilo Criação: Produtos</title>
  </Head>
  <div id={styles.corpo}>
  <h1 className={styles.titulo}>Página de Produtos</h1>
  <Row>
      <Col xl={3} lg={3} md={4} sm={6} xs={12}>
        {produtos.map((produto) => <ProductsSingle key={produtos.id} product={produto}/>)}
      </Col>
  </Row>
  
  
  <div className={styles.paginas}>
      <Pagination size="sm">{items}</Pagination>
  </div>
  </div>
  
  </>
  
  )
}