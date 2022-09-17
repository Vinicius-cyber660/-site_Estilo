import styles from '../../styles/Produtos.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProductsSingle from '../../components/ProductsSingle';
import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';
import { getProdutosComImagem } from '../../services/ProdutosService';
import { useRouter } from 'next/router'
import Head from 'next/head';

export async function getStaticProps() {
    const produtos = await getProdutosComImagem();

  return { props: { produtos } }
}  

export default function Productss({produtos}){
  const router = useRouter();
  if (router.isFallback) {
    return <div>Carregando...</div>
  }

  if(!produtos) return null

  const [active, setActive] = useState(1);
  const produtos_por_pagina = 16;

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
      {
        produtos.slice((active-1)*produtos_por_pagina, active*produtos_por_pagina).map((produto) => (
          <Col xl={3} lg={3} md={4} sm={6} xs={12} key={produto.produto?.id}>
            <ProductsSingle product={produto}/>
          </Col>
      ))
      }
  </Row>
  
  
  <div className={styles.paginas}>
      <Pagination size="sm">{items}</Pagination>
  </div>
  </div>
  
  </>
  
  )
}