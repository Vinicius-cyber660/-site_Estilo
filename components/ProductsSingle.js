import styles from '../styles/Produtos.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'

export default function ProductsSingle(product){
    return(
        <Link href={"/produto/" + product.product?.nome }>
            <div className={styles.produto}>
                <img src={product.product?.imagens[0]}/>
                <h4>{product.product?.nome}</h4>
                <h3 className={styles.preço}>{product.product?.preco}</h3>
                <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
                <Button variant="success" className={styles.comprar}>Comprar</Button>
            </div>
        </Link>
    )
}