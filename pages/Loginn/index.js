import React from 'react';
import styles from '../../styles/Login.module.css'
import Link from 'next/link';
import ApiFire from '../ApiFire';
import firebaseApp from '../ApiFire';

export default function onReceiveGoogle() {

    const actionLoginGoogle = async () => {
        let result = await ApiFire.googleLogar();

        if(result){
            onReceiveGoogle(result.user);
        }else{
            alert('error');
        }
    }

    const actionLoginFacebook = async () => {
        let result = await ApiFire.facebookLogar();

        if(result){
            onReceiveFacebook(result.user);
        }else{
            alert('error');
        }
    }  

    return(<>
        <div id={styles.login}>
            <h1>Faça login em sua conta</h1>
            <button id={styles.botãoFace} onClick={actionLoginFacebook}><i className={"fa-brands fa-square-facebook fa-lg"}></i><div className={styles.center}>Fazer login com o Facebook</div></button>

            <button id={styles.botãoFace} onClick={actionLoginGoogle}><i className={"fa-brands fa-google fa-lg"}></i><div className={styles.center}>Fazer login com o Google</div></button>
            <p>OU</p>

            <form>
                <div className={styles.formImput}>
                    <label>E-mail</label>
                    <input id={styles.email} type={"email"} />

                    
                    <label>Senha</label>
                    <input id={styles.email} type={"password"} />
                </div>
                <button id={styles.Entrar}>
                    Entrar
                </button>
            </form>
            <div className={styles.FooterLogin}>
                Não tem uma conta?
                <Link href="../Registrar">Registre-se</Link>
            </div>
        </div>
    </>
    )
}