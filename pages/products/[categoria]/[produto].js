import { useRouter } from 'next/router'

export default function Produto(){
    const router = useRouter()
    const { produto } = router.query
    const { categoria } = router.query

    return <>
    <h1>{produto}</h1>
    <div>
        <div className='FtProduto'>
            <img src="/images/550x550.png"/>
        </div>
        <div>

        </div>
    </div>
    </>
}