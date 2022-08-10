import { useRouter } from 'next/router'


/* cria todas as rotas possíveis */
export async function getStaticPaths() {
    /* pega a lista de categorias do servidor e transforma em objeto do tipo json */
    const res = await fetch('http://localhost:4000/categorias');
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
    const res = await fetch(`http://localhost:4000/categorias`);
    const categorias = await res.json();

    /* para cada página, mande (retorne) para página Categoria um item de categorias
    cujo nome seja igual ao parametro passado pela getStaticPaths */
    const item = categorias.find(_categoria => _categoria.nome === params.categoria);
    return { props: { item } }
}  


/* recebe o { item } retornado por getStaticProps */
export default function Categoria(  {item}  ){
    const router = useRouter()
    const { categoria } = router.query
    console.log(item)

    return <>
    <h1>Categorias de { categoria }</h1>
    <h3>Aproveite</h3>
    <br></br>
    {/* usando o item na página */}
    <h3>{item.nome}</h3>
    </>
}