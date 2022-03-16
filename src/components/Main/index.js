import React, { useState, useRef, useEffect } from 'react';

import { Checkbox } from '../Checkbox';

import medicine from '../../../public/images/medicine.svg'
import { Result } from '../Result';

import { ContainerMain } from './style';

import objects from './objects';

export function Main() {
    const [types, setTypes] = useState(objects.propsCheckBoxes);
    const [typeSelected, setTypeSelected] = useState();

    const mainRef = useRef();

    useEffect(() => {
        const header = document.querySelector('header');
        const headerHeight = header.offsetHeight;

        mainRef.current.style.marginTop = `${headerHeight + 30}px`;
    }, [mainRef])

    function handleCheck(bloodType) {
        setTypes(prevState => (
            prevState.map(type => (
                type.text === bloodType ? { ...type, check: true } : { ...type, check: false }
            ))
        ))
    }

    function handleVerify() {
        const [objectTrue] = types.filter(obj => {
            return obj.check === true;
        });
        
        setTypeSelected(objectTrue.text);
    }

    return (
        <ContainerMain ref={mainRef} id="inicio">
            <article>
                <p>
                Primeiramente, queria dizer que é muito importante doar sangue. Existem milhares de pessoas esperando para receber. Doar sangue salva vidas. 
                </p>
                <p>
                Para você doar, basta seguir algumas regras. <a target="_blank" href="https://www.gov.br/saude/pt-br/composicao/saes/sangue">Neste link</a> você pode verificar tudo, se tiver interesse! 
                </p>
            </article>

            <img src={medicine} alt="medicine" />

            <div id="verificar">
                <div>
                    {types.map((type, index) => (
                        index <= 3 ?
                            <Checkbox
                                key={type.id}
                                index={index}
                                text={type.text}
                                check={type.check}
                                onCheckType={handleCheck}
                            />
                        : ''
                    ))}
                </div>
                <div>
                    {types.map((type, index) => (
                        index > 3 ?
                            <Checkbox
                                key={index}
                                text={type.text}
                                check={type.check}
                                onCheckType={handleCheck}
                            />
                        : ''
                    ))}
                </div>

                <button
                    onClick={handleVerify}
                    className="current-button"
                >
                    Verificar para quem posso doar
                </button>

                <Result typeSelected={typeSelected} />
            </div>
        </ContainerMain>
    )
}