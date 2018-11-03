import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: .5rem 0;
    background: #F9F9FC;

    p {
        margin: 0;
        font-size: .8em;
    }

    @media (max-width: 960px) {
        text-align: center;
    }
`

export const Flex = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 4rem 0;
    justify-content: space-between;

    @media (max-width: 960px) {
        flex-direction: column;
        text-align: center;
    }
`

export const Brand = styled.div`
    width: 100%;
    max-width: 36%;

    @media (max-width: 960px) {
        max-width: 100%;
        margin-bottom: 1.5rem;
    }
`

export const Item = styled.div`
    width: 100%;
    max-width: 13.5%;
    display: flex;
    flex-direction: column;

    a {
        margin-bottom: .5rem;
    }

    @media (max-width: 960px) {
        max-width: 100%;
        margin-bottom: 1.5rem;
    }
`
