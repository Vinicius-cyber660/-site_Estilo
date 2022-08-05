import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Carousel2 from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2
  }
}; 

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
    <h1 className={styles.maisvend}>Mais Vendidos</h1>
    

    <div className={styles.CarrosselP}>
      <Carousel2 responsive={responsive} infinite={true}>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
              <img src="/images/550x550.png"/>
              <h4>Caneca Miranha</h4>
              <h3 className={styles.preço}>R$28,00</h3>
              <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
              <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
      </Carousel2>
      </div>

      <h1 className={styles.maisvend}>Heróis</h1>

      <div className={styles.CarrosselP}>
      <Carousel2 responsive={responsive} infinite={true}>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
              <img src="/images/550x550.png"/>
              <h4>Caneca Miranha</h4>
              <h3 className={styles.preço}>R$28,00</h3>
              <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
              <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
      </Carousel2>
      </div>

      <h1 className={styles.maisvend}>Animes</h1>

      <div className={styles.CarrosselP}>
      <Carousel2 responsive={responsive} infinite={true}>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
              <img src="/images/550x550.png"/>
              <h4>Caneca Miranha</h4>
              <h3 className={styles.preço}>R$28,00</h3>
              <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
              <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
      </Carousel2>
      </div>

      <h1 className={styles.maisvend}>Times</h1>

      <div className={styles.CarrosselP}>
      <Carousel2 responsive={responsive} infinite={true}>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
              <img src="/images/550x550.png"/>
              <h4>Caneca Miranha</h4>
              <h3 className={styles.preço}>R$28,00</h3>
              <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
              <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
        <div className={styles.Pmaisvendidos}>
          <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
          </div>
        </div>
      </Carousel2>
      </div>
    </>
  )
}

