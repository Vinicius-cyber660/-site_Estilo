import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '../../../styles/Home.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default function Batma(){
    return <>
    <h1>Caneca Batma - 28,00R$</h1>

    <Carousel responsive={responsive}>
        <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
        </div>
        <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
        </div>
        <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
        </div>
        <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
        </div>
        <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
        </div>
        <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
        </div>
        <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
        </div>
        <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
        </div>
        <div className={styles.produto}>
            <img src="/images/550x550.png"/>
            <h4>Caneca Miranha</h4>
            <h3 className={styles.preço}>R$28,00</h3>
            <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
            <Button variant="success" className={styles.comprar}>Comprar</Button>
        </div>
    </Carousel>;
    </>
}