import { createContext , useContext } from 'react';
import {initializeApp} from 'firebase/app';
import {getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDZXm3rZaVnbgkUUXC1-14TyYaozUm-Yms",
    authDomain: "myapp-f7a42.firebaseapp.com",
    projectId: "myapp-f7a42",
    storageBucket: "myapp-f7a42.appspot.com",
    messagingSenderId: "223848447858",
    appId: "1:223848447858:web:9bc0d54c8beecae6fd67eb"
  };

const FireaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(FireaseApp);
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
    const signUpUserwithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(FirebaseAuth, email, password).then((userCredential) => alert('User Created')).catch((error) => alert('Error'));
    }
    const loginUserwithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(FirebaseAuth, email, password).then((userCredential) => alert('User Logged In')).catch((error) => alert('Error'));
    }
    return (
        <FirebaseContext.Provider value={{signUpUserwithEmailAndPassword , loginUserwithEmailAndPassword}}>
            {props.children}
        </FirebaseContext.Provider>
    )
};