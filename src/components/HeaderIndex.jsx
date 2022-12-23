import { useState } from 'react'
import empresa from '../assets/img/logoe.png';

const HeaderIndex = () => {
    return (
        <header className="bg-ligth py-3">
            <div className="container-fluid px-10">
                <div className="row gx-4 align-items-center justify-content-center">
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                        <div className="my-5 text-center text-xl-start">
                            <h1 className="text-dark cl-black display-5 fw-bolder mb-2">Plataforma de control de accesos</h1>
                            <p className="lead fw-normal text-dark-50 mb-4">En esta plataforma de podra realizar control de accesos a diferentes sucursales de la empresa!</p>
                        </div>
                    </div>
                    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src={empresa} alt="logo" height="20px" /></div>
                </div>
            </div>
        </header>
    )
}


export default HeaderIndex

