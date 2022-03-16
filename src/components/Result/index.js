import React from 'react';

import objects from '../Main/objects';

import { ContainerResult } from './style';

export function Result({ typeSelected }) {
    const arrayTypes = objects.typesWithGiveAndReceive;
    
    const objCurrentDataType = arrayTypes.find((arrayDataType) => {
        if(arrayDataType[0] === typeSelected) {
            return arrayDataType;
        }
    })
    
    return (
        <ContainerResult>
            {typeSelected ? <>Você pode doar para os tipos {objCurrentDataType[1].give}, e pode receber de {objCurrentDataType[2].receive}</> : <>Selecione seu tipo sanguíneo acima para saber de qual tipo você pode receber e para qual você pode doar!</>}
        </ContainerResult>
    );
}