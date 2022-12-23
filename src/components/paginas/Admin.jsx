import React from 'react'
import NavbarLogout from '../../components/NavbarLogout'
import {Link} from 'react-router-dom'
import Footer from '../Footer'

const Admin = () => {
    return (
        <>
            <NavbarLogout />
            <div className="row gx-0 justify-content-center formulario3">
                <div className="col-lg-8 col-xl-8">
                    <form id="contactForm" method="post" action="#">
                    <div id="alling">
                    <h2 className="display-8 fw-bolder mt-4">BIENVENIDO ADMIN</h2>
                    </div>
                    <div id="alling">
                    <h3 className="display-8 fw-bolder mt-4">Puntos de acceso</h3>
                    </div>
                        
                    
                    <table class="table table-responsive">
                        <thead>
                            <tr>
                                <th>Nombre sede</th>
                                <th>Direccion</th>
                                <th>Ingresos <br/> apobados</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bogota</td>
                                <td>Carrera 2 5-25</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Pasto</td>
                                <td>Carrera 2 5-25</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Medellin</td>
                                <td>Carrera 2 5-25</td>
                                <td>5</td>
                            </tr>
                        </tbody>
                    </table>   
                       
                                                                      
                        <div className="botones mt-4">
                        <button className="btn btn-secondary" id="submitButton" type="submit"><Link className="btn ms-2" to="/">Lectura de QR</Link></button>
                        </div>

                        <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Empleado: <p>Nombre empleado</p></h5>
                            <p class="card-text">El empleado requiere acceso a la sede <p>1 de Pasto</p></p>
                            <a href="#" class="btn btn-secondary">Dar acceso</a>
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

export default Admin