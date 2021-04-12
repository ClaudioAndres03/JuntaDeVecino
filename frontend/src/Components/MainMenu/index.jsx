import React from 'react'
import Navbar from '../Common/Navbar'
import images from '../Common/images'

const Index = () => {

    return (
        <div className='main-container-login w100 h100' id="root">
            <Navbar />

            <div className="row col-10 mainmenu-container">

                <div className="col-10 mainmenu-title">
                    <p className="row d-flex flex-column justify-content-center align-items-center">MAIN MENU</p>
                </div>

                <div className="col-3 mainmenu-btn">
                    <figure className="row d-flex flex-column justify-content-center align-items-center mt-2 pt-3">
                        <img className="mainmenu-btn-img" src={images.iconPay} alt="" />
                        <p className="mainmenu-btn-txt">Pay Security</p>
                    </figure>
                </div>
                <div className="col-3 mainmenu-btn">
                    <figure className="row d-flex flex-column justify-content-center align-items-center mt-2 pt-3">
                        <div>
                            <img className="mainmenu-btn-img" src={images.iconPayCar} alt="" />
                        </div>
                        <div>
                            <p className="mainmenu-btn-txt">Pay RFID</p>
                        </div>

                    </figure>
                </div>
                <div className="col-3 mainmenu-btn">
                    <figure className="row d-flex flex-column justify-content-center align-items-center mt-2 pt-3">
                        <img className="mainmenu-btn-img" src={images.document} alt="" />
                        <p className="mainmenu-btn-txt">Reports</p>
                    </figure>
                </div>

            </div>



        </div>
    )
}

export default Index