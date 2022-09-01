import { useRouter } from 'next/router'
import { Row, Col } from 'react-bootstrap';
import ProductsSingle from '../../components/ProductsSingle'
import styles from '../../styles/Categorias.module.css'

/* cria todas as rotas possíveis */
export async function getStaticPaths() {
    /* pega a lista de categorias do servidor e transforma em objeto do tipo json */
    const _res = await fetch(`https://bling.com.br/Api/v2/categorias/json/&apikey=eda45968702e9e3ff10bb3dbd0fdd14286ecac428363231ed48271ad38fb7067b8578dbc`);
    const resc = await _res.json();
    const categorias = resc.retorno.categorias;

    /* para cada _categoria, mande (retorne) o nome como parametro para getStaticProps */
    const paths = categorias.map(_categoria => ({
        params: {
            /* "categoria" precisa ser igual o nome do arquivo, e _categoria é só um nome temporário */
            categoria: _categoria.categoria.descricao
        }
    }));
    return { paths, fallback: false }
}


/* para cada página possivel, vai pegar as propriedades (categorias do server) */
export async function getStaticProps({params}) {
    const _res = await fetch(`https://bling.com.br/Api/v2/categorias/json/&apikey=eda45968702e9e3ff10bb3dbd0fdd14286ecac428363231ed48271ad38fb7067b8578dbc`);
    const resc = await _res.json();
    const categorias = resc.retorno.categorias;

    /* para cada página, mande (retorne) para página Categoria um item de categorias
    cujo nome seja igual ao parametro passado pela getStaticPaths */
    const item = categorias.find(_categoria => _categoria.categoria.descricao === params.categoria);

    const p_res = await fetch(`https://bling.com.br/Api/v2/produtos/json/&apikey=eda45968702e9e3ff10bb3dbd0fdd14286ecac428363231ed48271ad38fb7067b8578dbc&imagem=S`);
    const resp = await p_res.json();
    const products = resp.retorno.produtos.filter((produto) => produto.produto.categoria.id == item.categoria.id);
    return { props: { item, products } }
}  


/* recebe o { item } retornado por getStaticProps */
export default function Categoria(  {item, products}  ){
    const router = useRouter()

    return <>
    <h1 id={styles.titulo}>Categorias de { item.categoria.descricao }</h1>
    <br></br>
    <div id={styles.corpo}>
        <Row>
            {
            products.map((_produto, i) => (
                <Col xs={12} sm={6} md={6} lg={3} xl={3} key={_produto?.produto.id}>
                    <ProductsSingle product={_produto}/>
                </Col>
            ))
            }
        </Row>
    </div>
    </>
}