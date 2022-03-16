import styled from 'styled-components';

export const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    
    background: #080746;
    color: #f2f2f2;

    position: fixed;
    top: 0;
    left: 0;

    & > div {
        display: ${({menuIsOpen}) => menuIsOpen ? "none" : "flex"};
        align-items: center;

        padding: 1rem .7rem;

        span {
            font-family: 'Rum Raisin', sans-serif;
            margin-left: 1rem;
            font-size: 1rem;
        }

        .imagem-logo {
            width: 3rem;
            height: 3rem;
        }
    }

    nav {
        height: ${({menuIsOpen}) => menuIsOpen ? "100vh" : "auto"};
        width: ${({menuIsOpen}) => menuIsOpen ? "100vw" : "auto"};

        transition: all 1s;

        button {
            background: none;
            border: none;

            ${({ menuIsOpen }) => menuIsOpen ? 'margin-top: 1rem;' : ''}

            img {
                width: 2rem;
                height: 2rem;
                margin-right: 1rem;
            }
        }

        .button-close {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }

        .links {
            display: flex;
            align-items: center;
            flex-direction: column;

            a {
                color: #f2f2f2;
                
                font-size: 1.5rem;
                text-decoration: none;
                letter-spacing: .3rem;

                margin-top: 3rem;

                transition: .3s;

                &:hover {
                    color: #898989;
                }
            }
        }
    }
`;