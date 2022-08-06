import styles from '../styles/Produtos.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function ProductsSingle(){
    return(
        <Col xl={3} xs={6}>
            <div className={styles.Pmaisvendidos}>
                <div className={styles.produto}>
                    <img src="/images/550x550.png"/>
                    <h4>Caneca Miranha</h4>
                    <h3 className={styles.preço}>R$28,00</h3>
                    <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
                    <Button variant="success" className={styles.comprar}>Comprar</Button>
                </div>
            </div>
        </Col>
    )
}