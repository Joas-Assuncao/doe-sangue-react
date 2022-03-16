import styled from 'styled-components';

export const ContainerMain = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #212121;

    article {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 2rem;

        color: #f2f2f2;

        p {
            font-size: 1.3rem;
            width: 30rem;

            a {
                color: #ff6366;

                text-decoration: none;
            }
        }
    }

    img {
        max-width: 35rem;
        margin: 3.125rem 0;
    }

    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;

        width: 23rem;

        div {
            display: flex;
            flex-direction: row;
            align-items: center;

            & + div {
                margin-top: .3125rem;
            }

            button {
                border: none;
            }
        }

        button.current-button {
            width: 100%;

            padding: 1rem 0;
            margin: 1.825rem 0;

            background: #080746;
            color: #f2f2f2;

            font-size: 1.2rem;

            border: none;
            border-radius: .5rem;
        }

        p.result {
            font-size: 1rem;
            text-align: left;
        }
    }

    @media(max-width: 1100px) {
        article {
            p {
                font-size: 1.1rem;
                width: 25rem;
            }
        }
    }

    @media(max-width: 910px) {
        article {
            p {
                font-size: 1rem;
                width: 20rem;
            }
        }

        img {
            max-width: 30rem;
            margin: 3.125rem 0;
        }

        div {
            button.current-button {
                margin: 3rem 0;
            }

            section {
                margin-bottom: 1.125rem;
            }
        }
    }

    @media(max-width: 690px) {
        article {
            p {
                width: 17rem;
            }
        }
    }

    @media(max-width: 600px) {
        article {
            align-items: center;
            flex-direction: column;

            p {
                text-align: center;

                width: 25rem;

                & + p {
                    margin-top: 2rem;
                }
            }
        }

        img {
            max-width: 25rem;
            margin: 3.125rem 0;
        }
    }

`;