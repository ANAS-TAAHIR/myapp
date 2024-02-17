import React from "react";
import { useState } from 'react';
import { useFirebase } from "../context/Firebase";

const SignUp = () => {
    const firebase = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h2>Sign Up</h2>
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email'/>
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
            <button onClick={() => firebase.signUpUserwithEmailAndPassword(email , password)}>Sign Up</button>
        </div>
    );
}
export default SignUp;