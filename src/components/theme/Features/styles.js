import styled from 'styled-components'

export const Wrapper = styled.div`
    background: #F9F9FC;
    text-align: center;
    padding: 4rem 0;

    h2 {
        margin-bottom: 4rem;
    }
`

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 960px) {
        flex-direction: column;   
    }
`

export const Item = styled.div`
    flex: 1 auto;
    width: 100%;
    max-width: 30%;
    text-align: center;

    h4 {
        font-weight: normal;
    }

    @media (max-width: 960px) {
        width: 100%;
        max-width: 100%;
        margin-bottom: 2rem;
    }
`
