// import React from 'react'
import './Portfolio.css'
import min1 from '../images/min1.jpg'
import min2 from '../images/min2.jpg'
import min3 from '../images/min3.jpg'
import min4 from '../images/min4.jpg'

function Portfolio() {
  return (
    <div id='portfolio' className='secciones2'>
        <h1>PORTFOLIO</h1>
        <div className="flex-container2">
            <div className="flex-item2">
              <div className='image-container'>
                <img className='imagen' src={min1} alt=""/>
                <a href="https://zalazar8.github.io/medcac/">
                  <div className='image-overlay'>
                    <p className='image-text'>DEMO</p>
                  </div>
                </a>
              </div>
              <div className='texto2'>
                <p>El proyecto web fue desarrollado utilizando Bootstrap y CSS para lograr un diseño moderno y responsivo. Se aplicaron estilos personalizados y se aprovecharon las funcionalidades de Bootstrap para crear una interfaz intuitiva y atractiva, garantizando una experiencia de usuario óptima.</p>
              </div>
            </div>
            <div className="flex-item2">
              <div className='image-container'>
                <img className='imagen' src={min2} alt=""/>
                <a href="https://zalazar8.github.io/camping/">
                  <div className='image-overlay'>
                    <p className='image-text'>DEMO</p>
                  </div>
                </a>
              </div>
              <div className='texto2'>
                <p>Este proyecto se creó con HTML, CSS y JavaScript, incorporando animaciones para brindar una experiencia visual dinámica y atractiva. Se utilizaron técnicas de animación CSS y bibliotecas de JavaScript para lograr transiciones fluidas y efectos interactivos que mejoran la interacción del usuario.</p>
              </div>
            </div>
            <div className="flex-item2">
              <div className='image-container'>
                <img className='imagen' src={min3} alt=""/>
                <a href="https://zalazar8.github.io/fotografia/">
                  <div className='image-overlay'>
                    <p className='image-text'>DEMO</p>
                  </div>
                </a>
              </div>
              <div className='texto2'>
                <p>Esta página se construyó con HTML, CSS y JavaScript e incluye un formulario. Además, se integró Google Maps para proporcionar funcionalidades de ubicación y permitir a los usuarios visualizar y buscar direcciones de manera sencilla dentro de la aplicación.</p>
              </div>
            </div>
            <div className="flex-item2">
              <div className='image-container'>
                <img className='imagen' src={min4} alt=""/>
                <a href="https://zalazar8.github.io/viajuy/">
                  <div className='image-overlay'>
                    <p className='image-text'>DEMO</p>
                  </div>
                </a>
              </div>
              <div className='texto2'>
                <p>Este proyecto web es una SPA creada utilizando React. Esta tecnología permite desarrollar una aplicación web altamente interactiva y eficiente, con una navegación suave y una actualización dinámica de contenido, brindando una experiencia de usuario mejorada y una mayor velocidad de carga.</p>
              </div>
            </div>
            {/* <div className="flex-item2">
                <img className='imagen' src={miniatura} alt=""/>
              <div className='texto2'>
                <p>Lorem ipsum dolor, sit o deleniti porro vel, ndis modi minima hic nam unde nemo ad at voluptates quam aperiam quaerat id, doloribus amet error culpa? Aperiam quae quam alias fuga consequatur esse voluptatum molestias voluptates laborum quas? Laudantium saepe reiciendis nulla.</p>
              </div>
            </div>
            <div className="flex-item2">
                <img className='imagen' src={miniatura} alt=""/>
              <div className='texto2'>
                <p>Lorem ipsum dolor, sit o deleniti porro vel, ndis modi minima hic nam unde nemo ad at voluptates quam aperiam quaerat id, doloribus amet error culpa? Aperiam quae quam alias fuga consequatur esse voluptatum molestias voluptates laborum quas? Laudantium saepe reiciendis nulla.</p>
              </div>
            </div> */}
         </div>
    </div>
  )
}

export default Portfolio