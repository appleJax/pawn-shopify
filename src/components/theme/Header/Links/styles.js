import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        margin-right: 1rem;
        color: #373950;

        @media (max-width: 680px) {
            margin-bottom: .5rem;
        }

        &:last-child {
            margin-right: unset;
            color: #fff;

            @media (max-width: 680px) {
                margin-bottom: unset;
            }
        }
    }

    @media (max-width: 680px) {
        flex-direction: column;
        margin-top: 2rem;
    }
`
