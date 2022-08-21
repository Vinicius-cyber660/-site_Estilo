import styles from '../styles/Login.module.css'
import React from 'react';
import GoogleLogin from 'react-google-login';

export default function login(){
    const responseGoogle = (response) => {
        console.log(response);
    };
    return(
    <div id={styles.login}>
        <h1>Entrar com</h1>
        <GoogleLogin 
        clientId="679462750159-7ragf3niqd3bn0629tmpttj18o3ehel2.apps.googleusercontent.com"
        buttonText="Continuar com o Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        />
    </div>
     )
}