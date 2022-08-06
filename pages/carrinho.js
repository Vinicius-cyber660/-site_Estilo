import styles from '../styles/Produtos.module.css'
import Button from 'react-bootstrap/Button';

export default function carrinho(){
    return(<>
    <h1>Carrinho</h1>
    <div className={styles.Pmaisvendidos}>
        <a href="/">
            <div className={styles.produto}>
                <img src="/images/550x550.png"/>
                <h4>Caneca Miranha</h4>
                <h3 className={styles.preço}>R$28,00</h3>
                <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
                <Button variant="success" className={styles.comprar}>Comprar</Button>
            </div>
        </a>
    </div>
    </>)
}