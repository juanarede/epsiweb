import { React, useEffect} from 'react'

import phone from '../../assets/img/phone.png'
import './mainsection.css'

import Aos from 'aos'
import "aos/dist/aos.css"

function MainSection() {

    useEffect(() => {
        Aos.init({duration: 2000})
     
     }, []);
  return (
    <>
          <section id="features">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div data-aos="fade-left" className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                        <div className="container-fluid px-5">
                            <div className="row gx-5">
                                <div className="col-md-6 mb-5">
                                    
                                    <div className="text-center">
                                        <i className="bi-phone icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Diseño web Responsivo</h3>
                                        <p className="text-muted mb-0">Tu sitio web en cualquier dispositivo con la mejor calidad visual.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                 
                                    <div className="text-center">
                                        <i className="bi-phone icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Integración de Social Login</h3>
                                        <p className="text-muted mb-0">Añadimos metodos de autenticación por medio de las principales redes sociales.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-5 mb-md-0">
                                
                                    <div className="text-center">
                                        <i className="bi-phone icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Plataformas de pagos</h3>
                                        <p className="text-muted mb-0">Incorporamos distintas plataformas de pago en tu e-commerce.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                 
                                    <div className="text-center">
                                        <i className="bi-phone icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Posicionamiento</h3>
                                        <p className="text-muted mb-0">Hacemos llegar tu sitio web al público indicado con Google y su motor de búsqueda.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xs-12 order-lg-0">
                       
                    <img className='phone-main img-fluid' src={phone} alt=""/>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MainSection