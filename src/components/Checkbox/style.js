import styled from 'styled-components';

export const ContainerCheckbox = styled.div`
    display: flex;
    align-items: center;

    max-width: 4rem;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        
        width: 1.2rem;
        height: 1.2rem;

        background: #f2f2f2;

        font-size: none;

        border-radius: .2rem;
    }

    span {
        color: #f2f2f2;
    }
`;