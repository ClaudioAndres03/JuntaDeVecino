import React, { useState, useContext, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import GlobalContext from '../Common/GlobalContext'
import images from '../Common/images';
import { onSumit, getFullName } from '../../Api/api-login'
import Alert from '../Common/Alert'
import ContextMiddleware from '../Common/ContextMiddleware';

const Index = () => {

    const [contextState, , contextMiddleware] = useContext(GlobalContext);
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const loginBtn = useRef();


    const loginHandler = () => {
        onSumit(username, password)
            .then(resp => {
                if (resp.status >= 400) throw new Error("usuario incorrecto")
                return resp.json()
            })
            .then(resp => {
                contextMiddleware.logIn(resp.token)
                getFullName(username)
                    .then(resp => resp.json())
                    .then(resp => contextMiddleware.newFullName(resp.profile))
                    .catch(err => console.log(err.message))

                history.push('/main-menu')
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const clickLogin = event => {
        if (event.key === 'Enter') {
            loginBtn.current.click()
        }
    }

    return (
        <>
            {/* {resStatus ? <Link to="/main-menu" /> : alert("Usuario no Autorizado")} */}
            <div className='main-container-login container-fluid h100' id="root">
                <header className="container-fluid d-flex justify-content-start" >
                    <figure>
                        <img className="logo-compony mt-2" src={images.logouser} alt="" />
                        {/* <figcaption className="text-logo-company" >Con Dios y la comunida todo es posible</figcaption> */}
                    </figure>
                </header>

                <div className="login-content">

                    <div className="row justify-content-center">
                        <img className="icon-user" src={images.logouser} alt="" />
                    </div>

                    <div className="row justify-content-center">
                        <p className="text-user-logo">Login Here</p>
                    </div>

                    <div className="d-flx justify-content-center">

                        <div className="p-2 justify-content-center row">
                            <input
                                className="input-login"
                                type="text"
                                id="input-login-upper"
                                placeholder="Username"
                                value={username}
                                onChange={e => setusername(e.target.value.toUpperCase())}
                            />
                        </div>

                        <div className="p-2 justify-content-center row">
                            <input
                                className="input-login"
                                type="password"
                                placeholder="PASSWORD"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                onKeyPress={clickLogin}
                            />

                        </div>

                        <div className="mb-4 justify-content-center row">
                            <a className="forget-pass" href="">Forget Password?</a>
                        </div>


                        <div className="p-1 justify-content-center row">
                            <button className="btn button-login-login" ref={loginBtn} type="button" onClick={() => loginHandler()} >Summit</button>
                        </div>


                        <div className="p-1 justify-content-center row">
                            <button className="btn button-login-create" type="button">Create an Account</button>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}
export default Index;