import { useRouter } from 'next/router'
import { Row, Col } from 'react-bootstrap';
import ProductsSingle from '../../../components/ProductsSingle'

/* cria todas as rotas possíveis */
export async function getStaticPaths() {
    /* pega a lista de categorias do servidor e transforma em objeto do tipo json */
    const res = await fetch('http://localhost:4000/produtos');
    const produtos = await res.json();

    const catgres = await fetch('http://localhost:4000/produtos');
    const categorias = await catgres.json() 

    /* para cada _categoria, mande (retorne) o nome como parametro para getStaticProps */
    const paths = produtos.map(_produto => ({
        params: {
            /* "categoria" precisa ser igual o nome do arquivo, e _categoria é só um nome temporário */
            produto: _produto.nome,
            categoria: categorias.find(_categoria => _categoria.id === _produto.categoria)
        }
    }));
    console.log("huhu");
    console.log(paths);
    return { paths, fallback: false }
}


/* para cada página possivel, vai pegar as propriedades (categorias do server) */
export async function getStaticProps({params}) {
    const res = await fetch(`http://localhost:4000/produtos`);
    const produtos = await res.json();

    /* para cada página, mande (retorne) para página Categoria um item de categorias
    cujo nome seja igual ao parametro passado pela getStaticPaths */
    const item = produtos.find(_produto => _produto.nome === params.produto);

    return { props: { item} }
}  


/* recebe o { item } retornado por getStaticProps */
export default function Produto({item}){
    const router = useRouter()
    const { produto, categoria } = router.query
    return <>
        <ProductsSingle product={item}/>
    </>
}