import styles from '../styles/Login.module.css'
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect } from 'react';
import Facebook from '../components/Facebook';
import Loginn from './Loginn/index'

const clientId = "679462750159-7ragf3niqd3bn0629tmpttj18o3ehel2.apps.googleusercontent.com"

export default function login(){

    const [user, setUser] = useState(null);

    const actionLoginDataGoogle = async (u) => {
        let newUser = {
            id: u.uid,
            name: u.displayName,
            avatar: u.photoURL
        }

        setUser(newUser)
        
    }

    const actionLoginDataFacebook = async (u) => {
        let newUser = {
            id: u.uid,
            name: u.displayName,
            avatar: u.photoURL
        }

        setUser(newUser)
        
    }

    if(user === null){
        return(
        <Loginn onReceiveGoogle={actionLoginDataFacebook} />
        );
    }
    
    if(user === null){
        return(
            <Loginn onReceiveFacebook={actionLoginDataFacebook}/>
        );
    }
    

    return(<>

            <div id={styles.login}>
                <h1>Você já está logado</h1>
            </div>
            
            </>
     )
}