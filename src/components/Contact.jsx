import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { SceneMoon } from './SceneMoon'
import './Contact.css'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ae5fs0r', 'template_ysvm317', form.current, '73cj3B66zdPTxvk21')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          alert('Mensaje enviado')
      }, (error) => {
        alert('No se pudo enviar el mensaje')
          console.log(error.text);
      });
  };

  return (
    <div id='contact' className='container-contact'>
        <div className='col-contact'>
            {/* <h1>otra mitad</h1> */}
            <div className="contact">
                <div className="title">
                    <h1>Contacto</h1>
                </div>
                <div className="contact-info">
            <form ref={form} onSubmit={sendEmail}>
                <input name="user_name" type="text" className="textField" placeholder="Nombre Completo" required=""/>
                <input name="user_email" type="text" className="textField" placeholder="Dirección de email" required=""/>
                <textarea name="message" className="textField messageField" placeholder="Tu mensaje"></textarea>
                <input type="submit" className="textField submitButton" value="ENVIAR"/>
            </form>
                </div>
            </div>
        </div>
        
      <div className='col-contact'>
        <Canvas className='canvas2' shadows camera={{ position: [5, 5, -12], fov: 15}}>
            <SceneMoon />
        </Canvas>
      </div>
    </div>
  )
}

export default Contact