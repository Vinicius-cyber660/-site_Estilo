import styles from '../styles/Login.module.css'
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function login(){
    return(<>
            <GoogleOAuthProvider  clientId = "679462750159-7ragf3niqd3bn0629tmpttj18o3ehel2.apps.googleusercontent.com">

            <div id={styles.login}>
                <h1>Entrar com</h1>
                <meta name="referrer" content="origin"></meta>
                <GoogleLogin
                onSuccess = { credentialResponse  =>  { 
                    console . log ( credentialResponse ) ; 
                  } } 
                  onError = { ( )  =>  { 
                    console . log ( 'Falha no Login' ) ; 
                  } } >

                    
                </GoogleLogin>

            </div>
            </GoogleOAuthProvider>
            </>
     )
}