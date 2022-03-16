import styled from 'styled-components';

export const ContainerFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-around;

    background: #f2f2f2;

    margin-top: 1.875rem;
    padding: 1rem;

    div {
        display: flex;
        align-items: center;
        flex-direction: column;

        a {
            margin-top: 1rem;

            color: #212121;

            text-decoration: none;
        }
    }

    @media(max-width: 630px) {
        justify-content: space-between;

        padding: 1rem 2rem;
    }

    @media(max-width: 410px) {
        div {
            h3 {
                font-size: 1rem;
            }

            a {
                font-size: .8rem;
            }
        }
    }
`;