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
import VerticalCarousel from '../../components/VerticalCarousel';
import { getProdutos, getProdutosComImagem, getProdutoComImagemByName } from '../../services/ProdutosService';

export async function getStaticPaths() {
    const produtos = await getProdutos();
    const paths = produtos.map(_produto => ({
        params: {
            slug: _produto.produto.descricao,
        }
    }));
    return { paths, fallback: 'blocking' }
}

export async function getStaticProps({params}) {
    const produtos = await getProdutosComImagem();
    const item = await getProdutoComImagemByName(params.slug)

    return { props: { item , produtos} }
}  


export default function Produto(  {item=null, produtos=null}  ){
    const router = useRouter()
    const { slug } = router.query

    let produtos_categoria = produtos.filter((produto) => produto.produto.categoria.id == item.categoria.id);
    
    if (router.isFallback) {
        return <div>Carregando...</div>
    }
    
    return <>
    
    <div className={styles.corpo}>
        <div id={styles.carVertical}>
            <VerticalCarousel item={item}/>
        </div>
        <div id={styles.teste}>
            <div id={styles.Produto}>
                <img src={item?.imagem[2]?.link}/>
            </div> 
        </div>
        <div id={styles.detalhes}>
            <h1>{item?.descricao}</h1>
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
        <p>{item?.descricaoCurta}
        </p>
    </div>
    <h2 id={styles.aproveite}>Aproveite também</h2>
    <div className="carrosel" key={item?.id}>
        <ProductsCarousel itens={produtos_categoria}/>
    </div>
    </>
}