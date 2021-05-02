import React from 'react';
import DataGrip from '../Common/DataGrid'

const Index = () => {

    return (
        <div className='main-container-login w100 h100' id="root">

            <div className="row col-12 mainmenu-container">

                <div className="col-4 securtiy-container-search">

                    <p className="m-0 title-search">Search</p>
                    <div className="p-2 justify-content-center row">
                        <input
                            className="input-search"
                            type="text"
                            placeholder="Name"
                        />
                    </div>

                    <div className="p-2 justify-content-center row">
                        <input
                            className="input-search"
                            type="text"
                            placeholder="Document ID"
                        />
                    </div>

                    <div className="p-1 justify-content-center row">
                        <button className="btn button-search" type="button" >Search</button>
                    </div>

                </div>

                <div className="col-7 pt-3 p-1 securtiy-container-search">
                    <p className="m-0 title-search">Information</p>
                    <div className="col-12 d-flex aling-items-center p-1">
                        <div className="col-3 p-1 flex-column d-flex justify-content-center aling-items-center">
                            <p className="m-0 txt-information-sub">Full Name:</p>
                            <p className="m-0 txt-information-sub">Documente ID:</p>
                            <p className="m-0 txt-information-sub">Phone Number:</p>
                        </div>
                        <div className="col-3 p-0 flex-column d-flex justify-content-center aling-items-center">
                            <p className="m-0 txt-information-value">Tony Star</p>
                            <p className="m-0 txt-information-value">029873638238</p>
                            <p className="m-0 txt-information-value">829-837-3873</p>
                        </div>
                        <div className="col-3 p-1 flex-column d-flex justify-content-center aling-items-center">
                            <p className="m-0 txt-information-sub">Email:</p>
                            <p className="m-0 txt-information-sub">Street Name:</p>
                            <p className="m-0 txt-information-sub">House Number:</p>
                        </div>
                        <div className="col-3 p-0 flex-column d-flex justify-content-center aling-items-center">
                            <p className="m-0 txt-information-value">tstar@jdv.com</p>
                            <p className="m-0 txt-information-value">Santo Domingo</p>
                            <p className="m-0 txt-information-value">16B</p>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <DataGrip />
                </div>



            </div>



        </div>
    )
}

export default Index