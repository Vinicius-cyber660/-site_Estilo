import { useRouter } from 'next/router'
import { ProductsSingle } from '../../../components/ProductsSingle'

export async function getStaticPaths() {
    const res = await fetch('http://localhost:4000/produtos');
    const produtos = await res.json();

    const cres = await fetch('http://localhost:4000/categorias');
    const categorias = await cres.json();

    const paths = produtos.map(p => (
        {
        params: {
            categoria: categorias.find(item => item.id === p.categoria).nome,
            produto: String.toString(p.id),
        }
    }));

    return { paths, fallback: false }
}


export async function getStaticProps({params}) {
    const res = await fetch(`http://localhost:4000/produtos`);
    const produtos = await res.json();

    let produto_id = Number.parseInt(params.produto);
    const item = produtos.find(_produto => _produto.id == produto_id);
    console.log(item);

    return { props: { item } }
}  


export default function Produto({item}){
    const router = useRouter()
    const { produto } = router.query
    const { categoria } = router.query

    return <>
        <ProductsSingle product={item}/>
    </>
}