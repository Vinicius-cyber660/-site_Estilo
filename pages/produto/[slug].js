import { useRouter } from 'next/router'
import { Row, Col } from 'react-bootstrap';
import ProductsSingle from '../../components/ProductsSingle'
import styles from '../../styles/PaginaProduto.module.scss'
import React from 'react';
import {useRef, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ProductsCarousel from '../../components/ProductCarousel';

export async function getStaticPaths() {
    const res = await fetch('http://localhost:4000/produtos');
    const produtos = await res.json();

    const paths = produtos.map(_produto => ({
        params: {
            slug: _produto.nome,
        }
    }));
    return { paths, fallback: false }
}


export async function getStaticProps({params}) {
    const res = await fetch(`https://raw.githubusercontent.com/Vinicius-cyber660/-site_Estilo/master/server/produtos.json`);
    const produtos = await res.json();

    const item = produtos.find(_produto => _produto.nome === params.slug);

    return { props: { item } }
}  


export default function Produto(  {item}  ){
    const router = useRouter()

    const { slug } = router.query

    return <>
    <div className={styles.corpo}>
        <div id={styles.teste}>
            <div id={styles.MiniProduto}>
                <img className={styles.carrossel} src={item?.imagens[1]}/>
                <img className={styles.carrossel} src="/images/550x550.png"/>
                <img className={styles.carrossel} src="/images/550x550.png"/>
                <img className={styles.carrossel} src="/images/550x550.png"/>
            </div>
            <div id={styles.Produto}>
                <img src={item?.imagens[0]}/>
            </div> 
        </div>


        <div id={styles.detalhes}>
            <h1>{item?.nome}</h1>
            <hr/>
            <h2>R$28,00</h2>
            <p>até <strong>3x</strong> de <strong>R$9.33</strong> sem juros</p>
            <div id={styles.info}>
                <div id={styles.payments}>
                    <img src="/images/payments.png"/><p>parcelas</p>
                </div>
                <hr/>
                <strong>1x</strong> de <strong>R$ 28,00</strong> sem juros<br/>
                <strong>2x</strong> de <strong>R$ 14,00</strong> sem juros<br/>
                <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros<br/>
                <hr/>
                <div id={styles.pix}>
                    <img src="/images/pix-106.png"/><p><strong>R$28,00</strong></p>
                </div>
                <hr/>
                <div id={styles.boleto}>
                    <img src="/images/boleto.png"/><p><strong>R$28,00</strong></p>
                </div>
            </div>
            <div id={styles.botão}>
                <InputGroup className="mb-3" id={styles.qntd}>
                    <Button variant="outline-secondary" className={styles.menos} id="button-addon2">
                    -
                    </Button>
                    <Form.Control
                    id={styles.pesquisa}
                    type="number"
                    defaultValue="1"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" className={styles.mais} id="button-addon2">
                    +
                    </Button>
                </InputGroup>
                <button id={styles.comprar}>comprar</button>
            </div>
            <hr/>
            <div>
                <div id={styles.frete}>
                    Calcule o frete
                    <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="CEP"
                        aria-label="CEP"
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                        Calcular
                        </Button>
                    </InputGroup>
                </div>
            </div>
        </div> 
    </div>
    <div id={styles.descrição}>
        <h1>descrição</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil harum dolores recusandae? Dicta consequatur architecto, omnis, voluptatibus illum commodi quam neque nostrum repudiandae ullam quos incidunt deserunt non quis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quae fugiat dignissimos omnis ex esse voluptate quasi accusamus repellendus illo atque saepe hic, voluptates voluptatum facere laboriosam vel sit quis?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eos, facere rerum, autem eaque eius magni quo consequuntur ipsa nulla tenetur, temporibus soluta fuga? Optio aspernatur laboriosam dolore autem quasi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus nesciunt, tempore nemo temporibus praesentium aliquam consequuntur necessitatibus blanditiis excepturi accusamus pariatur laudantium id quis repellat iure quibusdam recusandae deserunt.
        </p>
    </div>
    <h2 id={styles.aproveite}>Aproveite tambem</h2>
    <ProductsCarousel/>
    </>
}