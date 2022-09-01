import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from'firebase/firestore';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default {

    googleLogar: async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
    },

    facebookLogar: async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
    }
}

