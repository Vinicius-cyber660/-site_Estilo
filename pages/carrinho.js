import styles from '../styles/Produtos.module.css'
import Button from 'react-bootstrap/Button';
import Link from 'next/link'
import Head from 'next/head';

export default function carrinho(){
    return(<>
    <Head>
        <title>Estilo Criação: Carrinho</title>
    </Head>
    <div className={styles.corpo}>
        <h1 id={styles.carrinho}>O Carrinho está Vazio</h1>
        <Link href="/">
            <div id={styles.àsCompras}>
                <button id={styles.compras}>Ir às compras</button>
            </div>
        </Link>
    </div>
    
    </>)
}