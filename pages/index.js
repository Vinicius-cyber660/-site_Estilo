import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'reactstrap'
    


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
    <Container>
      <Row className={"justify-content-md-center"}>
        <Col xs lg={"2"}>
          1 of 3
        </Col>
        <Col md={"auto"}>Variable width content</Col>
        <Col xs lg="2">
          3 of 3
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col md={"auto"}>Variable width content</Col>
        <Col xs lg={"2"}>
          3 of 3
        </Col>
      </Row>
    </Container>
    </>
  )
}

