import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 0;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`

export const Content = styled.div`
    flex: 1 auto;
    width: 100%;
    max-width: 48%;

    h2 {
        font-size: 36pt;
        margin-bottom: 2rem;
        font-weight: normal;

        @media (max-width: 960px) {
            font-size: 18pt;
        }
    }
    span {
        font-weight: bold;
    }

    @media (max-width: 960px) {
        text-align: center;
        width: 100%;
        max-width: 100%;
        margin-bottom: 2rem;
    }
`
