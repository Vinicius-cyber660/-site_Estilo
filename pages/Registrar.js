import styles from '../styles/Login.module.css'
import Link from 'next/link'

export default function Registrar(){
    return(
        <>
        <div id={styles.login}>
            <h1><Link href="/Login"><i className={"fa-solid fa-chevron-left"} id={styles.arrow}></i></Link>Crie sua conta</h1>
            <p id={styles.conta}>Crie sua conta é grátis</p>

            <form>
                <div className={styles.formImput}>
                    <label>Nome</label>
                    <input id={styles.email} type={"text"} />

                    <label>E-mail</label>
                    <input id={styles.email} type={"email"} />

                    
                    <label>Senha</label>
                    <input id={styles.email} type={"password"} />
                </div>
                <button id={styles.Entrar}>
                    Comece Agora!
                </button>
                <div className={styles.FooterLogin}>
                Já tem uma conta?
                <Link href="../Login">Faça login</Link>
            </div>
            </form>
        </div>
        </>
    )
}