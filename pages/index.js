import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'reactstrap'
import Carousel from 'react-bootstrap/Carousel';

export default function Home(){
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
    <h1 id={styles.maisvend}>Mais Vendidos</h1>
    {/* COMENTÁRIO JSX 
      <Container>
      <Row>
        <Col sm={6} md={4} lg={3} xl={3}>
          <Image src="/images/550x550.png" width="300" height="300"/>
        </Col>
        <Col sm={6} md={4} lg={3} xl={3}>
          <div className="singleProduct">
            <div className="productImage">
              <Image src="/images/550x550.png" width="300" height="300"/>
              <div className="botão">
                <Link href="/products/Herois/Miranha">
                  <a style={{textDecoration: 'none',
                             color: '#424646',
                             fontSize: '18px',
                             position: 'relative',
                             bottom: '-10px'}}>Caneca Miranha</a>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={6} md={4} lg={3} xl={3}>
          <Image src="/images/550x550.png" width="300" height="300"/>
        </Col>
        <Col sm={6} md={4} lg={3} xl={3}>
          <Image src="/images/550x550.png" width="300" height="300"/>
        </Col>
      </Row>
    </Container>
    */}
    <div className="carousel">
      <div id={styles.Pmaisvendidos}>
        <div className={styles.produto}>
          <img src="/images/550x550.png"/>
          <h4>Caneca Miranha</h4>
          <h3 className={styles.preço}>R$28.00</h3>
          <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
        </div>
        <div className={styles.produto}>
          <img src="/images/550x550.png"/>
          <h4>Caneca Batma</h4>
          <h3 className={styles.preço}>R$28.00</h3>
          <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
        </div>
        <div className={styles.produto}>
          <img src="/images/550x550.png"/>
          <h4>Caneca Dr. Esquisito</h4>
          <h3 className={styles.preço}>R$28.00</h3>
          <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
        </div>
        <div className={styles.produto}>
          <img src="/images/550x550.png"/>
          <h4>Caneca Tór</h4>
          <h3 className={styles.preço}>R$28,00</h3>
          <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
        </div>
      </div>
    </div>
    </>
  )
}

