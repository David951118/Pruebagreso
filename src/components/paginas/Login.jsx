import React from 'react'
import NavbarLogo from '../../components/NavbarLogo'
import {Link} from 'react-router-dom'
const Login = () => {
    return (
        <>
            <NavbarLogo />
            <div className="row gx-0 justify-content-center formulario container-sm">
                <div className="col-lg-8 col-xl-8 mt-5 col-sm-8">
                    <form className="col-med-12" id="contactForm" method="post" action="#">
                        <div className="form-floating mb-3">
                            <input className="form-control input-box" id="email" type="email" placeholder="name@example.com" />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control input-box" id="password" type="password" placeholder="Ingresa tu contraseña" />
                            <label htmlFor="name">Password</label>
                        </div>
                        <div className="d-grid"><Link className="btn btn-secondary ms-2" to="/Usuario">Usuario</Link></div>
                        <br />
                        <div className="d-grid"><Link className="btn btn-secondary ms-2" to="/Admin">Admin</Link></div>
                    </form>
                </div>
            </div>
            <br />
        </>
    )
}

export default Login