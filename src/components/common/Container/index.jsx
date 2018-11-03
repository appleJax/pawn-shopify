import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    width: 70%;

    @media (max-width: 1300px) {
        width: 80%;
    }

     @media (max-width: 680px) {
        width: 90%;
    }
`
