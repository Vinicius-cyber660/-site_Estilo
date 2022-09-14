import Link from "next/link"
import { Button } from "reactstrap"
import styles from '../styles/Home.module.css'
import { useState } from "react"

export default function ProductsC({item}){

    const [num, setNum]=useState(1)

    return(
        <Link href={"/produto/" + item?.produto.descricao}>
            <div className={styles.Pmaisvendidos}>
                <div className={styles.produto} id={styles.delimitador}>
                <img src={item?.produto?.imagem[num]?.link} onMouseEnter={() => setNum(3)} onMouseLeave={() => setNum(1)}/>;
                <h4>{item?.produto.descricao}</h4>
                <h3 className={styles.preço}>R${Number.parseFloat(item?.produto.preco).toFixed(2)}</h3>
                <p>até <strong>3x</strong> de <strong>R${Number.parseFloat(item?.produto.preco/3).toFixed(2)}</strong> sem juros</p>
                <Button variant="success" className={styles.comprar}>Comprar</Button>
                </div>
            </div>
        </Link>
    )
}