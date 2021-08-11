import React, { useState } from 'react'
import './login.css'
import { Link, useHistory } from 'react-router-dom'

import { auth } from "../firebase"


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //firebase login
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        //firebase register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //user created successfully
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="am_logo"
                />
            </Link>

            <div className="login_container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        onClick={signIn}
                        className="login_signInButton">
                        Sign in
                    </button>
                </form>
                <p>
                    By siging-in, you agree to save Amazon Clone and
                    skdfnkdjgfjngn djskbdfx jfjlfbefxxlz frfrjfrbgjlc
                    djfblec eeael curic dwsehrixj,zgcvnfi jekwhriireogr
                    thanks
                </p>

                <button
                    type="submit"
                    onClick={register}
                    className="login_registerButton"
                >Creat amazon account
                </button>

            </div>


        </div>
    )
}

export default Login
