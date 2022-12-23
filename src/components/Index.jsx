import veinte from '../assets/img/24-7.png';
import seguro from '../assets/img/seguro.png';
import control from '../assets/img/control.png';

const Index = () =>{
    return(
        <section className="py-5" id="features">
        <div className="container px-5 my-5">
            <div className="row gx-5">
                <div className="col-lg-10 ms-6">
                    <div className="row gx-5 row-cols-2 row-cols-md-3">
                        <div className="col mb-5 h-100 main-text">
                            <div className=""><img src={control} alt="control" width="110px"/></div>
                            <h2 className="h5">Administracion de accesos</h2>
                            <p className="mb-0">Administra accesos a diferentes locaciones remotamente</p>
                        </div>
                        <div className="col mb-5 h-100 main-text">
                        <div className=""><img src={seguro} alt="seguro" width="110px"/></div>
                            <h2 className="h5">Confiabilidad</h2>
                            <p className="mb-0">Tu ingreso es seguro para ti y tu empresa</p>
                        </div>
                        <div className="col mb-5 h-100 main-text">
                        <div className=""><img src={veinte} alt="24-7" width="110px"/></div>
                            <h2 className="h5">Disponibilidad 24/7</h2>
                            <p className="mb-0">Estamos disponibles 24/7 para atender inquietudes y problemas</p>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Index