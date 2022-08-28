import styles from '../styles/Login.module.css'
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect } from 'react';
import Facebook from '../components/Facebook';

const clientId = "679462750159-7ragf3niqd3bn0629tmpttj18o3ehel2.apps.googleusercontent.com"


export default function login(){
    return(<>

            <div id={styles.login}>
                <h1>Entrar com</h1>
                <div id="signInButton">
                  <Facebook/>
                </div>
            </div>
            
            </>
     )
}