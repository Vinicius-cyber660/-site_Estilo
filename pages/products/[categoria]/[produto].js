import { useRouter } from 'next/router'

export default function Produto(){
    const router = useRouter()
    const { produto } = router.query
    const { categoria } = router.query

    return <>
    <h1>{produto}</h1>
    <h2>aproveite</h2>
    <h5>{categoria}</h5>
    </>
}