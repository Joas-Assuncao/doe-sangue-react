import React, { useState } from 'react';

import { ContainerHeader } from './style';

import logo from '../../../public/images/logo.png';
import menu from '../../../public/images/menu.svg';
import close from '../../../public/images/close.svg';

export function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function handleMenu() {
        setMenuIsOpen(prevState => !prevState)
    };

    return (
        <ContainerHeader menuIsOpen={menuIsOpen}>
            <div>
                <img className="imagem-logo" src={logo} alt="Logo" />
                <span>Doe sangue</span>
            </div>

            <nav>
                { menuIsOpen ?
                    <>
                        <div className="button-close">
                            <button onClick={handleMenu}>
                                <img src={close} alt="Fechar" />
                            </button> 
                        </div> 
                        <div className="links">
                            <a onClick={handleMenu} href="#inicio">Início</a>
                            <a onClick={handleMenu} href="#verificar">Verificar</a>
                            <a onClick={handleMenu} href="#contatos">Contatos</a>
                        </div> 
                    </> :
                    <button onClick={handleMenu}>
                        <img src={menu} alt="Menu" />
                    </button>
                }
            </nav>
        </ContainerHeader>
    )
}