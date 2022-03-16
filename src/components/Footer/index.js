import React from 'react';

import { ContainerFooter } from './style';

export function Footer() {
    return (
        <ContainerFooter>
            <div id="contatos">
                <h3>Contatos</h3>
                <a target="_blank" href="https://github.com/Joas-Assuncao">Github Dev</a>
                <a target="_blank" href="https://www.linkedin.com/in/jo%C3%A1s-assun%C3%A7%C3%A3o-0645571b7/">Linkedin Dev</a>
            </div>
            <div>
                <h3>Saber mais</h3>
                <a target="_blank" href="https://www.gov.br/saude/pt-br/composicao/saes/sangue">Ministério da saúde</a>
                <a target="_blank" href="https://www.google.com/search?client=opera-gx&q=hemocentro&sourceid=opera&ie=UTF-8&oe=UTF-8">Hemocentro</a>
            </div>
            <div>
                <h3>Citações</h3>
                <a target="_blank" href="https://undraw.co/">Imagens</a>
                <a target="_blank" href="https://fonts.google.com/">Fontes</a>
            </div>
        </ContainerFooter>
    )
};