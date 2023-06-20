import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container container'>
                <a href='#inicio' className='navbar-logo' onClick={closeMobileMenu}>
                    MOZ.ART
                </a>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href='#inicio' className={'nav-links'} onClick={closeMobileMenu}>
                            Inicio
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#sobre' className={'nav-links'} onClick={closeMobileMenu}>
                            Sobre Mí
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#skills' className={'nav-links'} onClick={closeMobileMenu}>
                            Skills
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#portfolio' className={'nav-links'} onClick={closeMobileMenu}>
                            Portfolio
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contacto' className={'nav-links'} onClick={closeMobileMenu}>
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar;