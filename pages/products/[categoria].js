import { useRouter } from 'next/router'
import { Row, Col } from 'react-bootstrap';
import ProductsSingle from '../../components/ProductsSingle'

/* cria todas as rotas possíveis */
export async function getStaticPaths() {
    /* pega a lista de categorias do servidor e transforma em objeto do tipo json */
    const res = await fetch('https://raw.githubusercontent.com/Vinicius-cyber660/-site_Estilo/master/server/categorias.json');
    const categorias = await res.json();

    /* para cada _categoria, mande (retorne) o nome como parametro para getStaticProps */
    const paths = categorias.map(_categoria => ({
        params: {
            /* "categoria" precisa ser igual o nome do arquivo, e _categoria é só um nome temporário */
            categoria: _categoria.nome
        }
    }));
    return { paths, fallback: false }
}


/* para cada página possivel, vai pegar as propriedades (categorias do server) */
export async function getStaticProps({params}) {
    const res = await fetch(`https://raw.githubusercontent.com/Vinicius-cyber660/-site_Estilo/master/server/categorias.json`);
    const categorias = await res.json();

    /* para cada página, mande (retorne) para página Categoria um item de categorias
    cujo nome seja igual ao parametro passado pela getStaticPaths */
    const item = categorias.find(_categoria => _categoria.nome === params.categoria);

    const p_res = await fetch(`https://raw.githubusercontent.com/Vinicius-cyber660/-site_Estilo/master/server/produtos.json`);
    const produtos = await p_res.json();
    const products = produtos.filter(_produto => _produto.categoria === item.id);
    return { props: { item, products } }
}  


/* recebe o { item } retornado por getStaticProps */
export default function Categoria(  {item, products}  ){
    const router = useRouter()

    return <>
    <h1>Categorias de { item.nome }</h1>
    <h3>Aproveite</h3>
    <br></br>
    
    <Row>
        {
            products.map((_produto, i) => (
                <ProductsSingle product={_produto} categoria={item.nome}/>
            ))
        }
    </Row>
    </>
}