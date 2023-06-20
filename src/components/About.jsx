import React from 'react'
import './About.css'
import mifoto from '../images/martin.jpg'

function About() {
  return (
    <div id='sobre' className='secciones'>
        <div className="flex-container">
            <div className="flex-item" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div className='texto'>
                <h1>Sobre Mí</h1>
                <p>Me gusta la música en general, el cine y las películas de ciencia ficción. También tengo interés en los efectos digitales y el diseño web. Tengo experiencia en el uso de Blender, que me ayudo mucho a la hora de integrar objetos 3D en una web. Esta nueva experiencia me genera muchas ideas que poco a poco las voy a ir plasmando.</p>
              </div>
            </div>
            <div className="flex-item mas" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <img src={mifoto} alt=""/>
            </div>
            
         </div>
    </div>
  )
}

export default About