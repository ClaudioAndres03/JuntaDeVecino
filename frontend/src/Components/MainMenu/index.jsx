import React, { useState, useContext } from 'react'
import GlobalContext from '../Common/GlobalContext'
import { Link } from 'react-router-dom';
import images from '../Common/images'
import ContextMiddleware from '../Common/ContextMiddleware';

const Index = () => {

    const [contextState, , contextMiddleware] = useContext(GlobalContext);

    return (
        <div className='main-container-login w100 h100' id="root">

            <div className="row col-10 mainmenu-container">
                {/* <div className="col-10 mainmenu-title">
                    <p className="row d-flex flex-column justify-content-center align-items-center">MAIN MENU</p>
                </div> */}

                <div className="col-3 mainmenu-btn">
                    <Link to="/pay-security" onClick={() => contextMiddleware.changeNavTitle("PAY SECURITY")} style={{ textDecoration: 'none' }} >
                        <figure className="row d-flex flex-column justify-content-center align-items-center mt-2 pt-3">
                            <img className="mainmenu-btn-img" src={images.iconPay} />
                            <p className="mainmenu-btn-txt">Pay Security</p>
                        </figure>
                    </Link>
                </div>
                <div className="col-3 mainmenu-btn">
                    <Link to="/pay-rfid" onClick={() => contextMiddleware.changeNavTitle("PAY SECURITY")} style={{ textDecoration: 'none' }} >
                        <figure className="row d-flex flex-column justify-content-center align-items-center mt-2 pt-3">
                            <img className="mainmenu-btn-img" src={images.iconPayCar} />
                            <p className="mainmenu-btn-txt">Pay RFID</p>
                        </figure>
                    </Link>
                </div>
                <div className="col-3 mainmenu-btn">
                    <Link to="/pay-reports" onClick={() => contextMiddleware.changeNavTitle("REPORST")} style={{ textDecoration: 'none' }} >
                        <figure className="row d-flex flex-column justify-content-center align-items-center mt-2 pt-3">
                            <img className="mainmenu-btn-img" src={images.report} />
                            <p className="mainmenu-btn-txt">Reports</p>
                        </figure>
                    </Link>
                </div>

            </div>



        </div >
    )
}

export default Index