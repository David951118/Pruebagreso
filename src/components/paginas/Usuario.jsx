import React from 'react'
import NavbarLogout from '../../components/NavbarLogout'
import {Link} from 'react-router-dom'
import QRCode from "react-qr-code";
import Footer from '../Footer'

const Usuario = () => {
    return (
        <>
            <NavbarLogout />
            <div className="row gx-0 justify-content-center formulario3">
                <div className="col-lg-8 col-xl-8">
                    <form id="contactForm" method="post" action="#">
                    <div id="alling">
                    <h2 className="display-8 fw-bolder mt-4">Hola <p>Nombre usuario</p></h2>
                    </div>
                    <div id="alling">
                    <h3 className="display-8 fw-bolder mt-4">Aqui podras solicitar acceso</h3>
                    </div>
                   
                        <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Empleado: <p>Nombre empleado</p></h5>
                        <h5 class="card-title">Ubicacion: <p>Sede : </p></h5>
                        <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
                                
                                
                                <QRCode 
                                size={256}
                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                value="Nombre del empleado  Sede" 
                                viewBox={`0 0 256 256`}/>
                                
                            </div>
                        </div>
                        </div>
                        <div className="botones mt-4">
                        <Link className="btn btn-link ms-2" to="/">Salir</Link>
                            
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Usuario