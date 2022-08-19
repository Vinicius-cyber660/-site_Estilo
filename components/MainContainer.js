import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../styles/MainContainer.module.css'
import Link from 'next/link'

export default function MainContainer({children}){
    return (
    <>
    <Navbar/>
    <div className={styles.container}>
        {children}
    </div>
    <Link href="https://api.whatsapp.com/send?phone=5512982729709&text=Estilo%20Criação%20a%20seu%20dispor">
        <a target="_blank"
            id={styles.whats2}>
            <img id={styles.whatsimage} src="/images/whats.png" alt="Contato pelo WhatsApp" />
        </a>
    </Link>
    <Footer/>
    </>
    )
}