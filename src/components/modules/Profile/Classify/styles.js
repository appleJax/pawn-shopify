import styled from 'styled-components'

export const Label = styled.span`
    background: #eee;
    border-radius: 3px;
    padding: .5rem 1rem;
    width: 100%;
    max-width: 15%;
    margin-bottom: 1.5rem;
    flex: 1 auto;
`

export const Labels = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    justify-content: space-between;
`

export const Input = styled.input`
    margin-top: 1rem;
    margin-bottom: 2rem;
    border: 3px solid #E8E9F6;
    background: #fff;
    padding: .5rem 1rem;

    &:focus {
        outline: none;
    }
`

export const Img = styled.div`
    margin-top: 2rem;

    img {
        width: 60%;
        margin: 0 auto;
    }
`