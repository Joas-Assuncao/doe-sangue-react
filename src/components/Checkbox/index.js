import React from 'react';

import { ContainerCheckbox } from './style';

export function Checkbox(props) {
    return (
        <ContainerCheckbox>
            {props.check ? <button onClick={() => props.onCheckType(props.text)}>✔️</button> : <button onClick={() => props.onCheckType(props.text)}></button>}
            <span>{props.text}</span>
        </ContainerCheckbox>
    );
}