import { useRouter } from 'next/router'

export default function Categoria(){
    const router = useRouter()
    const { categoria } = router.query

    return <>
    <h1>Categorias de {categoria}</h1>
    <h3>hello world</h3>
    </>
}