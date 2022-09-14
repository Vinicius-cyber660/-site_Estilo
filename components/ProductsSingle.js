import styles from '../styles/Produtos.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'
import { useState } from 'react';

export default function ProductsSingle(product){

    const [num, setNum]=useState(1)

    return(
        <Link href={"/produto/" + product.product?.produto.descricao }>
            <div className={styles.produto} id={styles.delimitador}>
                <img src={product.product?.produto.imagem[num].link} onMouseEnter={() => setNum(3)} onMouseLeave={() => setNum(1)}/>
                <h4>{product.product?.produto.descricao}</h4>
                <h3 className={styles.preço}>R$ {Number.parseFloat(product.product?.produto.preco).toFixed(2)}</h3>
                <p>até <strong>3x</strong> de <strong>R$ {Number.parseFloat(product.product?.produto.preco/3).toFixed(2)}</strong> sem juros</p>
                <Button variant="success" className={styles.comprar}>Comprar</Button>
            </div>
        </Link>
    )
}