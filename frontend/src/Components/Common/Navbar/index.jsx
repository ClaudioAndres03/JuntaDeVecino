import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import GlobalContext from '../GlobalContext'
import images from '../images';

const Index = () => {

    const [contextState, , contextMiddleware] = useContext(GlobalContext);
    const [activeDrop, setActiveDrop] = useState(false)

    const logutUser = () => {
        contextMiddleware.logOut()
    }

    const goToHome = () => {
        if (contextState.navTitle !== "MAIN MENU") {
            contextMiddleware.changeNavTitle("MAIN MENU")
        }
    }

    return (
        <div >
            <nav onBlur={() => setActiveDrop(false)} className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container-fluid">
                    <p className="nav-title m-0" href="#">{contextState.navTitle}</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to={"/main-menu"} onClick={() => goToHome()} style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <p className={`nav-link m-0 ${contextState.navTitle !== "MAIN MENU" ? "active" : ''}`} aria-current="page">Home</p>
                                </li>
                            </Link>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" onClick={() => setActiveDrop(activeDrop => !activeDrop)} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Management
                                </a>
                                <ul className={`dropdown-menu ${activeDrop ? 'dropdown-active' : ''}`} aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-2 nav-user-panel">
                    <Link to="/" onClick={() => logutUser()} style={{ textDecoration: 'none' }} >
                        <div className="nav-logout" >
                            <img className="nav-logout-img" src={images.iconUser2} alt="" />
                            <p className="nav-logout-txt m-0">{contextState.fullName}</p>
                        </div>
                    </Link>
                </div>
            </nav>

        </div >
    )
}

export default Index