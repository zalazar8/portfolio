import React from 'react';
import './Home.css'

function Home() {
    return (
        <>
        <div className='vacio'></div>
        <div id='skills' className='datos'>
            <h1>Skills</h1>
        </div>
        <div id='portfolio' className='datos'>
            <h1>Portfolio</h1>
        </div>
        <div id='contacto' className='datos'>
            <h1>Contacto</h1>
        </div>
        </>
    );
}

export default Home;