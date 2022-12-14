import { useRouter } from 'next/router'
import { Row, Col, FormControl } from 'react-bootstrap';
import ProductsSingle from '../../components/ProductsSingle'
import styles from '../../styles/PaginaProduto.module.scss'
import { React, useState } from 'react';
import {useRef, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ProductsCarousel from '../../components/ProductCarousel';
import VerticalCarousel from '../../components/VerticalCarousel';
import HorizontalCarousel from '../../components/HorizontalCarousel';
import Head from 'next/head'
import { ReactDOM } from 'react-dom';

export async function getStaticPaths() {
    const p_res = await fetch('https://site-estilo-refactored.vercel.app/api/produto/')
    const produtos = await p_res.json().then((data) => data.data ).catch((error) => console.log(error));
    
    const paths = produtos.map(_produto => ({
        params: {
            slug: _produto.produto.descricao,
        }
    }));
    return { paths, fallback: false }
}

export async function getStaticProps({params}) {
    const i_res = await fetch('https://site-estilo-refactored.vercel.app/api/produto/'+params.slug+'/com-imagem');
    const item = await i_res.json().then((data) => data.data ).catch((error) => console.log(error));

    const p_res = await fetch('https://site-estilo-refactored.vercel.app/api/categoria/'+item?.categoria.descricao+'/produtos/');
    const produtos_categoria = await p_res.json().then((data) => data.data ).catch((error) => console.log(error));

    /* const produtos_categoria = await getProdutosFromCategoria(item?.categoria.id); */
    const hashed_props = JSON.parse(JSON.stringify({
        item: item,
        produtos_categoria: produtos_categoria
    }))

    return { props: { hashed_props } }
}  
    

export default function Produto(  {hashed_props}  ){
    const router = useRouter()
    const { slug } = router.query
    const {item, produtos_categoria} = hashed_props
    
    if (router.isFallback) {
        return <div>Carregando...</div>
    }

    if(!item || !produtos_categoria) return null

    let [num, setNum] = useState(1);
    
    return <>
    <Head>
        <title>Estilo Cria????o: {item?.descricao}</title>
    </Head>
    
    <div className={styles.corpo}>
        <div id={styles.carVertical}>
            <VerticalCarousel item={item}/>
        </div>
        <div id={styles.teste}>
            <div id={styles.Produto}>
                <h1 id={styles.CELtitulo}>{item?.descricao}</h1>
                <img src={item?.imagem[0]?.link}/>
            </div> 
        </div>
        <div id={styles.carHorizontal}>
            <HorizontalCarousel item={item}/>
        </div>
        <div id={styles.detalhes}>
            <h1 id={styles.PCtitulo}>{item?.descricao}</h1>
            <hr/>
            <h2>R$28,00</h2>
            <p>at?? <strong>3x</strong> de <strong>R$9.33</strong> sem juros</p>
            <div id={styles.info}>
                <div id={styles.payments}>
                    <img src="/images/payments.png"/><p>parcelas</p>
                </div>
                <hr/>
                <strong>1x</strong> de <strong>R$ {Number.parseFloat(item?.preco/1).toFixed(2)}</strong> sem juros<br/>
                <strong>2x</strong> de <strong>R$ {Number.parseFloat(item?.preco/2).toFixed(2)}</strong> sem juros<br/>
                <strong>3x</strong> de <strong>R$ {Number.parseFloat(item?.preco/3).toFixed(2)}</strong> sem juros<br/>
                <hr/>
                <div id={styles.pix}>
                    <img src="/images/pix-106.png"/><p><strong>R$28,00</strong></p>
                </div>
                <hr/>
                <div id={styles.boleto}>
                    <img src="/images/boleto.png"/><p><strong>R$28,00</strong></p>
                </div>
            </div>
            <div id={styles.bot??o}>
                <InputGroup className="mb-3" id={styles.qntd}>
                    <Button onClick={num > 1 ? () => setNum(num-1) : console.log('')} variant="outline-secondary" className={styles.menos} id="button-addon2">
                    -
                    </Button>
                    <Form.Control
                    id={styles.pesquisa}
                    type="number"
                    value={num}
                    aria-describedby="basic-addon2"
                    />
                    <Button onClick={() => setNum(num+1)} variant="outline-secondary" className={styles.mais} id="button-addon2">
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
    <div id={styles.descri????o}>
        <h1>descri????o</h1>
        <div id={styles.descricaoCurta}>
            <div dangerouslySetInnerHTML={{__html: item?.descricaoCurta}}/>
        </div>
    </div>
    <h2 id={styles.aproveite}>Aproveite tamb??m</h2>
    <div className="carrosel" key={item?.id}>
        <ProductsCarousel itens={produtos_categoria}/>
    </div>
    </>
}